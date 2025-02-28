import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp!');
      return;
    }
    Alert.alert('Thành công', 'Đăng ký thành công!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo tài khoản mới</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry={!isPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 10,
    color: '#1e90ff',
  },
});
