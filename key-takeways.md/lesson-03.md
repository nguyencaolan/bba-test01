# Buổi 3
## Git 
   ### Undo Action: 
   là cách hoàn tác/thay đổi lại những thao tác Git đã thực hiện.
1.  Ví dụ:

        git restore --staged file4

        → File được đưa ra khỏi Staging Area, nhưng nội dung file vẫn còn trong Working Directory.

2.  Reset commit gần nhất: git reset HEAD~1
     ### Nhớ Nhanh: 
        git restore --staged <file> → bỏ file khỏi Staging
        git reset HEAD~1  → quay lại 1 commit trước

### Branching Model
Branching = tạo và sử dụng các nhánh Git để phát triển code một cách độc lập.

#### Các lệnh chính
    - Xem branch: git branch
    - Tạo branch: git branch <tên-branch>
    - Chuyển branch: git checkout <tên-branch>
    - Muốn tạo và chuyển sang luôn: git switch -c <tên-branch>
    - Xóa branch: git branch -D <tên-branch>
  ### Nhớ Nhanh: 
  | Lệnh         | Công thức              | Ý nghĩa        |
| ------------ | ---------------------- | -------------- |
| Xem          | `git branch`           | Xem branch     |
| Tạo          | `git branch <name>`    | Tạo branch     |
| Chuyển       | `git switch <name>`    | Chuyển branch  |
| Tạo + chuyển | `git switch -c <name>` | Tạo rồi chuyển |
## Gitignore
.gitignore = file chứa danh sách các file/thư mục mà Git không theo dõi.

1. .gitignore : <tên-file> → Bỏ qua một file
2. .gitignore : <tên-folder>/ → Bỏ qua một folder
3. .gitignore : <pattern>* → Bỏ qua các file/folder khớp với pattern

### Nhớ Nhanh: .gitignore = viết "CÁI GÌ KHÔNG MUỐN GIT THEO DÕI".
=========================================================================

## Javascript
#### Convention:
1. Snake_Case - Tạm thời không dùng: nguyen_cao_lan
2. kebab_case ***dùng đặt tên file và folder***: nguyen-cao-lan
3. camelCase ***dùng đặt tên biến, hàm***: nguyenCaoLan
4. PascalCase ***dùng đặt tên class***: NguyenCaoLan
5. UPPER_CASE: NGUYEN_CAO_LAN
   
================================================
#### Console log

let myName = "Rubby";
let queQuan = "Hồ Chí Minh"
console.log (`Tôi là ${myName}, Tôi đến từ ${queQuan}`);
console.log ('Tôi là ' + myName + ', Tôi đến từ '+ queQuan);

====================================================

#### Object

----
Cú pháp:

const/let <variable name> = {

    key1: value 1

    key2: value2 
}

Note: Value có thể là String, number, Boolean or một object khác

=======================
#### array
---
1. Cú pháp: 

const arrayName = [value1, value2, value3];

Ví du: 

const numbers = [10, 20, 30, 40, 50];
   
2. Mãng bắt đầu index = 0
3. length

    const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);
Nhớ: 

- Số lượng phần tử = array.length
- Index cuối = array.length - 1
  
===================

#### function
---
Function (hàm) là một khối code được tạo ra để thực hiện một công việc cụ thể.

Thay vì viết cùng một đoạn code nhiều lần, ta tạo Function rồi gọi (call) nó khi cần.

Syntax: 

***function functionName() {
  // code
}***

Công thức:

function      → từ khóa tạo Function
functionName  → tên Function
()            → nơi chứa parameter
{}            → phần code của Function

1. Function không có Parameter

function sayHello() {
  console.log("Hello");
}

sayHello();
2. Function có Parameter

Parameter là biến được khai báo bên trong () của Function.

console.log(`Text ${giá_trị} Text ${giá_trị}`);

Ví dụ: 

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Rubby");

3. return

eturn dùng để trả kết quả từ Function ra bên ngoài.

Ví dụ: 

function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);

4. Function + Variable

Ví dụ: 

function calculateTotal(price, quantity) {
    
  const total = price * quantity;

  return total;
}

const result = calculateTotal(100, 3);

console.log(result);

5. Function + If
   
function checkNumber(number) {
  if (number > 0) {
    return "Số dương";

  } else if (number < 0) {

    return "Số âm";

  } else {

    return "Số 0";

  }
}

console.log(checkNumber(10));

6. Function + Array


function printFruits(fruits) {

  for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);
  }
}

const fruits = ["Apple", "Banana", "Orange"];

printFruits(fruits);


