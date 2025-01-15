// Hàm chuyển đổi mảng thành object
const parseArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
      array?.map(item => [keyId ? item?.[keyId] : item, item]) || []
    );
  
  // Danh sách sản phẩm (dữ liệu đầu vào)
  const productsArray = [
    { code: 'P001', name: 'Son môi', price: 200000 },
    { code: '', name: 'Phấn phủ', price: 300000 }, // Không hợp lệ
    { code: 'P002', name: null, price: 500000 },  // Không hợp lệ
    { code: 'P003', name: 'Phấn phủ', price: 300000 }
  ];
  
  // Lọc sản phẩm hợp lệ
  const validProducts = productsArray.filter(
    item => item?.code && item?.name
  );
  
  // Chuyển đổi mảng hợp lệ thành object
  const productsObject = parseArrayToObject({ array: validProducts, keyId: 'code' });
  
  // In kết quả
  console.log('Object sản phẩm hợp lệ:');
  console.log(productsObject);
  
  // Ví dụ tìm kiếm sản phẩm theo mã sản phẩm
  const searchCode = 'P001';
  const product = productsObject[searchCode];
  if (product) {
    console.log(`Tìm thấy sản phẩm:`, product);
  } else {
    console.log(`Không tìm thấy sản phẩm với mã: ${searchCode}`);
  }
  