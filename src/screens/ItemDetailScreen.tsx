import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useCart } from '../context/CartContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ItemDetail'>;

export default function ItemDetailScreen({ route, navigation }: Props) {
  const { item } = route.params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart(item, quantity);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.description}>{item.description}</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.qtyBtn} 
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.qtyBtn} 
            onPress={() => setQuantity(quantity + 1)}
            testID="increase-quantity"
          >
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal: ${(item.price * quantity).toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250 },
  content: { padding: 20, flex: 1 },
  name: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 22, color: '#ff6347', fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 16, color: '#666', lineHeight: 24, marginBottom: 30 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
  qtyBtn: { backgroundColor: '#f0f0f0', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  qtyBtnText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  qty: { fontSize: 22, fontWeight: 'bold', marginHorizontal: 20 },
  subtotalContainer: { alignItems: 'center', marginBottom: 20 },
  subtotalText: { fontSize: 18, fontWeight: '600' },
  addButton: { backgroundColor: '#ff6347', padding: 18, borderRadius: 12, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
