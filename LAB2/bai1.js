function countEvenOdd(a, b) {
    // Đảm bảo a luôn nhỏ hơn hoặc bằng b
    if (a > b) {
        [a, b] = [b, a];
    }

    // Đếm số chẵn và số lẻ
    let evenCount = 0;
    let oddCount = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // In kết quả
    console.log(`Số lượng số chẵn trong khoảng ${a} và ${b}: ${evenCount}`);
    console.log(`Số lượng số lẻ trong khoảng ${a} và ${b}: ${oddCount}`);

    // In số từ 2 đến 10
    console.log("Các số từ 2 đến 10 là:", Array.from({ length: 9 }, (_, i) => i + 2));
}

// Gọi hàm
countEvenOdd(3, 15);