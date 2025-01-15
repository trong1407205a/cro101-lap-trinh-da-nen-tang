function countZeros(number) {
    let numStr = number.toString(); // Chuyển số thành chuỗi
    let zeroCount = 0; // Đếm số lượng số 0
    let i = 0;

    // Sử dụng vòng lặp while để duyệt qua từng ký tự trong chuỗi
    while (i < numStr.length) {
        if (numStr[i] === '0') {
            zeroCount++;
        }
        i++;
    }

    // In ra số lượng số 0
    console.log(`Số lượng số 0 trong số ${number} là: ${zeroCount}`);
}

// Gọi hàm với ví dụ 100077700
countZeros(100077700);
