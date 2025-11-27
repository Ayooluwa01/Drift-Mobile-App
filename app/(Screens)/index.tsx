import { styles } from "@/src/constants/Styles";
import { Categories } from "@/src/libs/Categories";
import { Image } from "expo-image";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
const Header = () => {
  return (
    <View
      className="flex flex-row justify-between "
      style={{ padding: styles.padding }}
    >
      <View>
        <Text>History Button</Text>
      </View>

      <View>
        <Text>Category button</Text>
      </View>
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*     Send and Receive Buttons (Start Connection)                             */
const Startconnection = () => {
  return (
    // Profile
    <View style={{ marginTop: styles.marginTop, padding: 32 }}>
      <View className="mb-10 flex flex-row justify-between">
        <View>
          <Image source="./" alt="Image" />
          <Text>Lucas Sutopo</Text>
          <Text>User id</Text>
        </View>

        {/* Qr Code Scanner */}
        <View>
          <Text>Qrcode Scanner</Text>
        </View>
      </View>

      {/* Connection Buttons-Send and Receive */}
      <View className="flex flex-row gap-6">
        {/* Start connection-Send button */}
        <TouchableOpacity className=" bg-purple-400 ">
          <Text>Send</Text>
        </TouchableOpacity>

        {/* Join connection- Recieve button */}

        <TouchableOpacity className=" bg-purple-400 ">
          <Text>Receive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Categories list                              */
const renderItems = () => {
  return (
    <FlatList
      data={Categories}
      horizontal
      keyExtractor={(item, index) => item.Name}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 12,
              marginRight: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              key={item.Name}
              onPress={() => console.log(item.Name)}
            >
              <Text>{item.Name}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      contentContainerStyle={{ marginTop: 22 }}
    />
  );
};
/* -------------------------------------------------------------------------- */

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 18 }}>
      <Header />
      <FlatList
        ListHeaderComponent={<Startconnection />}
        ListFooterComponent={<></>}
        data={[1]}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
}
