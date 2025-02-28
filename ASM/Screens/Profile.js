import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      {/* Ảnh đại diện */}
      <Image 
  source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
  style={styles.avatar} 
/>


      {/* Thông tin người dùng */}
      <Text style={styles.username}>Nguyễn Trọng</Text>
      <Text style={styles.email}>email@example.com</Text>

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Ionicons name="call-outline" size={20} color="gray" />
          <Text style={styles.infoText}>+84 123 456 789</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={20} color="gray" />
          <Text style={styles.infoText}>Đà Nẵng, Việt Nam</Text>
        </View>
      </View>

      {/* Nút chỉnh sửa */}
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="create-outline" size={20} color="white" />
        <Text style={styles.editText}>Chỉnh sửa hồ sơ</Text>
      </TouchableOpacity>

      {/* Nút đăng xuất */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="white" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  editText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProfileScreen;
