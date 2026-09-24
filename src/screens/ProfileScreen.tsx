import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>G</Text>
        </View>
        <Text style={styles.name}>Guest User</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        <Text style={styles.emptyText}>No recent orders</Text>
      </View>

      <TouchableOpacity 
        style={styles.logoutBtn} 
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { 
    alignItems: 'center', 
    padding: 40, 
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  avatarText: { fontSize: 36, color: '#fff', fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold' },
  section: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  emptyText: { color: '#666', fontStyle: 'italic' },
  logoutBtn: { 
    margin: 20, 
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff6347'
  },
  logoutText: { color: '#ff6347', fontSize: 16, fontWeight: 'bold' }
});
