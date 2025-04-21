import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const bannerImages = [
  'https://media.istockphoto.com/id/1212645815/vi/vec-to/mua-s%E1%BA%AFm-tr%E1%BB%B1c-tuy%E1%BA%BFn-tr%C3%AAn-%E1%BB%A9ng-d%E1%BB%A5ng-di-%C4%91%E1%BB%99ng-trong-kh%C3%A1i-ni%E1%BB%87m-n%E1%BB%81n-xanh.jpg?s=2048x2048&w=is&k=20&c=ZV-y9DYlQqcAgMkI2CCF57OY51AM1o1tUyDRDmx_jcs=',
  'https://media.istockphoto.com/id/1325556058/vi/vec-to/kh%C3%A1i-ni%E1%BB%87m-giao-h%C3%A0ng-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-giao-h%C3%A0ng-tr%E1%BB%B1c-tuy%E1%BA%BFn-v%E1%BB%9Bi-%C4%91%C6%A1n-%C4%91%E1%BA%B7t-h%C3%A0ng-t%E1%BA%A1p-h%C3%B3a-t%E1%BB%AB-%C4%91i%E1%BB%87n.jpg?s=2048x2048&w=is&k=20&c=0WrteeV8VpgJHcVEo7gnlwd9kK67RxcsMOTtMTfz-kw=',
  'https://media.istockphoto.com/id/1158053021/vi/vec-to/ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=2048x2048&w=is&k=20&c=y7AdExINUQ9QMsp8Spw17are82_9QbU9cOYwxpbq9A4=',
  'https://media.istockphoto.com/id/1387529745/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-ch%E1%BB%A5p-%E1%BA%A3nh-qu%E1%BA%A7n-%C3%A1o-b%C3%ACnh-th%C6%B0%E1%BB%9Dng-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-b%E1%BA%B1ng-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh.jpg?s=2048x2048&w=is&k=20&c=KxlZ-R8seLIOpWQxp54Qa59sRD7KRPKMJBFtlZdjjig='
  
];

const categories = [
  { name: 'Tất cả', icon: 'grid' },
  { name: 'Quần', icon: 'shirt' },
  { name: 'Áo', icon: 'shirt-outline' },
  { name: 'Giày', icon: 'footsteps' },
  { name: 'Phụ kiện', icon: 'bag-handle' }
];

const products = [
  { id: '1', name: 'Quần Jeans Slimfit', price: '550,000 VND', image: 'https://cf.shopee.vn/file/e72e2b4049f80e09b9b9d8c94fd69bbb', category: 'Quần' },
  { id: '1', name: 'Quần Jeans Slimfit1', price: '550,000 VND', image: 'https://cf.shopee.vn/file/8add182357ddd2a36b398d99bd568c50', category: 'Quần' },
  { id: '1', name: 'Quần Jeans Slimfit', price: '550,000 VND', image: 'https://cf.shopee.vn/file/sg-11134201-22100-mbbhveabu9iv8d', category: 'Quần' },
  { id: '1', name: 'Quần Jeans Slimfit', price: '550,000 VND', image: 'https://4men.com.vn/thumbs/2020/05/quan-jean-rach-goi-qj004-mau-den-17680-p.png', category: 'Quần' },
  { id: '2', name: 'Giày Sneaker Đẳng Cấp', price: '1,200,000 VND', image: 'https://giaycaosmartmen.com/wp-content/uploads/2020/12/cach-chup-giay-dep-5.jpg', category: 'Giày' },
  { id: '2', name: 'Giày Sneaker Đẳng Cấp', price: '1,200,000 VND', image: 'https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-5.jpg', category: 'Giày' },
  { id: '2', name: 'Giày Sneaker Đẳng Cấp', price: '1,200,000 VND', image: 'https://cf.shopee.vn/file/4107aa56175db071bb34a6c64dcd1074', category: 'Giày' },
  { id: '2', name: 'Giày Sneaker Đẳng Cấp', price: '1,200,000 VND', image: 'https://giaycaosmartmen.com/wp-content/uploads/2020/12/cach-chup-giay-dep-5.jpg', category: 'Giày' },
  { id: '3', name: 'Áo Hoodie Unisex', price: '450,000 VND', image: 'https://thuthuatnhanh.com/wp-content/uploads/2022/08/ao-thun-in-hinh-theo-yeu-cau.jpg', category: 'Áo' },
  { id: '3', name: 'Áo Hoodie Unisex', price: '450,000 VND', image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png', category: 'Áo' },
  { id: '3', name: 'Áo Hoodie Unisex', price: '450,000 VND', image: 'https://dosi-in.com/images/detailed/42/CDL10_1.jpg', category: 'Áo' }, 
  { id: '3', name: 'Áo Hoodie Unisex', price: '450,000 VND', image: 'https://mayvinhthanh.vn/wp-content/uploads/2021/03/ao-phong-trang-co-co-3.jpg', category: 'Áo' },  
];

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % bannerImages.length;
      scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredProducts = products.filter(
    (item) => (selectedCategory === 'Tất cả' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Thanh trượt hình ảnh */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.bannerContainer}
      >
        {bannerImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.bannerImage} />
        ))}
      </ScrollView>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          placeholder="Tìm kiếm sản phẩm..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Thanh danh mục */}
      <View style={styles.categoryWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryItem, selectedCategory === cat.name && styles.categoryActive]}
              onPress={() => setSelectedCategory(cat.name)}
            >
              <Ionicons name={cat.icon} size={16} color={selectedCategory === cat.name ? '#fff' : '#666'} />
              <Text style={[styles.categoryText, selectedCategory === cat.name && styles.categoryTextActive]}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
  data={filteredProducts}
  keyExtractor={(item, index) => item.id + '-' + index} // Thêm index để đảm bảo key là duy nhất
  numColumns={2}
  contentContainerStyle={styles.productList}
  style={{ flexGrow: 1 }}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  )}
/>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#333" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" size={24} color="#333" />
          <Text>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} color="#333" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  bannerContainer: {
    marginTop: 10,
    height: 200,
  },
  bannerImage: {
    width: width - 20,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryItem: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  categoryActive: {
    backgroundColor: '#1e90ff',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 13,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'fixed',  // Cố định ở một vị trí
    bottom: 0,          // Đặt ở dưới cùng màn hình
    left: 0,            // Kéo dài từ mép trái
    width: '100%',      // Full chiều rộng
    height: 60,         // Chiều cao của thanh điều hướng
    backgroundColor: '#fff', 
    display: 'flex', 
    flexDirection: 'row',  // Hiển thị ngang
    alignItems: 'center',  // Căn giữa theo chiều dọc
    justifyContent: 'space-around', // Giãn cách đều các mục
    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', // Đổ bóng nhẹ phía trên
  }
  
  
});
