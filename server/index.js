import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

const fetchCrypto = async () => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 10,
          convert: "USD",
        },
      }
    );

    return response.data.data
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "application/json, Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "pong" }));
  }
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("New client connected");

  const sendPrices = async () => {
    const data = await fetchCrypto();
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  };

  sendPrices(); 

  const interval = setInterval(sendPrices, 30000); // every 30 seconds

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ws://localhost:${PORT}`);
});
