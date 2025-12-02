import { useMediaStore } from "@/src/Zustand/Mediastore";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export const Categoryitemlist = (category) => {
  const images = useMediaStore((state) => state.images);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{
        flex: 1 / 3,
        margin: 4,
        alignItems: "center",
      }}
    >
      {/* Thumbnail */}
      <Image
        source={{ uri: item.uri }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          marginBottom: 6,
          backgroundColor: "#ccc",
        }}
      />
      {/* Text info */}
      <Text style={{ fontWeight: "600", fontSize: 12 }} numberOfLines={1}>
        {item.filename || "Unnamed"}
      </Text>
      <Text style={{ color: "#888", fontSize: 10 }} numberOfLines={1}>
        {item.filesize ? `${item.filesize} KB` : "Unknown size"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{ flex: 1, padding: 8, borderTopWidth: 1, borderColor: "#e0e0e0" }}
    >
      {images.length > 0 ? (
        <FlatList
          data={images}
          keyExtractor={(item, index) => item.uri || index.toString()}
          renderItem={renderItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "#666" }}>Fetching...</Text>
        </View>
      )}
    </View>
  );
};
