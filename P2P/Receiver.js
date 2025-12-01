const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("P2P backend running...");
});

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});

// -------------------- UDP RECEIVER --------------------
const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

const BROADCAST_PORT = 5151;

socket.on("message", (msg, rinfo) => {
  const message = msg.toString();
  console.log(`📥 JOINER RECEIVED → ${rinfo.address}:${rinfo.port}`);
  console.log(`   Message: ${message}`);
});

// Bind receiver
socket.bind(BROADCAST_PORT, () => {
  socket.setBroadcast(true);
  console.log(`📡 Joiner UDP listening on port ${BROADCAST_PORT}`);
});
