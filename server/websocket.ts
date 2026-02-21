/**
 * WebSocket Signaling Server for WebRTC P2P
 * Production-ready with heartbeat, error handling, and logging
 */

import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

interface SignalingMessage {
    type: "join" | "offer" | "answer" | "ice-candidate" | "error" | "joined" | "ready" | "leave";
    roomId: string;
    senderId?: string;
    payload?: any;
}

export function setupWebsocketSignaling(server: Server) {
    const wss = new WebSocketServer({
        server,
        path: "/ws-signal",
        // Handle upgrade errors
        verifyClient: (info, callback) => {
            // Accept all connections (can add auth here if needed)
            callback(true);
        }
    });

    // Prevent unhandled WebSocket server errors from crashing the whole app.
    wss.on("error", (error: Error) => {
        console.error("[WS-Signal] Server error:", error.message);
    });

    // Map: roomId -> Set<WebSocket>
    const rooms = new Map<string, Set<WebSocket>>();
    // Map: WebSocket -> roomId (for cleanup)
    const clientRooms = new WeakMap<WebSocket, string>();
    // Map: WebSocket -> client ID
    const clientIds = new WeakMap<WebSocket, string>();

    // Generate unique client ID
    const generateClientId = () => Math.random().toString(36).substring(2, 10);

    // Heartbeat to keep connections alive on PaaS (AWS/Heroku/etc)
    const interval = setInterval(function ping() {
        wss.clients.forEach(function each(ws: any) {
            if (ws.isAlive === false) {
                console.log('[WS-Signal] Terminating dead connection');
                return ws.terminate();
            }

            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    wss.on("connection", (ws: any, req) => {
        const clientId = generateClientId();
        clientIds.set(ws, clientId);
        ws.isAlive = true;

        console.log(`[WS-Signal] Client connected: ${clientId} from ${req.socket.remoteAddress}`);

        ws.on("pong", () => {
            ws.isAlive = true;
        });

        ws.on("message", (rawMessage: Buffer | string) => {
            try {
                const message: SignalingMessage = JSON.parse(rawMessage.toString());
                const senderClientId = clientIds.get(ws) || 'unknown';

                switch (message.type) {
                    case "join":
                        handleJoin(ws, message.roomId, senderClientId);
                        break;

                    case "offer":
                    case "answer":
                    case "ice-candidate":
                        broadcastToRoom(ws, message, senderClientId);
                        break;

                    case "leave":
                        handleLeave(ws);
                        break;

                    default:
                        console.warn(`[WS-Signal] Unknown message type: ${message.type}`);
                }
            } catch (e) {
                console.error("[WS-Signal] Parse error:", e);
                safeSend(ws, { type: "error", payload: "Invalid message format" });
            }
        });

        ws.on("close", (code: number, reason: Buffer) => {
            console.log(`[WS-Signal] Client ${clientIds.get(ws)} disconnected: ${code}`);
            handleLeave(ws);
        });

        ws.on("error", (error: Error) => {
            console.error(`[WS-Signal] Client ${clientIds.get(ws)} error:`, error.message);
        });
    });

    const handleJoin = (ws: WebSocket, roomId: string, clientId: string) => {
        if (!roomId) {
            safeSend(ws, { type: "error", payload: "Room ID required" });
            return;
        }

        // Leave any existing room first
        handleLeave(ws);

        if (!rooms.has(roomId)) {
            rooms.set(roomId, new Set());
        }

        const room = rooms.get(roomId)!;

        // Allow max 2 peers per room for 1:1 transfer
        if (room.size >= 2) {
            console.log(`[WS-Signal] Room ${roomId} is full`);
            safeSend(ws, { type: "error", payload: "Room is full (max 2 peers)" });
            return;
        }

        room.add(ws);
        clientRooms.set(ws, roomId);

        console.log(`[WS-Signal] Client ${clientId} joined room ${roomId} (${room.size} peers)`);

        // Notify caller they joined successfully
        safeSend(ws, {
            type: "joined",
            roomId,
            peerCount: room.size,
            clientId
        });

        // If room has 2 people, notify both to start P2P handshake
        if (room.size === 2) {
            console.log(`[WS-Signal] Room ${roomId} ready - notifying peers`);
            room.forEach(client => {
                safeSend(client, { type: "ready", roomId });
            });
        }
    };

    const handleLeave = (ws: WebSocket) => {
        const roomId = clientRooms.get(ws);
        if (!roomId || !rooms.has(roomId)) return;

        const room = rooms.get(roomId)!;
        room.delete(ws);

        console.log(`[WS-Signal] Client left room ${roomId} (${room.size} peers remaining)`);

        if (room.size === 0) {
            rooms.delete(roomId);
            console.log(`[WS-Signal] Room ${roomId} deleted (empty)`);
        } else {
            // Notify remaining peer that other left
            room.forEach(client => {
                safeSend(client, {
                    type: "error",
                    payload: "Peer disconnected"
                });
            });
        }
    };

    const broadcastToRoom = (sender: WebSocket, message: SignalingMessage, senderId: string) => {
        const roomId = clientRooms.get(sender);
        if (!roomId || !rooms.has(roomId)) {
            console.warn(`[WS-Signal] Broadcast failed - client not in a room`);
            return;
        }

        const room = rooms.get(roomId)!;

        room.forEach(client => {
            // Send to everyone EXCEPT sender (standard signaling logic)
            if (client !== sender && client.readyState === WebSocket.OPEN) {
                safeSend(client, {
                    ...message,
                    senderId
                });
            }
        });
    };

    const safeSend = (ws: WebSocket, data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
            try {
                ws.send(JSON.stringify(data));
            } catch (e) {
                console.error("[WS-Signal] Send error:", e);
            }
        }
    };

    // Cleanup on server close
    wss.on("close", () => {
        console.log("[WS-Signal] WebSocket server closing");
        clearInterval(interval);
    });

    // Log stats periodically
    setInterval(() => {
        const totalClients = wss.clients.size;
        const totalRooms = rooms.size;
        if (totalClients > 0 || totalRooms > 0) {
            console.log(`[WS-Signal] Stats: ${totalClients} clients, ${totalRooms} rooms`);
        }
    }, 60000);

    console.log("[WS-Signal] Signaling server initialized on path /ws-signal");
}
