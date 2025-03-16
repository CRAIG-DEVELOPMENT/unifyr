import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  { id: 'all', name: 'All', icon: 'apps' },
  { id: 'food', name: 'Food', icon: 'food' },
  { id: 'music', name: 'Music', icon: 'music' },
  { id: 'exhibitions', name: 'Exhibitions', icon: 'palette' },
  { id: 'culture', name: 'Culture', icon: 'theater' },
  { id: 'school', name: 'School', icon: 'school' },
  { id: 'art', name: 'Art', icon: 'brush' },
  { id: 'sports', name: 'Sports', icon: 'basketball' },
  { id: 'technology', name: 'Tech', icon: 'laptop' },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryTab,
              activeCategory === category.id && styles.activeTab
            ]}
            onPress={() => onCategoryChange(category.id)}
          >
            <MaterialCommunityIcons 
              name={category.icon} 
              size={24} 
              color={activeCategory === category.id ? '#0a153d' : '#777'} 
            />
            <Text 
              style={[
                styles.categoryText,
                activeCategory === category.id && styles.activeText
              ]}
            >
              {category.name}
            </Text>
            {activeCategory === category.id && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  categoryTab: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
    position: 'relative',
  },
  activeTab: {
    borderBottomColor: '#0a153d',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#777',
  },
  activeText: {
    color: '#0a153d',
    fontWeight: 'bold',
  },
  activeLine: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 3,
    backgroundColor: '#0a153d',
    borderRadius: 3,
  }
});

export default CategoryTabs;
