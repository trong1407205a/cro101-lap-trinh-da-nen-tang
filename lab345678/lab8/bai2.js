import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserData } from './api';

const Bai2 = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserData();
                console.log("API Response:", response);
                setUser(response?.user || {});
            } catch (error) {
                console.error("API Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>{'<'} Bài 2</Text>
            </TouchableOpacity>
            <Text style={styles.title}>🛠 Chỉnh Sửa User</Text>
            {user ? (
                <Text style={styles.userText}>Tên: {user.name || 'Không có dữ liệu'}</Text>
            ) : (
                <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    backText: { fontSize: 18, color: 'blue' },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
    userText: { fontSize: 18, color: 'black' },
    loadingText: { fontSize: 16, color: 'gray' }
});

export default Bai2;
