import { styles } from "@/src/constants/Styles";
import { Categories } from "@/src/libs/Categories";
import { JoinConnection } from "@/src/utils/Joinconnection";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, ImageBackground } from "expo-image";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
const Header = () => {
  return (
    <View
      className="flex flex-row  bg-white"
      style={{
        padding: styles.spacing.padding,
        position: "relative",
        marginTop: 8,
      }}
    >
      {/* <View>
        <Text className="text-lg font-semibold">History</Text>
      </View> */}

      <View className="right-7 absolute">
        <MaterialCommunityIcons name="history" size={24} color="black" />
      </View>
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*     Send and Receive Buttons (Start Connection)                             */
export const Startconnection = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  function handleReceive() {
    setIsConnecting(true);
    JoinConnection();
    if (isConnecting) {
      setIsConnecting(false);
    }
  }

  function handleSend() {
    setIsConnecting(true);
    // your send logic
  }

  function cancelConnection() {
    setIsConnecting(false);
  }

  return (
    <View
      style={{
        marginTop: 3,
        borderRadius: 14,
        marginHorizontal: 18,
        overflow: "hidden",
        height: 260,
      }}
    >
      {/* Lottie Background */}
      <LottieView
        source={require("@/assets/lotties/Hotspot animation.json")}
        autoPlay
        loop
        style={StyleSheet.absoluteFillObject}
      />

      {/* If connecting show only Cancel */}
      {isConnecting ? (
        <View
          className="flex-1 items-center justify-center"
          style={{ padding: 20 }}
        >
          <TouchableOpacity
            onPress={cancelConnection}
            className="px-6 py-3 rounded-lg"
            // style={{ backgroundColor: "#fff9", backdropFilter: "blur(4px)" }}
          >
            <Text className="text-lg font-semibold">Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* Default mode: Profile + Send/Receive Buttons */
        <ImageBackground
          source={require("@/assets/images/Bgs/Group 25.png")}
          style={{
            marginTop: styles.spacing.marginTop,
            padding: styles.spacing.padding,
            borderRadius: 14,
            marginHorizontal: 12,
            position: "relative",
          }}
          contentFit="cover"
        >
          <View className="flex flex-row justify-between mb-10">
            <View>
              <Image
                source="https://i.pravatar.cc/150?img=12"
                style={{ width: 60, height: 60, borderRadius: 100 }}
              />
              <Text className="mt-2 font-semibold text-lg">Lucas Sutopo</Text>
              <Text className="text-gray-500">User ID: 982433</Text>
            </View>

            <View className="justify-center">
              <FontAwesome name="qrcode" size={40} color="white" />
            </View>
          </View>

          {/* Send & Receive Buttons */}
          <View className="flex flex-row gap-6 justify-center">
            <TouchableOpacity
              onPress={handleSend}
              className="flex-row items-center gap-2 px-4 py-3 rounded-lg"
              style={{
                backgroundColor: styles.colors.primaryLight,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                elevation: 1,
              }}
            >
              <Text className="text-lg font-semibold">Send</Text>
              <FontAwesome name="send-o" size={22} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleReceive}
              className="flex-row items-center gap-2 px-4 py-3 rounded-lg"
              style={{
                backgroundColor: styles.colors.bgLight,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                elevation: 1,
              }}
            >
              <Text className="text-lg font-semibold">Receive</Text>
              <FontAwesome name="download" size={22} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Categories list                              */
const renderItems = () => {
  return (
    <View style={{ paddingBottom: 30, marginTop: 6 }}>
      <View
        className="flex flex-row items-center justify-between"
        style={{ paddingHorizontal: 22, marginTop: styles.spacing.marginTop }}
      >
        {/* Left: Title */}
        <Text className="text-lg ">Categories</Text>

        {/* Right: See all */}
        <TouchableOpacity className="flex flex-row items-center">
          <Text className="text-base text-gray-600 mr-2">See all</Text>
          <FontAwesome6 name="caret-right" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Categories}
        horizontal
        keyExtractor={(item) => item.Name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="flex flex-col items-center ">
            <TouchableOpacity
              className="items-center justify-center  mx-3 rounded-full w-16 h-16"
              style={{
                backgroundColor: item.color,
              }}
            >
              <FontAwesome name={item.Icon} size={26} />
            </TouchableOpacity>
            <Text className="mt-1 font-medium">{item.Name}</Text>
          </View>
        )}
        contentContainerStyle={{ marginTop: 22, paddingHorizontal: 18 }}
      />
    </View>
  );
};
/* -------------------------------------------------------------------------- */

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: styles.colors.primaryLight }}
    >
      <Header />

      <FlatList
        ListHeaderComponent={<Startconnection />}
        ListFooterComponent={<View style={{ height: 40 }} />}
        data={[1]}
        renderItem={renderItems}
        style={{ backgroundColor: "#fff", flex: 1 }}
      />
    </SafeAreaView>
  );
}
