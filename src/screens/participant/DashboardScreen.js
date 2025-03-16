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
import { mockEvents, mockUsers } from "../../data/mockData";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const user = mockUsers.find((user) => user.role === "host");
  const hostEvents = mockEvents.filter(
    (event) => event.hostId === user && user.id
  );

  const handleCreateEvent = () => {
    console.log("Create event pressed");
  };

  const handleEventPress = (eventId) => {
    navigation.navigate("EventDetail", { eventId });
  };

  const handleSettingsPress = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Host Dashboard</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Ionicons name="settings-outline" size={24} color="#0a153d" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.flex}>
          <View style={styles.padding}>
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeText}>
                Welcome, {user && user.fullName}
              </Text>
              <Text style={styles.subText}>
                Manage your events and connect with vendors
              </Text>
              <Button
                title="Create New Event"
                onPress={handleCreateEvent}
                variant="secondary"
              />
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Your Events</Text>
                <TouchableOpacity>
                  <Text style={styles.primaryText}>See All</Text>
                </TouchableOpacity>
              </View>

              {hostEvents.length > 0 ? (
                hostEvents.map((event) => (
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

                      <View style={styles.eventFooter}>
                        <View style={styles.row}>
                          <Ionicons
                            name="people-outline"
                            size={16}
                            color="#4a5568"
                          />
                          <Text style={styles.detailText}>
                            {event.participantIds.length} Participants
                          </Text>
                        </View>
                        <View style={styles.row}>
                          <Ionicons
                            name="business-outline"
                            size={16}
                            color="#4a5568"
                          />
                          <Text style={styles.detailText}>
                            {event.vendorIds.length} Vendors
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="calendar-outline" size={48} color="#a0aec0" />
                  <Text style={styles.emptyText}>No events created yet</Text>
                  <Button
                    title="Create Your First Event"
                    onPress={handleCreateEvent}
                    variant="primary"
                    size="sm"
                    style={styles.mt4}
                  />
                </View>
              )}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <View style={styles.quickActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons
                    name="chatbubbles-outline"
                    size={24}
                    color="#0a153d"
                  />
                  <Text style={styles.actionText}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons
                    name="analytics-outline"
                    size={24}
                    color="#0a153d"
                  />
                  <Text style={styles.actionText}>Analytics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="people-outline" size={24} color="#0a153d" />
                  <Text style={styles.actionText}>Vendors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons
                    name="help-circle-outline"
                    size={24}
                    color="#0a153d"
                  />
                  <Text style={styles.actionText}>Support</Text>
                </TouchableOpacity>
              </View>
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
  subText: { color: "white", opacity: 0.8, marginBottom: 16 },
  section: { marginBottom: 24 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#0a153d" },
  primaryText: { color: "#0a153d" },
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
  eventFooter: { flexDirection: "row", justifyContent: "space-between" },
  row: { flexDirection: "row", alignItems: "center" },
  detailText: { marginLeft: 4, color: "#4A5568" },
  emptyState: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F7FAFC",
    borderRadius: 8,
  },
  emptyText: { marginTop: 12, color: "#A0AEC0" },
  mt4: { marginTop: 16 },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#EDF2F7",
    borderRadius: 8,
    padding: 16,
    width: "48%",
    marginBottom: 16,
  },
  actionText: { marginTop: 8, color: "#0a153d", fontWeight: "600" },
});

export default DashboardScreen;
