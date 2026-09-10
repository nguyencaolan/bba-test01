---
title: JavaScript -- String Utils & Array Utils
---

Tổng hợp nội dung đã học trong buổi học hôm nay.

## 1. String Utils

### trim()

string.trim()
// Bỏ khoảng trắng đầu + cuối

### trimStart() / trimEnd()

string.trimStart() // bỏ khoảng trắng đầu
string.trimEnd() // bỏ khoảng trắng cuối

### toUpperCase() / toLowerCase()

string.toUpperCase() // chữ hoa
string.toLowerCase() // chữ thường

### includes()

string.includes(searchString)
// Trả về true / false

### split()

string.split(separator)

// Tách theo nhiều ký tự:
text.split(/\[@.\]/) // tách và bỏ @, .
text.split(/(\[@.\])/) // tách và giữ @, .

### replace() / replaceAll()

string.replace(oldValue, newValue) // thay lần đầu
string.replaceAll(oldValue, newValue) // thay tất cả

## 2. Array Utils

### push() -- Thêm cuối

array.push(value)

let arr = \[1, 2, 3\];

arr.push(4);

Kết quả: \[1, 2, 3, 4\]

### unshift() -- Thêm đầu

array.unshift(value)

let arr = \[1, 2, 3\];

arr.unshift(0);

Kết quả:  \[0, 1, 2, 3\]

### pop() -- Xóa cuối

array.pop()

let arr = \[1, 2, 3\];

arr.pop();

Kết quả:  \[1, 2\]

### shift() -- Xóa đầu

array.shift()

let arr = \[1, 2, 3\];

arr.shift();

Kết quả:  \[2, 3\]

### splice() -- Thêm/xóa tại vị trí

array.splice(start, deleteCount, item)

start → bắt đầu từ index nào
deleteCount → xóa bao nhiêu phần tử
item → phần tử muốn thêm

==Xóa==

let arr = \[1, 2, 3, 4\];\
arr.splice(1, 2);\
Kết quả: \[1, 4\]\
\
// Thêm\
let arr2 = \[1, 2, 3\];\
arr2.splice(1, 0, 99);\
Kết quả: \[1, 99, 2, 3\]\
\
Quan trọng: splice() xóa trước rồi mới thêm.

### find() -- Tìm 1

array.find(item =\> condition)\
\
let numbers = \[10, 20, 30, 40\];\
let result = numbers.find(number =\> number \> 20);\
Kết quả: 30\
\
find() → phần tử đầu tiên phù hợp.

### filter() -- Lọc nhiều

array.filter(item =\> condition)\
\
let numbers = \[10, 20, 30, 40\];\
let result = numbers.filter(number =\> number \> 20);\
Kết quả: \[30, 40\]\
\
filter() → Array mới chứa tất cả phần tử phù hợp.

### map() -- Biến đổi

array.map(item =\> newValue)\
\
let numbers = \[1, 2, 3, 4\];\
let result = numbers.map(number =\> number \* 2);\
Kết quả: \[2, 4, 6, 8\]

### sort() -- Sắp xếp

// Tăng dần\
array.sort((a, b) =\> a - b);\
\
// Giảm dần\
array.sort((a, b) =\> b - a);\
\
let numbers = \[40, 100, 1, 5, 25, 10\];\
numbers.sort((a, b) =\> a - b);\
console.log(numbers);\
Kết quả: \[1, 5, 10, 25, 40, 100\]\
\
Giải thích:\
(a, b) =\> a - b\
→ kết quả âm: a đứng trước b\
→ kết quả dương: b đứng trước a\
→ kết quả 0: giữ nguyên thứ tự tương đối\
\
Câu nhớ:\
a - b → tăng dần\
b - a → giảm dần\
\
Lưu ý: sort() thay đổi trực tiếp mảng gốc.

### 3. forEach(), for\...in, for\...of

### forEach()

array.forEach(function(item) { \... })\
\
const scores = \[80, 90, 70, 100\];\
scores.forEach(function(number) {\
console.log(number);\
});\
\
→ Duyệt từng phần tử của Array.

### for\...in

for (const key in object) { \... }\
\
→ Lấy key/index.\
Câu nhớ: for\...in → key.

### for\...of

for (const value of array) { \... }\
\
→ Lấy value.\
Câu nhớ: for\...of → value.

## 4. Utility Function

Utility function = function nhỏ, làm một nhiệm vụ cụ thể và có thể tái
sử dụng.\
\
function isEven(number) {\
return number % 2 === 0;\
}\
\
Các function dùng chung thường được gom vào utils.js.

## 5. Cheat Sheet

STRING:\
trim → bỏ khoảng trắng đầu/cuối\
toUpperCase → chữ hoa\
toLowerCase → chữ thường\
includes → kiểm tra chuỗi con\
split → tách chuỗi thành Array\
replace → thay lần đầu\
replaceAll → thay tất cả\
\
ARRAY:\
push → thêm cuối\
unshift → thêm đầu\
pop → xóa cuối\
shift → xóa đầu\
splice → thêm/xóa tại vị trí\
find → tìm 1\
filter → lọc nhiều\
map → biến đổi\
sort → sắp xếp
