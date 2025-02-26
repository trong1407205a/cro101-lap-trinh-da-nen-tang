import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Bai1 from './bai1';
import Bai2 from './bai2';
import Bai3 from './bai3';
import Api from './api';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
          headerStyle: { backgroundColor: '#6200EE' }, 
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20 }
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: '🏠 Trang Chủ' }} />
        <Stack.Screen name="Bai1" component={Bai1} options={{ title: '📘 Bài 1' }} />
        <Stack.Screen name="Bai2" component={Bai2} options={{ title: '📙 Bài 2' }} />
        <Stack.Screen name="Bai3" component={Bai3} options={{ title: '📗 Bài 3' }} />
        <Stack.Screen name="Api" component={Api} options={{ title: '🔗 API' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
