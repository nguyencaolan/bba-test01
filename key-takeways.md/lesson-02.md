# Buổi 2
### Git 
  1. Có 3 vùng __Working Directory, Staging Area, Repository__
  2. Đưa Git từ Working Directory to Staging dùng __git add <tên file>__
  3. Commit các thay đổi đang ở Staging Area: dùng __git commit -m "Tên phiên bản"__
  4. Khởi tạo Repo local __git init__
  5. Tạo Repo Github và liên kết với repo local __git remote add origin <url>__
  6. Thêm file vào staging __git add .__
  7. Commit file __git commit -m "message"__
  8. Push Code __git push origin main__
  9. Commit Convention:  < type >: < short_description>
        1.  chore: sửa nhỏ lẻ
        2.  feat: Thêm tính năng mới, TC mới
        3.  fix: sửa lổi 1 test trước đó
   
   ---------------------------------------------------
### Javascript

1. Biến: có thể thay đổi được

    Khai báo biến bằng công thức:
    <từ khoá> <tên biến> = <giá trị>
    Từ khoá Var/let
    Chỉ dùng let
2. Hằng: Không thể thay thế được __const <tên biến> = <giá trị>;__
3. Comment:
     Một dòng: // <nội dung comment>
     Nhiều dòng: /*
              <nội dung comment>
                */
4. Kiểu dữ liệu: 
      Công thức vẫn là: <từ khóa> <tên biến> = <giá trị>;
      let name = "Lan";       // String
      let age = 43;           // Number
      let isActive = true;    // Boolean
      let result = null;      // Null
      let address;            // Undefined
5. Toán tử
    Công thức tính toán: <biến kết quả> = <giá trị 1> <toán tử> <giá trị 2>;
      +   cộng
      -   trừ
      *   nhân
      /   chia
      %   chia lấy dư
Công thức so sánh: 
    <giá trị 1> <toán tử so sánh> <giá trị 2>
    age >= 18
    age === 43
    age !== 20
1. Câu điều kiện if 
    if (<điều kiện>) {
     < code khi đúng>
    
    }
2. Vòng lặp for
   for (<khởi tạo>; <điều kiện>; <thay đổi>) {
    <code cần lặp>
}
