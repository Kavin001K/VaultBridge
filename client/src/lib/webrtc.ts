/**
 * WebRTC P2P Client Logic
 * Handles connection, signaling, and data channel for file transfer.
 */

type SignalCallback = (data: any) => void;

export class P2PClient {
    private ws: WebSocket | null = null;
    private peerConnection: RTCPeerConnection | null = null;
    private dataChannel: RTCDataChannel | null = null;
    private roomId: string;
    private callbacks: { [key: string]: SignalCallback[] } = {};
    private isInitiator: boolean = false;
    private isDataChannelOpen: boolean = false;
    private messageQueue: (ArrayBuffer | string)[] = [];
    private connectionTimeout: ReturnType<typeof setTimeout> | null = null;

    // Config with multiple STUN/TURN servers for better connectivity
    private rtcConfig: RTCConfiguration = {
        iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:stun1.l.google.com:19302" },
            { urls: "stun:stun2.l.google.com:19302" },
            { urls: "stun:global.stun.twilio.com:3478" }
        ],
        iceCandidatePoolSize: 10
    };

    constructor(roomId: string, isInitiator: boolean) {
        this.roomId = roomId;
        this.isInitiator = isInitiator;
    }

    connect() {
        // Determine protocol (ws vs wss) based on page protocol
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.host;
        this.ws = new WebSocket(`${protocol}//${host}/ws-signal`);

        this.ws.onopen = () => {
            this.emit('status', 'Connected to signaling server');
            this.ws?.send(JSON.stringify({ type: 'join', roomId: this.roomId }));

            // Set connection timeout (30 seconds)
            this.connectionTimeout = setTimeout(() => {
                if (!this.isDataChannelOpen) {
                    this.emit('status', 'Connection timeout');
                    this.emit('failed', true);
                }
            }, 30000);
        };

        this.ws.onmessage = async (event) => {
            const message = JSON.parse(event.data);

            switch (message.type) {
                case 'joined':
                    this.emit('status', 'Joined room. Waiting for peer...');
                    break;
                case 'ready':
                    this.emit('status', 'Peer detected. Initializing P2P...');
                    if (this.isInitiator) this.setupPeerConnection();
                    break;
                case 'offer':
                    if (!this.isInitiator) {
                        this.emit('status', 'Received offer...');
                        await this.setupPeerConnection();
                        await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(message.payload));
                        const answer = await this.peerConnection?.createAnswer();
                        await this.peerConnection?.setLocalDescription(answer);
                        this.sendSignal('answer', answer);
                    }
                    break;
                case 'answer':
                    if (this.isInitiator) {
                        this.emit('status', 'Received answer...');
                        await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(message.payload));
                    }
                    break;
                case 'ice-candidate':
                    if (message.payload && this.peerConnection) {
                        try {
                            await this.peerConnection.addIceCandidate(new RTCIceCandidate(message.payload));
                        } catch (e) {
                            // Silently ignore ICE candidate errors (common during renegotiation)
                        }
                    }
                    break;
            }
        };

        this.ws.onerror = () => this.emit('error', 'Signaling socket error');
        this.ws.onclose = () => this.emit('status', 'Signaling connection closed');
    }

    private async setupPeerConnection() {
        this.peerConnection = new RTCPeerConnection(this.rtcConfig);

        this.peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                this.sendSignal('ice-candidate', event.candidate.toJSON());
            }
        };

        this.peerConnection.onicegatheringstatechange = () => {
            const state = this.peerConnection?.iceGatheringState;
            if (state === 'complete') {
                this.emit('status', 'ICE gathering complete');
            }
        };

        this.peerConnection.oniceconnectionstatechange = () => {
            const state = this.peerConnection?.iceConnectionState;
            if (state === 'failed') {
                this.emit('status', 'ICE connection failed');
                this.emit('failed', true);
            }
        };

        this.peerConnection.onconnectionstatechange = () => {
            const state = this.peerConnection?.connectionState;

            if (state === 'connected') {
                this.emit('status', 'Peer connected');
                if (this.connectionTimeout) {
                    clearTimeout(this.connectionTimeout);
                    this.connectionTimeout = null;
                }
            } else if (state === 'failed' || state === 'disconnected') {
                this.emit('failed', true);
            }
        };

        if (this.isInitiator) {
            // Create Data Channel with options for reliability
            this.dataChannel = this.peerConnection.createDataChannel("file-transfer", {
                ordered: true
            });
            this.setupDataChannel(this.dataChannel);

            // Create Offer
            const offer = await this.peerConnection.createOffer();
            await this.peerConnection.setLocalDescription(offer);
            this.sendSignal('offer', offer);
        } else {
            // Listen for Data Channel
            this.peerConnection.ondatachannel = (event) => {
                this.dataChannel = event.channel;
                this.setupDataChannel(this.dataChannel);
            };
        }
    }

    private setupDataChannel(channel: RTCDataChannel) {
        channel.binaryType = 'arraybuffer';

        channel.onopen = () => {
            this.isDataChannelOpen = true;
            this.emit('status', 'Secure channel open. Ready to transfer.');
            this.emit('connected', true);

            // Flush any queued messages
            this.flushMessageQueue();
        };

        channel.onclose = () => {
            this.isDataChannelOpen = false;
            this.emit('status', 'Data channel closed');
        };

        channel.onerror = (error) => {
            console.error('Data channel error:', error);
            this.emit('error', 'Data channel error');
        };

        channel.onmessage = (event) => this.handleDataMessage(event.data);
    }

    private handleDataMessage(data: any) {
        this.emit('data', data);
    }

    private flushMessageQueue() {
        while (this.messageQueue.length > 0 && this.isDataChannelOpen) {
            const message = this.messageQueue.shift();
            if (message && this.dataChannel?.readyState === 'open') {
                this.dataChannel.send(message as any);
            }
        }
    }

    // Public API to check if ready to send
    isReady(): boolean {
        return this.isDataChannelOpen && this.dataChannel?.readyState === 'open';
    }

    // Public API to send data (queues if not ready)
    sendData(data: ArrayBuffer | string) {
        if (this.dataChannel?.readyState === 'open') {
            this.dataChannel.send(data as any);
        } else {
            // Queue message instead of warning
            this.messageQueue.push(data);
        }
    }

    private sendSignal(type: string, payload: any) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type, roomId: this.roomId, payload }));
        }
    }

    on(event: string, callback: SignalCallback) {
        if (!this.callbacks[event]) this.callbacks[event] = [];
        this.callbacks[event].push(callback);
    }

    emit(event: string, data: any) {
        if (this.callbacks[event]) {
            this.callbacks[event].forEach(cb => cb(data));
        }
    }

    close() {
        if (this.connectionTimeout) {
            clearTimeout(this.connectionTimeout);
            this.connectionTimeout = null;
        }
        this.isDataChannelOpen = false;
        this.messageQueue = [];
        this.dataChannel?.close();
        this.peerConnection?.close();
        this.ws?.close();
        this.dataChannel = null;
        this.peerConnection = null;
        this.ws = null;
    }
}

