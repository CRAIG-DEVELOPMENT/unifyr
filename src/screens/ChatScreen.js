import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { mockChatMessages, mockUsers } from "../data/mockData";

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { eventId } = route.params;

  const [message, setMessage] = useState("");

  const eventMessages = [
    ...mockChatMessages.filter((msg) => msg.eventId === eventId),
  ].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("Sending message:", message);
    setMessage("");
  };

  const renderMessage = ({ item }) => {
    const user = mockUsers.find((u) => u.id === item.userId);
    const isCurrentUser = item.userId === "1";

    return (
      <View
        style={[
          styles.messageContainer,
          isCurrentUser ? styles.alignEnd : styles.alignStart,
        ]}
      >
        {!isCurrentUser && (
          <Text style={styles.userName}>{user?.fullName}</Text>
        )}
        <View
          style={[
            styles.messageBubble,
            isCurrentUser ? styles.messageCurrentUser : styles.messageOtherUser,
          ]}
        >
          <Text
            style={
              isCurrentUser
                ? styles.messageTextCurrentUser
                : styles.messageTextOtherUser
            }
          >
            {item.text}
          </Text>
        </View>
        <Text
          style={[
            styles.timestamp,
            isCurrentUser ? styles.textRight : styles.textLeft,
          ]}
        >
          {new Date(item.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0a153d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Chat</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <FlatList
          data={eventMessages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
        />

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={24} color="#0a153d" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity
            onPress={handleSend}
            disabled={message.trim() === ""}
            style={[
              styles.sendButton,
              message.trim() === ""
                ? styles.disabledButton
                : styles.enabledButton,
            ]}
          >
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  backButton: { marginRight: 8 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#0a153d" },
  keyboardContainer: { flex: 1 },
  messageList: { padding: 16 },
  messageContainer: { marginBottom: 16, maxWidth: "80%" },
  alignEnd: { alignSelf: "flex-end" },
  alignStart: { alignSelf: "flex-start" },
  userName: { color: "#4A5568", fontSize: 12, marginBottom: 4 },
  messageBubble: { padding: 12, borderRadius: 8 },
  messageCurrentUser: { backgroundColor: "#0a153d" },
  messageOtherUser: { backgroundColor: "#E2E8F0" },
  messageTextCurrentUser: { color: "#FFFFFF" },
  messageTextOtherUser: { color: "#4A5568" },
  timestamp: { color: "#A0AEC0", fontSize: 10, marginTop: 4 },
  textRight: { textAlign: "right" },
  textLeft: { textAlign: "left" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    padding: 8,
  },
  iconButton: { marginHorizontal: 8 },
  textInput: {
    flex: 1,
    backgroundColor: "#EDF2F7",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: { padding: 12, borderRadius: 20 },
  disabledButton: { backgroundColor: "#CBD5E0" },
  enabledButton: { backgroundColor: "#0a153d" },
});

export default ChatScreen;
