import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Đăng ký' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Chi tiết sản phẩm' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Giỏ hàng' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Hồ sơ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
