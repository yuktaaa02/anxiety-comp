import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wind, User } from 'lucide-react-native';

import HomeScreen from './src/screens/HomeScreen';
import BreathingScreen from './src/screens/BreathingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#6C63FF',
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Main" 
          component={HomeScreen} 
          options={{ tabBarIcon: ({ color }) => <Home color={color} size={24} /> }}
        />
        <Tab.Screen 
          name="Relax" 
          component={BreathingScreen} 
          options={{ tabBarIcon: ({ color }) => <Wind color={color} size={24} /> }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ tabBarIcon: ({ color }) => <User color={color} size={24} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}