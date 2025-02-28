import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialCart = [
  { id: '1', name: 'Quần Jeans Slimfit', price: 550000, image: 'https://via.placeholder.com/100', quantity: 1 },
  { id: '2', name: 'Giày Sneaker Đẳng Cấp', price: 1200000, image: 'https://via.placeholder.com/100', quantity: 1 },
];

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, amount) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price.toLocaleString()} VND</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.btn}>
                  <Ionicons name="remove" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.btn}>
                  <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteBtn}>
              <Ionicons name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Thanh tổng tiền */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Tổng tiền: {totalPrice.toLocaleString()} VND</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    color: '#1e90ff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#1e90ff',
    padding: 5,
    borderRadius: 5,
  },
  deleteBtn: {
    marginLeft: 10,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutBtn: {
    backgroundColor: '#ff4500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
