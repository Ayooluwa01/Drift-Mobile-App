import { styles } from "@/src/constants/Styles";
import { Categories } from "@/src/libs/Categories";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
const Header = () => {
  return (
    <View
      className="flex flex-row justify-between bg-white"
      style={{ padding: styles.spacing.padding }}
    >
      <View>
        <Text className="text-lg font-semibold">History</Text>
      </View>

      <View>
        <Text className="text-lg font-semibold">Categories</Text>
      </View>
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*     Send and Receive Buttons (Start Connection)                             */
const Startconnection = () => {
  return (
    <View>
      <ImageBackground
        source={require("@/assets/images/Bgs/Bg2.jpg")}
        style={{
          marginTop: styles.spacing.marginTop,
          padding: styles.spacing.padding,
          borderRadius: 14,
          marginHorizontal: 18,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          elevation: 1,
          position: "relative",
        }}
        contentFit="cover"
      >
        <View className="mb-10 flex flex-row justify-between">
          {/* Profile */}
          <View>
            <Image
              source="https://i.pravatar.cc/150?img=12"
              style={{ width: 60, height: 60, borderRadius: 100 }}
            />
            <Text className="mt-2 font-semibold text-lg">Lucas Sutopo</Text>
            <Text className="text-gray-500">User ID: 982433</Text>
          </View>

          {/* QR Code Scanner */}
          <View className="justify-center">
            <FontAwesome name="qrcode" size={40} />
          </View>
        </View>

        {/* Connection Buttons */}
        <View className="flex flex-row gap-6 justify-center">
          <TouchableOpacity
            className="flex-row items-center gap-2 px-4 py-3 "
            style={{
              backgroundColor: styles.colors.primaryLight,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              elevation: 1,
            }}
          >
            <Text className=" text-lg font-semibold">Send</Text>
            <FontAwesome name="send-o" size={22} />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center gap-2 px-4 py-3 "
            style={{
              backgroundColor: styles.colors.bgLight,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              elevation: 1,
            }}
          >
            <Text className=" text-lg font-semibold">Receive</Text>
            <FontAwesome name="download" size={22} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Categories list                              */
const renderItems = () => {
  return (
    <View style={{ paddingBottom: 30, marginTop: 6 }}>
      <Text
        style={{ marginHorizontal: 28, marginTop: styles.spacing.marginTop }}
      >
        Categories
      </Text>
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
