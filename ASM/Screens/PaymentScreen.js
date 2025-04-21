import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { product, quantity, receiverName, phoneNumber, address } = route.params;
  
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Vui lòng chọn phương thức thanh toán!');
      return;
    }
    alert(`Thanh toán thành công bằng ${selectedPayment}!`);
    navigation.navigate('Home'); // Sau khi thanh toán, quay lại trang chủ
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Thanh toán</Text>

      {/* Thông tin đơn hàng */}
      <View style={styles.orderInfo}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} VND</Text>
          <Text style={styles.quantity}>Số lượng: {quantity}</Text>
        </View>
      </View>

      {/* Thông tin người nhận */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Thông tin giao hàng</Text>
        <Text>📌 {receiverName}</Text>
        <Text>📞 {phoneNumber}</Text>
        <Text>📍 {address}</Text>
      </View>

      {/* Phương thức thanh toán */}
      <Text style={styles.infoTitle}>Chọn phương thức thanh toán</Text>
      <View style={styles.paymentMethods}>
        {["MOMO", "ZaloPay", "Thẻ ngân hàng", "Tiền mặt"].map((method) => (
          <TouchableOpacity
            key={method}
            style={[
              styles.paymentButton,
              selectedPayment === method && styles.paymentButtonSelected
            ]}
            onPress={() => setSelectedPayment(method)}
          >
            <Text style={styles.paymentText}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nút Thanh toán */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>✅ Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  orderInfo: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 15 },
  productImage: { width: 80, height: 80, borderRadius: 10 },
  textContainer: { marginLeft: 15, justifyContent: 'center' },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 16, color: 'red', marginVertical: 5 },
  quantity: { fontSize: 14 },
  infoBox: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 15 },
  infoTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  paymentMethods: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  paymentButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, flex: 1, marginHorizontal: 5, alignItems: 'center' },
  paymentButtonSelected: { backgroundColor: '#007bff', color: '#fff' },
  paymentText: { fontSize: 14 },
  payButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  payButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default PaymentScreen;
