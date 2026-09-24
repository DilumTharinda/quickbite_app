import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useCart } from '../context/CartContext';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Checkout'>;
};

export default function CheckoutScreen({ navigation }: Props) {
  const { subtotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    // Simulate order placement
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    clearCart();
    navigation.replace('OrderTracking', { orderId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Summary</Text>
      
      <View style={styles.summaryCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tax (10%)</Text>
          <Text style={styles.value}>${(subtotal * 0.1).toFixed(2)}</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${(subtotal * 1.1).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.placeOrderBtn} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  summaryCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  label: { fontSize: 16, color: '#666' },
  value: { fontSize: 16, fontWeight: '500' },
  totalRow: { borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 15, marginTop: 5 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: '#ff6347' },
  placeOrderBtn: { backgroundColor: '#32cd32', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 30 },
  placeOrderText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
