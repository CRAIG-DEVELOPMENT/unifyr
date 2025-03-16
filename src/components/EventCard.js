import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.85;

const EventCard = ({ event }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = React.useState(event.isFavorite || false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would update the favorite status in your backend
  };

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
      style={styles.cardContainer}
    >
      <Card style={styles.card}>
        <Card.Cover 
          source={{ uri: event.imageUrl }} 
          style={styles.cardImage}
        />
        <View style={styles.favoriteButton}>
          <IconButton
            icon={isFavorite ? "heart" : "heart-outline"}
            iconColor={isFavorite ? "#FF4081" : "#FFF"}
            size={24}
            onPress={toggleFavorite}
            style={styles.heartIcon}
          />
        </View>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{event.title}</Title>
          <View style={styles.detailsRow}>
            <MaterialCommunityIcons name="calendar" size={16} color="#0a153d" />
            <Paragraph style={styles.date}>{event.date}</Paragraph>
          </View>
          <View style={styles.detailsRow}>
            <MaterialCommunityIcons name="clock-outline" size={16} color="#0a153d" />
            <Paragraph style={styles.time}>{event.time}</Paragraph>
          </View>
          <View style={styles.detailsRow}>
            <MaterialCommunityIcons name="map-marker" size={16} color="#0a153d" />
            <Paragraph style={styles.location} numberOfLines={1}>{event.location}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    borderRadius: 15,
    elevation: 4,
    backgroundColor: '#fff',
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a153d',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  date: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  time: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  location: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  heartIcon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    margin: 0,
  }
});

export default EventCard;
