import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Bai1 from './screens/Bai1';
import Bai2 from './screens/Bai2';
import Bai3 from './screens/Bai3';
import ApiScreen from './screens/Api';

const Stack = createStackNavigator();

const App = () => {
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
        <Stack.Screen name="Api" component={ApiScreen} options={{ title: '🔗 API' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
