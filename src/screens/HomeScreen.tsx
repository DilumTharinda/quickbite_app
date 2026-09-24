import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { menuItems } from '../data';
import { useCart } from '../context/CartContext';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const numColumns = Dimensions.get('window').width > 600 ? 3 : 2;

export default function HomeScreen({ navigation }: Props) {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartText}>Cart ({cartItemCount})</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('ItemDetail', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardInfo: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#ff6347',
    fontWeight: '600',
  },
});
