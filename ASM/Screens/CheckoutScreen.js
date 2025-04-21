import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { product, quantity } = route.params;
  
  // State để lưu thông tin người nhận
  const [receiverName, setReceiverName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleConfirmOrder = () => {
    if (!receiverName || !phoneNumber || !address) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    Alert.alert('Thành công', 'Đơn hàng của bạn đã được xác nhận!');
   navigation.navigate('PaymentScreen', { product, quantity, receiverName, phoneNumber, address });

  };

  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productQuantity}>Số lượng: {quantity}</Text>
        </View>
      </View>

      {/* Nhập thông tin giao hàng */}
      <Text style={styles.label}>Tên người nhận:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên người nhận"
        value={receiverName}
        onChangeText={setReceiverName}
      />

      <Text style={styles.label}>Số điện thoại:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
      />

      <Text style={styles.label}>Địa chỉ giao hàng:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập địa chỉ giao hàng"
        value={address}
        onChangeText={setAddress}
      />

      {/* Nút Xác nhận đơn hàng */}
      <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
        <Text style={styles.buttonText}>✔ Xác nhận đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  productContainer: { flexDirection: 'row', marginBottom: 20 },
  productImage: { width: 80, height: 80, borderRadius: 10 },
  productInfo: { marginLeft: 15, justifyContent: 'center' },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { color: 'red', fontSize: 16, marginVertical: 5 },
  productQuantity: { fontSize: 14 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default CheckoutScreen;
