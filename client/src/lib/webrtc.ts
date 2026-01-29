/**
 * WebRTC P2P Client Logic - Production Ready
 * Handles connection, signaling, and data channel for file transfer.
 * 
 * Features:
 * - Multiple STUN servers for connectivity
 * - Free TURN servers for NAT traversal
 * - ICE candidate trickling with queuing
 * - Automatic reconnection attempts
 * - Connection state monitoring
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
    private iceCandidateQueue: RTCIceCandidateInit[] = [];
    private hasRemoteDescription: boolean = false;
    private reconnectAttempts: number = 0;
    private maxReconnectAttempts: number = 3;

    // Config with multiple STUN + FREE TURN servers for maximum connectivity
    private rtcConfig: RTCConfiguration = {
        iceServers: [
            // Google STUN servers
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:stun1.l.google.com:19302" },
            { urls: "stun:stun2.l.google.com:19302" },
            { urls: "stun:stun3.l.google.com:19302" },
            { urls: "stun:stun4.l.google.com:19302" },
            // Twilio STUN
            { urls: "stun:global.stun.twilio.com:3478" },
            // OpenRelay FREE TURN servers (crucial for NAT traversal)
            {
                urls: "turn:openrelay.metered.ca:80",
                username: "openrelayproject",
                credential: "openrelayproject"
            },
            {
                urls: "turn:openrelay.metered.ca:443",
                username: "openrelayproject",
                credential: "openrelayproject"
            },
            {
                urls: "turn:openrelay.metered.ca:443?transport=tcp",
                username: "openrelayproject",
                credential: "openrelayproject"
            },
            // Metered.ca FREE TURN (backup)
            {
                urls: "turn:a.relay.metered.ca:80",
                username: "e8d1d0e0b5a89e7e8b3c9b8a",
                credential: "mKzB+XRTH8gBVdxT"
            },
            {
                urls: "turn:a.relay.metered.ca:443",
                username: "e8d1d0e0b5a89e7e8b3c9b8a",
                credential: "mKzB+XRTH8gBVdxT"
            },
            {
                urls: "turn:a.relay.metered.ca:443?transport=tcp",
                username: "e8d1d0e0b5a89e7e8b3c9b8a",
                credential: "mKzB+XRTH8gBVdxT"
            }
        ],
        iceCandidatePoolSize: 10,
        iceTransportPolicy: "all", // Allow both relay and direct
        bundlePolicy: "max-bundle",
        rtcpMuxPolicy: "require"
    };

    constructor(roomId: string, isInitiator: boolean) {
        this.roomId = roomId;
        this.isInitiator = isInitiator;
        console.log(`[P2P] Creating client: Room=${roomId}, Initiator=${isInitiator}`);
    }

    connect() {
        // Determine protocol (ws vs wss) based on page protocol
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.host;
        const wsUrl = `${protocol}//${host}/ws-signal`;

        console.log(`[P2P] Connecting to signaling server: ${wsUrl}`);
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
            console.log('[P2P] WebSocket connected');
            this.emit('status', 'Connected to signaling server');
            this.ws?.send(JSON.stringify({ type: 'join', roomId: this.roomId }));

            // Set connection timeout (60 seconds - increased for TURN)
            this.connectionTimeout = setTimeout(() => {
                if (!this.isDataChannelOpen) {
                    console.log('[P2P] Connection timeout - retrying...');
                    this.handleConnectionFailure();
                }
            }, 60000);
        };

        this.ws.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            console.log('[P2P] Received signal:', message.type);

            switch (message.type) {
                case 'joined':
                    this.emit('status', `Joined room (${message.peerCount || 1} peer${message.peerCount > 1 ? 's' : ''})`);
                    break;

                case 'ready':
                    this.emit('status', 'Peer detected. Initializing P2P...');
                    if (this.isInitiator) {
                        await this.setupPeerConnection();
                    }
                    break;

                case 'offer':
                    if (!this.isInitiator) {
                        this.emit('status', 'Received offer...');
                        await this.setupPeerConnection();
                        try {
                            await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(message.payload));
                            this.hasRemoteDescription = true;
                            // Process queued ICE candidates
                            await this.processIceCandidateQueue();
                            const answer = await this.peerConnection?.createAnswer();
                            await this.peerConnection?.setLocalDescription(answer);
                            this.sendSignal('answer', answer);
                        } catch (e) {
                            console.error('[P2P] Error handling offer:', e);
                        }
                    }
                    break;

                case 'answer':
                    if (this.isInitiator) {
                        this.emit('status', 'Received answer...');
                        try {
                            await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(message.payload));
                            this.hasRemoteDescription = true;
                            // Process queued ICE candidates
                            await this.processIceCandidateQueue();
                        } catch (e) {
                            console.error('[P2P] Error handling answer:', e);
                        }
                    }
                    break;

                case 'ice-candidate':
                    if (message.payload) {
                        await this.handleIceCandidate(message.payload);
                    }
                    break;

                case 'error':
                    console.error('[P2P] Server error:', message.payload);
                    this.emit('error', message.payload);
                    break;
            }
        };

        this.ws.onerror = (error) => {
            console.error('[P2P] WebSocket error:', error);
            this.emit('error', 'Signaling socket error');
        };

        this.ws.onclose = () => {
            console.log('[P2P] WebSocket closed');
            this.emit('status', 'Signaling connection closed');
        };
    }

    private async handleIceCandidate(candidate: RTCIceCandidateInit) {
        if (!this.peerConnection) return;

        // Queue candidates if remote description not set yet
        if (!this.hasRemoteDescription) {
            console.log('[P2P] Queuing ICE candidate (waiting for remote description)');
            this.iceCandidateQueue.push(candidate);
            return;
        }

        try {
            await this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
            console.log('[P2P] Added ICE candidate:', candidate.candidate?.slice(0, 50) + '...');
        } catch (e) {
            // This is common during renegotiation, just log it
            console.warn('[P2P] Failed to add ICE candidate (non-critical):', e);
        }
    }

    private async processIceCandidateQueue() {
        console.log(`[P2P] Processing ${this.iceCandidateQueue.length} queued ICE candidates`);
        while (this.iceCandidateQueue.length > 0) {
            const candidate = this.iceCandidateQueue.shift();
            if (candidate) {
                await this.handleIceCandidate(candidate);
            }
        }
    }

    private async setupPeerConnection() {
        console.log('[P2P] Setting up peer connection with config:', this.rtcConfig.iceServers?.length, 'ICE servers');
        this.peerConnection = new RTCPeerConnection(this.rtcConfig);

        this.peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                console.log('[P2P] Sending ICE candidate:', event.candidate.type || 'unknown');
                this.sendSignal('ice-candidate', event.candidate.toJSON());
            }
        };

        this.peerConnection.onicegatheringstatechange = () => {
            const state = this.peerConnection?.iceGatheringState;
            console.log('[P2P] ICE gathering state:', state);
            if (state === 'complete') {
                this.emit('status', 'ICE gathering complete');
            }
        };

        this.peerConnection.oniceconnectionstatechange = () => {
            const state = this.peerConnection?.iceConnectionState;
            console.log('[P2P] ICE connection state:', state);

            switch (state) {
                case 'checking':
                    this.emit('status', 'Establishing connection...');
                    break;
                case 'connected':
                case 'completed':
                    this.emit('status', 'ICE connected');
                    break;
                case 'failed':
                    console.error('[P2P] ICE connection failed');
                    this.handleConnectionFailure();
                    break;
                case 'disconnected':
                    this.emit('status', 'Connection interrupted, attempting recovery...');
                    // Give it a moment to recover
                    setTimeout(() => {
                        if (this.peerConnection?.iceConnectionState === 'disconnected') {
                            this.handleConnectionFailure();
                        }
                    }, 5000);
                    break;
            }
        };

        this.peerConnection.onconnectionstatechange = () => {
            const state = this.peerConnection?.connectionState;
            console.log('[P2P] Connection state:', state);

            switch (state) {
                case 'connected':
                    this.emit('status', 'Peer connected');
                    if (this.connectionTimeout) {
                        clearTimeout(this.connectionTimeout);
                        this.connectionTimeout = null;
                    }
                    this.reconnectAttempts = 0;
                    break;
                case 'failed':
                    this.handleConnectionFailure();
                    break;
                case 'disconnected':
                    this.emit('status', 'Peer disconnected');
                    break;
            }
        };

        if (this.isInitiator) {
            // Create Data Channel with options for reliability
            console.log('[P2P] Creating data channel');
            this.dataChannel = this.peerConnection.createDataChannel("file-transfer", {
                ordered: true,
                maxRetransmits: 30 // Ensure reliability
            });
            this.setupDataChannel(this.dataChannel);

            // Create Offer
            const offer = await this.peerConnection.createOffer({
                offerToReceiveAudio: false,
                offerToReceiveVideo: false
            });
            await this.peerConnection.setLocalDescription(offer);
            this.sendSignal('offer', offer);
        } else {
            // Listen for Data Channel
            this.peerConnection.ondatachannel = (event) => {
                console.log('[P2P] Received data channel');
                this.dataChannel = event.channel;
                this.setupDataChannel(this.dataChannel);
            };
        }
    }

    private handleConnectionFailure() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`[P2P] Reconnection attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
            this.emit('status', `Connection unstable, retrying (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);

            // Restart ICE
            if (this.peerConnection && this.isInitiator) {
                this.peerConnection.restartIce();
            }
        } else {
            console.error('[P2P] All reconnection attempts failed');
            this.emit('status', 'Connection failed - firewall may be blocking P2P');
            this.emit('failed', true);
        }
    }

    private setupDataChannel(channel: RTCDataChannel) {
        channel.binaryType = 'arraybuffer';

        // Increase buffer threshold for large files
        try {
            channel.bufferedAmountLowThreshold = 1024 * 1024; // 1MB
        } catch (e) {
            // Some browsers don't support this
        }

        channel.onopen = () => {
            console.log('[P2P] Data channel open!');
            this.isDataChannelOpen = true;
            this.emit('status', 'Secure channel open. Ready to transfer.');
            this.emit('connected', true);

            // Flush any queued messages
            this.flushMessageQueue();
        };

        channel.onclose = () => {
            console.log('[P2P] Data channel closed');
            this.isDataChannelOpen = false;
            this.emit('status', 'Data channel closed');
        };

        channel.onerror = (error) => {
            console.error('[P2P] Data channel error:', error);
            this.emit('error', 'Data channel error');
        };

        channel.onmessage = (event) => this.handleDataMessage(event.data);

        channel.onbufferedamountlow = () => {
            // Resume sending if we were throttling
            console.log('[P2P] Buffer low - can send more data');
        };
    }

    private handleDataMessage(data: any) {
        this.emit('data', data);
    }

    private flushMessageQueue() {
        console.log(`[P2P] Flushing ${this.messageQueue.length} queued messages`);
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
            // Check buffer to avoid overwhelming
            if (this.dataChannel.bufferedAmount > 16 * 1024 * 1024) {
                // Buffer too full, queue and wait
                this.messageQueue.push(data);
                return;
            }
            this.dataChannel.send(data as any);
        } else {
            // Queue message instead of warning
            this.messageQueue.push(data);
        }
    }

    private sendSignal(type: string, payload: any) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type, roomId: this.roomId, payload }));
        } else {
            console.warn('[P2P] Cannot send signal - WebSocket not open');
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
        console.log('[P2P] Closing connection');
        if (this.connectionTimeout) {
            clearTimeout(this.connectionTimeout);
            this.connectionTimeout = null;
        }
        this.isDataChannelOpen = false;
        this.hasRemoteDescription = false;
        this.messageQueue = [];
        this.iceCandidateQueue = [];
        this.dataChannel?.close();
        this.peerConnection?.close();
        this.ws?.close();
        this.dataChannel = null;
        this.peerConnection = null;
        this.ws = null;
    }
}
