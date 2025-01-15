// Mock các Promise được cung cấp
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 1 hoàn thành"), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 thất bại"), 1500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 3 hoàn thành"), 2000));

// Yêu cầu 1: Sử dụng Promise.all
function handleWithPromiseAll() {
    console.log("=== YÊU CẦU 1: SỬ DỤNG Promise.all ===");
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log("Tất cả các Promise hoàn thành:", results);
        })
        .catch(error => {
            console.error("Có một Promise thất bại:", error);
        });
}

// Yêu cầu 2: Sử dụng Promise.allSettled
function handleWithPromiseAllSettled() {
    console.log("\n=== YÊU CẦU 2: SỬ DỤNG Promise.allSettled ===");
    Promise.allSettled([promise1, promise2, promise3])
        .then(results => {
            results.forEach((result, index) => {
                if (result.status === "fulfilled") {
                    console.log(`Promise ${index + 1} thành công:`, result.value);
                } else if (result.status === "rejected") {
                    console.error(`Promise ${index + 1} thất bại:`, result.reason);
                }
            });
        })
        .finally(() => {
            console.log("Tất cả các Promise đã được xử lý.");
        });
}

// Gọi cả hai yêu cầu
handleWithPromiseAll();
handleWithPromiseAllSettled();
