const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

const broadcastaddress = "255.255.255.255";
const broadcastport = 5151;

// Bind UDP and enable broadcast
socket.bind(broadcastport, () => {
  socket.setBroadcast(true);
});

// Receive Acknowledgment,Request to Join message
socket.on("message", (msg, rinfo) => {
  const message = msg.toString;
  console.log(message);
  if ((message.type = "acknowledge")) {
    console.log(`${message.model} trying to Join`);
    console.log(`${rinfo.address} has joined coonnection`);
  }
});
// Send broadcast every 3 seconds
setInterval(() => {
  const broadcastmessage = JSON.stringify({
    type: "Send/Create",
    name: "Createdconnection",
  });

  const msgBuffer = Buffer.from(broadcastmessage);

  socket.send(msgBuffer, 0, msgBuffer.length, broadcastport, broadcastaddress);
}, 9000);
