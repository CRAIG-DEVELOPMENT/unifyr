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
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/Button";
import { mockEvents, mockUsers, mockVendors } from "../../data/mockData";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const user = mockUsers.find((user) => user.role === "vendor");
  const vendor = mockVendors.find((vendor) => vendor.userId === user?.id);

  const vendorEvents = mockEvents.filter((event) =>
    event.vendorIds.includes(vendor?.id || "")
  );
  const availableEvents = mockEvents.filter(
    (event) => !event.vendorIds.includes(vendor?.id || "")
  );

  const handleEventPress = (eventId) => {
    navigation.navigate("EventDetail", { eventId });
  };

  const handleSettingsPress = () => {
    navigation.navigate("Settings");
  };

  const handleApplyToEvent = (eventId) => {
    console.log("Apply to event:", eventId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Vendor Dashboard</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Ionicons name="settings-outline" size={24} color="#0a153d" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.flex}>
          <View style={styles.padding}>
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeText}>Welcome, {user?.fullName}</Text>
              <Text style={styles.subText}>Business: {vendor?.name}</Text>
              <Text style={styles.subText}>{vendor?.description}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Your Events</Text>
              {vendorEvents.length > 0 ? (
                vendorEvents.map((event) => (
                  <TouchableOpacity
                    key={event.id}
                    onPress={() => handleEventPress(event.id)}
                    style={styles.eventCard}
                  >
                    {event.image && (
                      <Image
                        source={{ uri: event.image }}
                        style={styles.eventImage}
                        resizeMode="cover"
                      />
                    )}
                    <View style={styles.eventContent}>
                      <Text style={styles.eventTitle}>{event.name}</Text>
                      <Text style={styles.eventDetail}>
                        {event.date} • {event.time}
                      </Text>
                      <View style={styles.eventLocation}>
                        <Ionicons
                          name="location-outline"
                          size={16}
                          color="#4a5568"
                        />
                        <Text style={styles.locationText}>
                          {event.location.address}
                        </Text>
                      </View>
                      <Button
                        title="View Details"
                        onPress={() => handleEventPress(event.id)}
                        variant="outline"
                        size="sm"
                      />
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="calendar-outline" size={48} color="#a0aec0" />
                  <Text style={styles.emptyText}>
                    You haven't joined any events yet
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Available Events</Text>
              {availableEvents.length > 0 ? (
                availableEvents.map((event) => (
                  <TouchableOpacity
                    key={event.id}
                    onPress={() => handleEventPress(event.id)}
                    style={styles.eventCard}
                  >
                    {event.image && (
                      <Image
                        source={{ uri: event.image }}
                        style={styles.eventImage}
                        resizeMode="cover"
                      />
                    )}
                    <View style={styles.eventContent}>
                      <Text style={styles.eventTitle}>{event.name}</Text>
                      <Text style={styles.eventDetail}>
                        {event.date} • {event.time}
                      </Text>
                      <View style={styles.eventLocation}>
                        <Ionicons
                          name="location-outline"
                          size={16}
                          color="#4a5568"
                        />
                        <Text style={styles.locationText}>
                          {event.location.address}
                        </Text>
                      </View>
                      <Button
                        title="Apply to Join"
                        onPress={() => handleApplyToEvent(event.id)}
                        variant="primary"
                        size="sm"
                      />
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyText}>
                    No available events at the moment
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  flex: { flex: 1 },
  padding: { padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#0a153d" },
  welcomeCard: {
    backgroundColor: "#0a153d",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  welcomeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subText: { color: "white", opacity: 0.8, marginBottom: 8 },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a153d",
    marginBottom: 16,
  },
  eventCard: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 16,
  },
  eventImage: { width: "100%", height: 128 },
  eventContent: { padding: 12 },
  eventTitle: { fontSize: 16, fontWeight: "bold", color: "#0a153d" },
  eventDetail: { color: "#4A5568", marginBottom: 8 },
  eventLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationText: { marginLeft: 4, color: "#4A5568" },
  emptyState: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F7FAFC",
    borderRadius: 8,
  },
  emptyText: { marginTop: 12, color: "#A0AEC0" },
});

export default DashboardScreen;
