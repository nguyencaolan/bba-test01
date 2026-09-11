function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) { // đếm 1ù 1 tới 100
        for (let j = i ; j <= 100; j++) { // đếm từ 1 tới 100
            if ((i + j) % 17 === 0) { //nếu tổng chia hết cho 17 thì tăng thêm 1
                count++;

            }

        }

    }
    return count;
}
console.log(findPairsDivisibleBy17());