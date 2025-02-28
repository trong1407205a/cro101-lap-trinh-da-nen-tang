import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Nội dung sản phẩm */}
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString()} VND</Text>
        <Text style={styles.description}>{product.description}</Text>

        {/* Chọn số lượng */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.btn}>
            <Ionicons name="remove" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.btn}>
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Nút Thêm vào giỏ hàng */}
        <TouchableOpacity 
          style={styles.addToCartBtn} 
          onPress={() => navigation.navigate('Cart', { product, quantity })} 
        >
          <Text style={styles.addToCartText}>🛒 Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    elevation: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#e63946',
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  btn: {
    backgroundColor: '#1e90ff',
    padding: 8,
    borderRadius: 5,
  },
  addToCartBtn: {
    marginTop: 20,
    backgroundColor: '#ff4500',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
