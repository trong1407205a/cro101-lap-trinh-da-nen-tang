import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserList } from './api';

const Bai3 = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserList();
                console.log("API Response:", response);
                setUsers(response || []);
            } catch (error) {
                console.error("API Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>{'<'} Quay lại</Text>
            </TouchableOpacity>
            <Text style={styles.title}>📋 Danh sách người dùng</Text>
            {loading ? (
                <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userItem}>
                            <Text style={styles.userText}>{item.name}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    backText: { fontSize: 18, color: 'blue' },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
    loadingText: { fontSize: 16, color: 'gray' },
    userItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    userText: { fontSize: 18, color: 'black' }
});

export default Bai3;
