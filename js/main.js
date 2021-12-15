/**
 * K1 :
 * input : In số chẳng và lẻ < 100
 * soLe
 * soChan
 * K2 :
 * Cho i chạy từ 0 đến 100
 * + i < 100 => num %2 và ngược lại
 * 
 * K3:
 * output : in tất cả số chẳng và lẻ < 100
 * 
 */


function count() {
     var soLe = "";
     var soChan = "";
     for (var i = 0; i < 100; i++) {
          if (i % 2 == 0) {
               soChan += " " + i
          } else {
               soLe += " " + i
          }  
     }
     document.getElementById("num").innerHTML = "Số chẳn: " + soChan + "<br><br>" + "Số lẻ: " + soLe;
}
document.getElementById("btn_num").onclick = count;

// cách 2
function count2() {
     var soLe = "";
     var soChan = "";
     var i = 0
     while (i < 100) {
          if (i % 2 == 0) {
               soChan += " " + i;
          i++;
          } else {
               soLe += " " + i;   
          i++;     
          } 
     }
     document.getElementById("num_2").innerHTML = "Số chẳn: " + soChan + "<br><br>" + "Số lẻ: " + soLe;
}
document.getElementById("btn_num2").onclick = count2;


/**
 * Bài 2 :
 * K1:
 * Input : Đếm có bao nhiêu số / hết cho 3 - 0->1000
 * 
 * K2:
 * Cho i chạy từ 0 đến 1000
 * i < 1000 => num %3 và ngược lại
 * 
 * K3:
 * output : in ra tất cả các số chia hết cho 3
 * 
 */

function count3() {
     var count = 0;
     for (var i = 0; i < 1000; i++) {
          if (i % 3 ==0) {
               count++;
          }
     }
     document.getElementById("num_3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById("btn_num3").onclick = count3;

// cách 2

function count4() {
     var count = 0;
     var i = 0;
     while (i < 1000) {
          if (i % 3 ==0) {
               count++;
          }
          i++;
     }
     document.getElementById("num_4").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById("btn_num4").onclick = count4;

/**
 * Bài 3:
 * Input : Tìm số nguyên dương nhỏ sum < 10000
 * soDuong
 * K2 : 
 * Cho i chạy từ 0 đến 10000
 * 
 * i < 10000 => i+=1 và ngược lại
 * 
 * K3:
 * in ra số nguyên dương nhỏ nhất
 * 
 */

function count5() {
     var soDuong = 0;
     for (var i = 0; i < 10000; i++) {
          if (soDuong < 10000) {
               soDuong += i;
          } else {
               i -= 1;
               break;
           }   
     }
     document.getElementById("num_5").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}

document.getElementById("btn_num5").onclick = count5;


/**
 * Bai 4 :
 * K1
 * Input :nhập vào 2 số x, n tính tổng
 * tong
 * K2 :
 * Cho i chạy từ 1 đến n

 *  tong = x + Math.pow(x,i)
 * 
 * K3 :
 * Tong
 */

function tinhTong() {
     var tong = 0;
     var x = Number(document.getElementById("num_x").value);
     var n = Number(document.getElementById("num_y").value);
     for (var i = 1; i <= n; i++) {
          tong += Math.pow(x, i);
     }
     document.getElementById("num_6").innerHTML = "Tổng: " + tong;
}
document.getElementById("btn_num6").onclick = tinhTong;

/**
 * Bài 5 :Nhập vào n. Tính giai thừa
 * K1
 * input :
 * n
 * 
 * K2 :
 * Cho i chạy từ 1 đến n
 * 
 * K3 
 * output :
 * in ra gia thừa
 * 
 */

function giaThua() {
     var giathua = 1;
     var n = Number(document.getElementById("num_z").value);
     for (var i = 1; i <= n; i++) {
          giathua *= i;
     }
     document.getElementById("num_7").innerHTML = "Kết quả: " + giathua;
}
document.getElementById("btn_num7").onclick = giaThua;


/**
 * Bài 6 :Tạo thẻ div chẳn và lẻ
 * K1 : tạo input
 * 
 * K2 
 * Cho i chạy từ 0 đến 10
 * %2=0 => div chẵn và ngược lại
 * 
 * K3
 * in ra 10 div chẵn và lẽ
 */

function divChanLe() {
     var content = "";
     for (let i = 0; i <= 10; i++) {
          if (i % 2 == 0) {
               content += "<div style='background-color: red;color:#3fff00;margin-bottom:0;'>Div chẵn</div>";
          } else {
               content += "<div style='background-color: blue;color:#3fff00;margin-bottom:0;'>Div lẻ</div>";
          }
     }
     document.getElementById("num_8").innerHTML = content;
}
document.getElementById("btn_num8").onclick = divChanLe;

/** 
 * Bài 7: In số nguyên tố
 * K1: Input
 * số n
 * K2:
 * + Nếu n<2 => Không có số nguyên tố
 * + Nếu n>=2 :
 * Cho i chạy 2 -> n 
 * kiểm tra từng giá trị i :
 * - Cho j chạy từ 2 đến sqrt(i) 
 * - Nếu i%j = 0 => count++
 * - Nếu count = 0 => số i là số nguyên tố => ketQua += " " + i;
 * - Xét lại count =0;
 * K3: 
 * Output
 * In ra các số nguyên tố
 * 
 */

function soNguyenTo () {
     var n = document.getElementById("num_n").value;
     var soNguyenTo = "";
     var count = 0;
     if (n < 2) {
          soNguyenTo = "Không có"
     }
     else {
         for (var i = 2; i <= n; i++) {
             for (var j = 2; j <= Math.sqrt(i); j++) {
                 if (i % j == 0) {
                     count++;
                 }
             }
             if (count == 0) {
               soNguyenTo += " " + i;
             }
             count = 0;
         }
     }
     document.getElementById("num_9").innerHTML = "Chuỗi số nguyên tố: " + soNguyenTo;
 }
 document.getElementById("btn_num9").onclick = soNguyenTo