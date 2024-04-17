import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
//import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          toolBarLabel: "Home",
          tabBarLabelStyle: { color: "#008E970" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="find_dr"
        options={{
          toolBarLabel: "Find Dr",
          tabBarLabelStyle: { color: "black" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="black" />
            ) : (
              <AntDesign name="search1" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          toolBarLabel: "Services",
          tabBarLabelStyle: { color: "#008E970" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="briefcase-medical" size={24} color="black" />
            ) : (
              <AntDesign name="medicinebox" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="contact_us"
        options={{
          toolBarLabel: "Contact Us",
          tabBarLabelStyle: { color: "#008E970" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="contacts" size={24} color="black" />
            ) : (
              <MaterialCommunityIcons
                name="contacts-outline"
                size={24}
                color="black"
              />
            ),
        }}
      />
    </Tabs>
  );
}
