import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';
import { CartProvider } from './src/context/CartContext';
import { TouchableOpacity, Text } from 'react-native';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import OrderTrackingScreen from './src/screens/OrderTrackingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              title: 'QuickBite',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Text style={{ marginRight: 15, color: '#ff6347', fontWeight: 'bold' }}>Profile</Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen 
            name="ItemDetail" 
            component={ItemDetailScreen} 
            options={{ title: 'Details' }} 
          />
          <Stack.Screen 
            name="Cart" 
            component={CartScreen} 
            options={{ title: 'Your Cart' }} 
          />
          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen} 
            options={{ title: 'Checkout' }} 
          />
          <Stack.Screen 
            name="OrderTracking" 
            component={OrderTrackingScreen} 
            options={{ title: 'Track Order', headerBackVisible: false }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'My Profile' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
