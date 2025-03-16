import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

import Button from "../components/Button";
import { mockEvents, mockUsers } from "../data/mockData";

const EventDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { eventId } = route.params;

  const event = mockEvents.find((e) => e.id === eventId);
  const host = mockUsers.find((user) => user.id === event?.hostId);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRSVP = () => {
    console.log("RSVP for event:", eventId);
  };

  const handleChat = () => {
    navigation.navigate("Chat", { eventId });
  };

  const handleAddToCalendar = () => {
    console.log("Add to calendar:", eventId);
  };

  if (!event) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.center}>
          <Text>Event not found</Text>
          <Button title="Go Back" onPress={handleBack} style={styles.mt4} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.flex}>
        <View style={styles.relative}>
          {event.image ? (
            <Image
              source={{ uri: event.image }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.noImage}>
              <Ionicons name="calendar" size={48} color="#718096" />
            </View>
          )}

          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0a153d" />
          </TouchableOpacity>
        </View>

        <View style={styles.padding}>
          <Text style={styles.title}>{event.name}</Text>

          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={16} color="#4a5568" />
            <Text style={styles.text}>{event.date}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="time-outline" size={16} color="#4a5568" />
            <Text style={styles.text}>{event.time}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-outline" size={16} color="#4a5568" />
            <Text style={styles.text}>{event.location.address}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={16} color="#4a5568" />
            <Text style={styles.text}>Hosted by {host?.fullName}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="pricetag-outline" size={16} color="#4a5568" />
            <Text style={styles.text}>
              {event.isFree ? "Free Event" : `$${event.price?.toFixed(2)}`}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About This Event</Text>
            <Text style={styles.text}>{event.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location</Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: event.location.latitude,
                longitude: event.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: event.location.latitude,
                  longitude: event.location.longitude,
                }}
                title={event.name}
              />
            </MapView>
          </View>

          <View style={styles.buttonRow}>
            <Button title="RSVP" onPress={handleRSVP} style={styles.flex1} />
            <Button title="Chat" onPress={handleChat} style={styles.flex1} />
            <Button
              title="Add to Calendar"
              onPress={handleAddToCalendar}
              style={styles.flex1}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  mt4: { marginTop: 16 },
  relative: { position: "relative" },
  image: { width: "100%", height: 256 },
  noImage: {
    width: "100%",
    height: 256,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 8,
  },
  padding: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2D3748" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  text: { marginLeft: 8, color: "#4A5568" },
  section: { marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#2D3748" },
  map: { width: "100%", height: 160, borderRadius: 8, marginTop: 8 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  flex1: { flex: 1, marginHorizontal: 4 },
});

export default EventDetailScreen;
