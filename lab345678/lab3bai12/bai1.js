import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const bai1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Em vào đời bằng <Text style={styles.highlightGold}>vàng đỏ</Text> anh vào đời bằng{' '}
        <Text style={styles.highlightBlue}>nước trà</Text>
      </Text>
      <Text style={styles.text2}>
        Bằng cơn mưa thơm <Text style={styles.highlightItalic}>mùi đất</Text> và bằng hoa đại mọc trước nhà
      </Text>
      <Text style={styles.text3}>
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
      <Text style={styles.text4}>
        Lý trí em là <Text style={styles.fillInBlank}>c _ ô _ n _ _ _ _ _ _</Text> còn trái tim anh là{' '}
        <Text style={styles.fillInBlank}>đ _ _ _ _ _ _ _</Text>
      </Text>
      <Text style={styles.text3}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>
      <Text style={styles.text5}>
        Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
      </Text>
      <Text style={styles.text6}>
        Em vào đời bằng mây trắng em vào đời bằng <Text style={styles.highlightGreen}>nắng xanh</Text>
      </Text>
      <Text style={styles.text7}>
        Em vào đời bằng đại lộ và con đường đỏ giờ <Text style={styles.highlightGold}>vàng anh</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B', // Xanh dương đậm giống hình
    padding: 16,
    justifyContent: 'center', // Canh giữa nội dung theo chiều dọc
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
  highlightGold: {
    color: '#FFD700', // Màu vàng
    fontWeight: 'bold',
  },
  highlightBlue: {
    color: '#1E90FF', // Màu xanh nước biển nhạt
    fontWeight: 'bold',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  highlightItalic: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
  text4: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
  fillInBlank: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted', // Dấu gạch dưới dạng chấm
  },
  text5: {
    color: '#FF4500', // Màu đỏ cam
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text6: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
  highlightGreen: {
    color: '#32CD32', // Màu xanh lá
    fontWeight: 'bold',
  },
  text7: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default bai1;
