import { Buffer } from "buffer";
// import * as Device from "expo-device";
import dgram from "react-native-udp";
const BROADCAST_PORT = 5151;
let connected = false;

export const JoinConnection = () => {
  const socket = dgram.createSocket("udp4");
  //   console.log(
  //     "Model:",
  //     Device.modelName,
  //     "Name:",
  //     Device.deviceName,
  //     "Os:",
  //     Device.osName
  //   );

  // Receive Broadcast Message

  socket.on("message", (msg, rinfo) => {
    if (connected) return;
    const message = JSON.parse(msg.toString());
    // console.log(`📥 Message from ${rinfo.address}:`, message);

    if (message.type === "Send/Create") {
      console.log("🔗 Sender found! Joining connection...");
      connected = true;

      // Send acknowledgment back
      const reply = {
        type: "acknowledge",
        message: "Hello device, I received your broadcast!",
        model: "Tecno Pop7",
      };
      socket.send(
        Buffer.from(JSON.stringify(reply)),
        0,
        Buffer.byteLength(JSON.stringify(reply)),
        rinfo.port,
        rinfo.address,
        () => {
          //   console.log(`🔁 Reply sent to ${rinfo.address}`);
        }
      );
    }
  });

  // Bind UDP and enable broadcast
  socket.bind(BROADCAST_PORT, () => {
    socket.setBroadcast(true);
    // console.log(`📡 Joiner UDP listening on port ${BROADCAST_PORT}`);
  });
};
