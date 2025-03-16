import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import screens
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";
import ProfileScreen from "./src/screens/participant/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import EventDetailScreen from "./src/screens/EventDetailScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ParticipantDashboard from "./src/screens/participant/DashboardScreen";
import HostDashboard from "./src/screens/host/DashboardScreen";
import VendorDashboard from "./src/screens/vendor/DashboardScreen";

// Import custom drawer content
import DrawerContent from "./src/navigation/DrawerContent";

// Import theme
import { theme } from "./src/theme/theme";

// Create navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Auth Navigator
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

// Tab Navigator for main app flow
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "account" : "account-outline";
        } else if (route.name === "Chat") {
          iconName = focused ? "chat" : "chat-outline";
        } else if (route.name === "Dashboard") {
          iconName = focused ? "view-dashboard" : "view-dashboard-outline";
        }

        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
      tabBarActiveTintColor: "#0a153d",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Dashboard" component={ParticipantDashboard} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// Drawer Navigator
const AppDrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: "#0a153d",
      drawerActiveTintColor: "#fff",
      drawerInactiveTintColor: "#333",
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
      },
    }}
  >
    <Drawer.Screen
      name="MainApp"
      component={TabNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        drawerIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" size={22} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

// Main App
export default function App() {
  // For demo purposes, we'll set isLoggedIn to true to show the main app
  const isLoggedIn = true;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer onReady={() => console.log("Navigation is ready")}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                  name="EventDetails"
                  component={EventDetailScreen}
                />
                <Stack.Screen name="HostDashboard" component={HostDashboard} />
                <Stack.Screen
                  name="VendorDashboard"
                  component={VendorDashboard}
                />
              </>
            ) : (
              <Stack.Screen name="Auth" component={AuthNavigator} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
// import React from "react";
// import { View, Text } from "react-native";

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Hello, World!</Text>
//     </View>
//   );
// }
