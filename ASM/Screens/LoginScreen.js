import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.replace('Home'); // Điều hướng sang HomeScreen
    } else {
      alert('Vui lòng nhập tài khoản và mật khẩu!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Ảnh đầu trang */}
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/0b/5f/0b/0b5f0b3ba10ff72a4520feefa7b009f1.jpg' }} 
        style={styles.image} 
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Chào mừng bạn!</Text>

      {/* Ô nhập thông tin */}
      <TextInput 
        style={styles.input} 
        placeholder="Tên đăng nhập" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Mật khẩu" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      {/* Nút đăng nhập */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Đăng ký bằng Google */}
      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <Text style={styles.socialText}>Đăng ký bằng Google</Text>
      </TouchableOpacity>

      {/* Đăng ký bằng Facebook */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Text style={styles.socialText}>Đăng ký bằng Facebook</Text>
      </TouchableOpacity>

      {/* Đăng ký tài khoản mới */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          Chưa có tài khoản? <Text style={styles.registerLink}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#db4437', // Màu của Google
  },
  facebookButton: {
    backgroundColor: '#3b5998', // Màu của Facebook
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
