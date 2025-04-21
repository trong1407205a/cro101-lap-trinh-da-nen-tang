import React, { useState } from 'react';
import { 
  View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      let cartItems = cartData ? JSON.parse(cartData) : [];
  
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push({
          ...product,
          quantity,
        });
      }

      cartItems = cartItems.map(item => ({
        ...item,
        totalPrice: item.quantity * item.price,
      }));

      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      Alert.alert("Lỗi", "Không thể thêm vào giỏ hàng. Vui lòng thử lại!");
    }
  };

  const buyNow = async () => {
    try {
      await addToCart();
      navigation.navigate('CheckoutScreen', { 
        product, 
        quantity 
      }); // Đảm bảo tên phải chính xác
    } catch (error) {
      console.error("Lỗi khi mua ngay:", error);
      Alert.alert("Lỗi", "Không thể xử lý đơn hàng. Vui lòng thử lại!");
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString()} VND</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            onPress={() => setQuantity(prev => Math.max(1, prev - 1))} 
            style={styles.btn}
          >
            <Ionicons name="remove" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity 
            onPress={() => setQuantity(prev => prev + 1)} 
            style={styles.btn}
          >
            <Ionicons name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Nút Thêm vào giỏ hàng */}
        <TouchableOpacity style={styles.addToCartBtn} onPress={addToCart}>
          <Text style={styles.addToCartText}>🛒 Thêm vào giỏ hàng</Text>
        </TouchableOpacity>

        {/* Nút Mua ngay */}
        <TouchableOpacity style={styles.buyNowBtn} onPress={buyNow}>
          <Text style={styles.buyNowText}>⚡ Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  image: { width: '100%', height: 320, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  content: { padding: 20, backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: -2 }, elevation: 3 },
  name: { fontSize: 22, fontWeight: 'bold' },
  price: { fontSize: 20, color: '#e63946', fontWeight: 'bold', marginTop: 5 },
  description: { fontSize: 14, color: '#333', marginTop: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  quantity: { fontSize: 16, marginHorizontal: 15 },
  btn: { backgroundColor: '#1e90ff', padding: 10, borderRadius: 5 },
  addToCartBtn: { marginTop: 20, backgroundColor: '#ff4500', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  addToCartText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  
  /* Style cho nút Mua ngay */
  buyNowBtn: { marginTop: 10, backgroundColor: '#d32f2f', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  buyNowText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
