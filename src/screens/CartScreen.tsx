import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useCart } from '../context/CartContext';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>;
};

export default function CartScreen({ navigation }: Props) {
  const { cart, removeFromCart, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <TouchableOpacity style={styles.browseBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.browseText}>Browse Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)} x {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.subtotal}>Total: ${subtotal.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.checkoutBtn} 
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#666', marginBottom: 20 },
  browseBtn: { backgroundColor: '#ff6347', padding: 15, borderRadius: 8 },
  browseText: { color: '#fff', fontWeight: 'bold' },
  itemRow: { flexDirection: 'row', padding: 15, backgroundColor: '#fff', marginHorizontal: 10, marginTop: 10, borderRadius: 8, alignItems: 'center' },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 15 },
  itemDetails: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#ff6347', marginTop: 5 },
  removeText: { color: 'red' },
  footer: { padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ddd' },
  subtotal: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  checkoutBtn: { backgroundColor: '#ff6347', padding: 15, borderRadius: 8, alignItems: 'center' },
  checkoutText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
