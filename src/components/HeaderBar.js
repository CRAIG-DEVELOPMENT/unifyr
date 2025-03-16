import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = ({ title, hasNotifications = false, notificationCount = 0 }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons name="menu" size={24} color="#0a153d" />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.notificationContainer}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#0a153d" />
          {hasNotifications && (
            <Badge style={styles.badge}>{notificationCount > 9 ? '9+' : notificationCount}</Badge>
          )}
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a153d',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ffe414',
    color: '#0a153d',
  }
});

export default HeaderBar;
