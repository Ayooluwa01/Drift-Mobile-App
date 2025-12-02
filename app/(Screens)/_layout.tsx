// import Ionicons from "@expo/vector-icons/Ionicons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { Tabs } from "expo-router";
// import React from "react";
// export default function Homenavigation() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="home-outline" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="History"
//         options={{
//           title: "History",
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons name="manage-history" size={24} color="black" />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="Settings"
//         options={{
//           title: "Settings",
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="settings-outline" size={24} color="black" />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// app/(tabs)/_layout.tsx  or your Homenavigation component

import CustomNavBar from "@/src/components/Cutomnavbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Homenavigation() {
  return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: "#6D28D9", // Vibrant purple
    //     tabBarInactiveTintColor: "#94A3B8", // Soft gray
    //     tabBarStyle: {
    //       backgroundColor: "#FFFFFF",
    //       borderTopWidth: 1,
    //       borderTopColor: "#E2E8F0",
    //       height: 70,
    //       paddingBottom: 12,
    //       paddingTop: 8,
    //       elevation: 8,
    //       shadowColor: "#000",
    //       shadowOffset: { width: 0, height: -2 },
    //       shadowOpacity: 0.08,
    //       shadowRadius: 10,
    //     },
    //     tabBarLabelStyle: {
    //       fontSize: 12,
    //       fontWeight: "600",
    //       marginTop: 4,
    //     },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ focused, color }) => (
    //         <AnimatedTabIcon
    //           focused={focused}
    //           color={color}
    //           icon="home-outline"
    //           focusedIcon="home"
    //           iconSet="ionicons"
    //         />
    //       ),
    //     }}
    //   />

    //   <Tabs.Screen
    //     name="History"
    //     options={{
    //       title: "History",
    //       tabBarIcon: ({ focused, color }) => (
    //         <AnimatedTabIcon
    //           focused={focused}
    //           color={color}
    //           icon="history"
    //           focusedIcon="history"
    //           iconSet="material"
    //         />
    //       ),
    //     }}
    //   />

    //   <Tabs.Screen
    //     name="Settings"
    //     options={{
    //       title: "Settings",
    //       tabBarIcon: ({ focused, color }) => (
    //         <AnimatedTabIcon
    //           focused={focused}
    //           color={color}
    //           icon="settings-outline"
    //           focusedIcon="settings"
    //           iconSet="ionicons"
    //         />
    //       ),
    //     }}
    //   />
    // </Tabs>
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomNavBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}

// Reusable Animated Icon Component
function AnimatedTabIcon({
  focused,
  color,
  icon,
  focusedIcon,
  iconSet,
}: {
  focused: boolean;
  color: string;
  icon: string;
  focusedIcon: string;
  iconSet: "ionicons" | "material";
}) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(focused ? 1.2 : 1, {
          damping: 15,
          stiffness: 180,
        }),
      },
    ],
    // Optional: slight bounce up when active
    marginTop: withSpring(focused ? -4 : 0),
  }));

  const dotStyle = useAnimatedStyle(() => ({
    opacity: withSpring(focused ? 1 : 0),
    transform: [{ scale: withSpring(focused ? 1 : 0) }],
  }));

  const IconComponent = iconSet === "ionicons" ? Ionicons : MaterialIcons;

  return (
    <View style={styles.iconContainer}>
      <Animated.View style={animatedStyle}>
        <IconComponent
          name={focused ? focusedIcon : icon}
          size={28}
          color={color}
        />
      </Animated.View>

      {/* Active indicator dot */}
      <Animated.View style={[styles.activeDot, dotStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#6D28D9",
    marginTop: 6,
  },
});
