import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0); // Tổng tiền toàn bộ giỏ hàng

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    calculateTotalCartPrice();
  }, [cartItems]);

  const loadCart = async () => {
    try {
        const cartData = await AsyncStorage.getItem('cart');
        console.log("Dữ liệu giỏ hàng từ AsyncStorage:", cartData);
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            const validatedCart = parsedCart.map((item, index) => ({
                ...item,
                id: item.id ? item.id.toString() : `temp-${index}`,
                quantity: item.quantity ? parseInt(item.quantity, 10) : 1,
                price: item.price ? parseFloat(item.price) : 0,
                totalPrice: (item.quantity ? parseInt(item.quantity, 10) : 1) * (item.price ? parseFloat(item.price) : 0),
            }));
            setCartItems(validatedCart);
        }
    } catch (error) {
        console.error('Lỗi khi tải giỏ hàng:', error);
    }
};


  const calculateTotalCartPrice = () => {
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    setTotalCartPrice(total);
  };

  const removeFromCart = async (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = async (id, type) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        let newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        if (newQuantity < 1) newQuantity = 1;
        return { ...item, quantity: newQuantity, totalPrice: newQuantity * item.price };
      }
      return item;
    });

    setCartItems(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const confirmOrder = async () => {
    if (cartItems.length === 0) {
      Alert.alert("Thông báo", "Giỏ hàng của bạn đang trống!");
      return;
    }

    try {
      await AsyncStorage.setItem('order', JSON.stringify(cartItems));
      await AsyncStorage.removeItem('cart'); 
      setCartItems([]);
      setTotalCartPrice(0);
      Alert.alert("Thành công", "Đơn hàng của bạn đã được xác nhận!");
    } catch (error) {
      console.error("Lỗi khi lưu đơn hàng:", error);
      Alert.alert("Lỗi", "Không thể xác nhận đơn hàng. Vui lòng thử lại!");
    }
  };
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN") + " VND";
};


  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price.toLocaleString()} VND</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>Tổng: {item.totalPrice.toLocaleString()} VND</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Giỏ Hàng</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Giỏ hàng của bạn đang trống.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text style={styles.totalCartText}>Tổng giỏ hàng: {totalCartPrice.toLocaleString()} VND</Text>
        </>
      )}

      <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
        <Text style={styles.confirmButtonText}>Xác nhận đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  emptyCart: { textAlign: 'center', fontSize: 16, marginVertical: 20 },
  cartItem: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 10 },
  image: { width: 60, height: 60, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemPrice: { fontSize: 14, color: 'gray' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', color: '#e63946', marginTop: 5 },
  deleteButton: { backgroundColor: 'red', padding: 10, borderRadius: 5 },
  confirmButton: { backgroundColor: '#000', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  confirmButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  quantityControl: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  quantityButton: { padding: 8, backgroundColor: '#ddd', borderRadius: 5 },
  quantityText: { fontSize: 18, fontWeight: 'bold' },
  quantityNumber: { fontSize: 16, marginHorizontal: 10 },
  totalCartText: { fontSize: 18, fontWeight: 'bold', color: '#000', textAlign: 'center', marginVertical: 10 },
});

export default CartScreen;
