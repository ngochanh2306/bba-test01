Phạm vi của biến: block scope, funtion scope, global
    - Block scope: biến được khai báo trong cặp ngoặc nhọn
        ○ Var: không bị giới hạn
        ○ Let/const: bị giới hạn ==> ra ngoài là undefined
    - Function scope: biến được khai báo trong 1 hàm
    --> let/var/const ngoài hàm đều undefined
    - Global: khai báo dòng bất kỳ (kh nằm tron khối hay hàm)
    ==> Phạm vi nhỏ nhất có thể
    
Break: thoát khỏi vòng lặp ngay lập tức
Continue: bỏ qua phần còn loại của vòng lặp hiện tại, chuyển sang vòng lặp tiếp theo

Ternary operator - ngắn gọn if else:
    Ví dụ: Let age = 20;
        Let status = ( age >= 18 ) ? "Người lớn" : "Trẻ em"

        Let score = 75;
        Let grade =  score >= 90 ? "A" :
                Score >= 80 ? "B" :
                Score >= 70 ? "C" :
                Score >= 60 ? "D" : "F"
                
Loop:
    - For … in: duyệt qua các thuộc tính của 1 object
    Ví dụ: const person = {
            Name: "Hanh",
            Age: 30,
            Address: 
            {
                City: VL,
                Country: VN
            }
        }
        For (let key in person) {
            Console.log(key + " " + person[key]);
        }
        //output: 
        //name : Hanh
        //age: 30
        For (const key in person.address) {
            Console.log(key);
        }
        //city
        //country
        
    - For each: method của array để thực thi 1 function cho mỗi phần tử, không thể dùng break/continue.
    Ví dụ: const numbers = [1, 2, 3, 4, 5];
        Numbers.forEach(function(value) {
            Console.log(value);
        });
             
Utils function: hàm có sẵn giúp code nhanh - gọn hơn
    - String util:
    + Bỏ khoảng trắng:
        ○ Trim(): bỏ khoảng trắng 2 đầu
        ○ trimStart(): bỏ khoảng trắng bên trái
        ○ trimeEnd(): bỏ khoảng trắng bên phải
    Ví dụ: console.log(text.trim());
    
    + Chuyển đổi HOA - thường:
        ○ toUpperCase(): HOA
        ○ toLowerCase(): thường
    
    + Bao gồm chuỗi con: includes("….")
        Let text = "Hello world";
console.log(text.includes("hello")); //false
        
    + Cắt chuỗi: split("…"), trả về mảng
        Let text = "1 2 3";
        Console.log(text.split(" ")); // ["1", "2", "3"]
        
    + Thay thế chuỗi con: replace("gốc", "được thay")
        Let text = "Hello world";
        Console.log(text.replace("world", "hanh")); // Hello hanh
        
    - Array util:
    + Thêm phân tử vào mảng:
        ○ Push(<phần tử>): thêm cuối mảng
        ○ Unshift(<phằn tử>): thêm đầu mảng
        ○ Splice(<vị trí>, 0, <phần tử>): thêm giữa mảng
        Let arr = [0, 1, 2, 3, 4];
        Arr.splice(2, 0, 1.5, 1.6, 1.7); // 0, 1, 1.5, 1.6, 1.7, 2, 3, 4
        
    + Xóa phần tử trong mảng:
        ○ Pop(): xóa cuối mảng
        ○ Shift(): xóa đầu mảng
        ○ Splice(<vị trí>, <số phần tử cần xóa>): xóa giữa mảng
    
    ==> splice (vị trí, số phần tử muốn xóa, phần tử muốn thêm)
    
    + Tìm kiếm phần tử:
        ○ Find(): trả về phần tử đầu tiên hợp lệ
        ○ Filter(): trả tất cả các phần tử hợp lệ
        Let numbers = [5, 12, 8, 130, 44];
        Let first = numbers.find(num => num > 10) // num tên bất kỳ => điều kiện
        => first = 12
        
        Let all = numbers.filter(num => num > 10)
        => all = [12, 130, 44]
        
    + Biến đổi mảng: tạo mảng mới bằng cách áp dụng hàm lên từng phần tử mảng gốc. Trả về mảng mới cùng độ dài
        Let numbers = [5, 12, 8]
        //Nhân đôi từng phần tử
        Let new = numbers.map(num => num*2); 
        => [10, 24, 16]
        
    + Sắp xếp mảng: sort ((a,b) => a - b)
                => a-b<0 => a < b => a trước b
                => a-b>0 => a > b => b trước a
                => a-b=0 => a = b => giữ nguyên thứ tự
        ○ Xếp tăng dần: 
        Numbers.sort((a,b) => a - b);
        
        ○ Xếp giảm dần:
        Numbers.sort((a,b) => b - a);
