import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderTracking'>;

export default function OrderTrackingScreen({ route, navigation }: Props) {
  const { orderId } = route.params;
  const [status, setStatus] = useState<'Placed' | 'Preparing' | 'Ready'>('Placed');

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus('Preparing'), 3000);
    const timer2 = setTimeout(() => setStatus('Ready'), 6000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order #{orderId}</Text>
      
      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>Current Status</Text>
        <Text style={[
          styles.statusText,
          status === 'Ready' ? styles.statusReady : null
        ]}>
          {status}
        </Text>
        
        {status !== 'Ready' && (
          <ActivityIndicator size="large" color="#ff6347" style={{ marginTop: 20 }} />
        )}
      </View>

      <TouchableOpacity 
        style={styles.homeBtn} 
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.homeText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  statusCard: { 
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 12, 
    alignItems: 'center',
    width: '100%',
    elevation: 2 
  },
  statusLabel: { fontSize: 16, color: '#666', marginBottom: 10 },
  statusText: { fontSize: 28, fontWeight: 'bold', color: '#ff6347' },
  statusReady: { color: '#32cd32' },
  homeBtn: { marginTop: 40, padding: 15, backgroundColor: '#eee', borderRadius: 8 },
  homeText: { fontSize: 16, fontWeight: '600' }
});
