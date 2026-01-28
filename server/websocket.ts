
import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

interface SignalingMessage {
    type: "join" | "offer" | "answer" | "ice-candidate" | "error" | "joined";
    roomId: string;
    senderId?: string;
    payload?: any;
}

export function setupWebsocketSignaling(server: Server) {
    const wss = new WebSocketServer({ server, path: "/ws-signal" });

    // Map: roomId -> Set<WebSocket>
    const rooms = new Map<string, Set<WebSocket>>();
    // Map: WebSocket -> roomId (for cleanup)
    const clientRooms = new WeakMap<WebSocket, string>();

    // Heartbeat to keep connections alive on PaaS (like AWS/Heroku/Vercel)
    const interval = setInterval(function ping() {
        wss.clients.forEach(function each(ws: any) {
            if (ws.isAlive === false) return ws.terminate();

            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    wss.on("connection", (ws: any) => {
        ws.isAlive = true;
        ws.on("pong", () => { ws.isAlive = true; });

        ws.on("message", (rawMessage: string) => {
            try {
                const message: SignalingMessage = JSON.parse(rawMessage.toString());

                switch (message.type) {
                    case "join":
                        handleJoin(ws, message.roomId);
                        break;

                    case "offer":
                    case "answer":
                    case "ice-candidate":
                        broadcastToRoom(ws, message);
                        break;

                    default:
                        console.warn("Unknown signaling message type:", message.type);
                }
            } catch (e) {
                console.error("Signaling parse error:", e);
            }
        });

        ws.on("close", () => {
            const roomId = clientRooms.get(ws);
            if (roomId && rooms.has(roomId)) {
                const room = rooms.get(roomId);
                room?.delete(ws);
                if (room?.size === 0) {
                    rooms.delete(roomId);
                } else {
                    // Notify others? Not strictly necessary for this simple P2P 1:1
                }
            }
        });
    });

    const handleJoin = (ws: WebSocket, roomId: string) => {
        if (!rooms.has(roomId)) {
            rooms.set(roomId, new Set());
        }

        // Simple logic: Allow max 2 peers per room for 1:1 transfer
        const room = rooms.get(roomId)!;
        if (room.size >= 2) {
            ws.send(JSON.stringify({ type: "error", payload: "Room full" }));
            return;
        }

        room.add(ws);
        clientRooms.set(ws, roomId);

        // Notify caller they joined successfully
        ws.send(JSON.stringify({ type: "joined", roomId, peerCount: room.size }));

        // If room has 2 people, notify the first person (Sender) to start offer? 
        // Or just let client logic handle it based on "joined" event.
        if (room.size === 2) {
            // Broadcast "ready" to all peers
            room.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: "ready", roomId }));
                }
            });
        }
    };

    const broadcastToRoom = (sender: WebSocket, message: SignalingMessage) => {
        const roomId = clientRooms.get(sender);
        if (!roomId || !rooms.has(roomId)) return;

        const room = rooms.get(roomId)!;

        room.forEach(client => {
            // Send to everyone EXCEPT sender (standard signaling logic)
            if (client !== sender && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    };

    // Cleanup on server close
    wss.on("close", () => {
        clearInterval(interval);
    });
}
