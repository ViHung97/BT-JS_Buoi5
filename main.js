function getEle(id) {
    return document.getElementById(id);
};

/**Bài tập 1: Quản Lý Xét Tuyển
 * Đầu vào:
 * - Tạo biến để nhập điểm, khu vực, đối tượng
 * - Dom tới từng id để lấy value
 * Xử lý:
 * - Tính điểm tổng kết = điểm 3 môn + điểm ưu tiên
 * - Xét điều kiện để: trúng tuyển hoặc rớt
 * Đầu ra:
 * - Show kết quả: trúng tuyển hoặc rớt
 */

var btnTinhDiem = document.getElementById('btnTinhDiem');
btnTinhDiem.onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var point1 = document.getElementById('point1').value * 1;
    var point2 = document.getElementById('point2').value * 1;
    var point3 = document.getElementById('point3').value * 1;
    var uuTien1 = document.getElementById('uuTien1').value;
    var uuTien2 = document.getElementById('uuTien2').value * 1;



    if (uuTien1 == 'A') {
        var diemUuTien1 = 2;
    } else if (uuTien1 == 'B') {
        diemUuTien1 = 1;
    } else if (uuTien1 == 'C') {
        diemUuTien1 = 0.5;
    } else {
        diemUuTien1 = 0;
    };

    if (uuTien2 == 1) {
        var diemUuTien2 = 2.5;
    } else if (uuTien2 == 2) {
        diemUuTien2 = 1.5;
    } else if (uuTien2 == 3) {
        diemUuTien2 = 1;
    } else {
        diemUuTien2 = 0;
    };

    var diemTongKet = point1 + point2 + point3 + diemUuTien1 + diemUuTien2;

    if (diemTongKet >= diemChuan) {
        var xepHang = 'Đậu'
    } else {
        xepHang = 'Rớt'
    };

    if (point1 <= 0 || point2 <= 0 || point3 <= 0) {
        xepHang = 'Rớt'
    }
    else {
        xepHang = 'Đậu'
    };

    document.getElementById('footerXetTuyen').innerHTML = 'Tổng điểm: ' + diemTongKet + '; Kết quả: ' + xepHang;
}

/**Bài Tập 2: Tính Tiền Điện
 * Đầu vào:
 * - Tạo biến để nhập vào số KW đã dùng
 * - DOM để lấy giá trị biến mới tạo
 * Xử lý:
 * - Tính tiền điện theo mức độ KW đã dùng 
 * Đầu ra:
 * - Show tên khách hàng và số tiền phải đóng 
 */

// Format VND
var currentFormat = new Intl.NumberFormat('vn-VN');

var btnTienDien = document.getElementById('btnTienDien');
btnTienDien.onclick = function () {
    var khachHang = document.getElementById('khachHang').value;
    var soKW = document.getElementById('soKW').value * 1;

    if (soKW < 0) {
        alert('Vui lòng nhập số lượng hợp lệ !')
    } else if (soKW >= 0 && soKW <= 50) {
        var tienPhaiTra = 500 * soKW
    } else if (soKW > 50 && soKW <= 100) {
        tienPhaiTra = 500 * 50 + 650 * (soKW - 50)
    } else if (soKW > 100 && soKW <= 200) {
        tienPhaiTra = 500 * 50 + 650 * 50 + 850 * (soKW - 100)
    } else if (soKW > 200 && soKW <= 350) {
        tienPhaiTra = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKW - 200)
    } else {
        tienPhaiTra = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKW - 350)
    };

    document.getElementById('footerTienDien').innerHTML = 'Tên Khách Hàng: ' + khachHang + '; Số tiền phải đóng: ' + currentFormat.format(tienPhaiTra) + 'đ'
};
/**Bài Tập 3: Tính thuế:
 * Đầu vào:
 * - Tạo biến để nhập Tổng thu nhập năm và tên, số người phụ thuộc
 * Xử lý:
 * - Tính thu nhập chịu thuế bằng công thức đã cho
 * - Tính thuế thu nhập cá nhân phải trả dựa trên thu nhập chịu thuế
 * Đầu ra:
 * - Show Họ Tên và số tiền đóng thuế thu nhập cá nhân 
 */


var btnTienThue = getEle('btnTienThue');
btnTienThue.onclick = function () {
    var hoTen = getEle('hoTen').value;
    var tongTN = getEle('tongTN').value * 1;
    var soNgPhuThuoc = getEle('soNgPhuThuoc').value * 1;

    var tnChiuThue = tongTN - 4 - soNgPhuThuoc * 1.6;

    if (tnChiuThue < 0) {
        alert('Vui lòng nhập số hợp lệ !!!')
    } else if (tnChiuThue < 60) {
        var thuePhaiTra = 0;
    } else if (tnChiuThue === 60) {
        thuePhaiTra = tnChiuThue * 0.05;
    } else if (tnChiuThue > 60 && tnChiuThue <= 120) {
        thuePhaiTra = tnChiuThue * 0.1;
    } else if (tnChiuThue > 120 && tnChiuThue <= 210) {
        thuePhaiTra = tnChiuThue * 0.15;
    } else if (tnChiuThue > 210 && tnChiuThue <= 384) {
        thuePhaiTra = tnChiuThue * 0.2;
    } else if (tnChiuThue > 384 && tnChiuThue <= 624) {
        thuePhaiTra = tnChiuThue * 0.25;
    } else if (tnChiuThue > 624 && tnChiuThue <= 960) {
        thuePhaiTra = tnChiuThue * 0.3;
    } else {
        thuePhaiTra = tnChiuThue * 0.35;
    };

    getEle('footerTinhThue').innerHTML = 'Họ Tên: ' + hoTen + '; Thuế thu nhập cá nhân phải đóng là: ' + currentFormat.format(thuePhaiTra) + 'triệu VND'
};
/**Bài Tập 4: Tính tiền cáp:
 * Đầu vào:
 * - 
 */
function chonDoiTuong() {
    var loaiKH = getEle('doiTuong').value;
    console.log(loaiKH)
    if (loaiKH == 'nhaDan') {
        getEle('ketNoi').disabled = true;
    } else if (loaiKH == 'doanhNghiep') {
        getEle('ketNoi').disabled = false;
    }

}

const DAN_HOADON = 4.5;
const DAN_DICHVU = 20.5;
const DAN_CAOCAP = 7.5;

const DN_HOADON = 15;
const DN_DICHVU = 75;
const DN_CAOCAP = 50;
const DN_KETNOITHEM = 5;

var btnTienCap = getEle('btnTienCap');
btnTienCap.onclick = function () {
    var maKH = getEle('maKH').value;
    var ketNoi = getEle('ketNoi').value * 1;
    var kenhCaoCap = getEle('kenhCaoCap').value * 1;

    var doiTuong = getEle('doiTuong').value;

    switch (doiTuong) {
        case 'nhaDan':
            var tienCap = DAN_HOADON + DAN_DICHVU + DAN_CAOCAP * kenhCaoCap;
            break;
        case 'doanhNghiep':
            if (0 <= ketNoi && ketNoi <= 10) {
                tienCap = DN_HOADON + DN_DICHVU + DN_CAOCAP * kenhCaoCap;
            } else if (ketNoi > 10) {
                tienCap = DN_HOADON + DN_DICHVU + (ketNoi - 10) * DN_KETNOITHEM + DN_CAOCAP * kenhCaoCap;
            };
            break;
        default:
            alert('Vui lòng chọn đối tượng !!!')
            break;
    }

    getEle('footerTienCap').innerHTML = 'Mã Số Khách Hàng: ' + maKH + '; Số Tiền Cáp Phải Đóng là: ' + tienCap + '$';
}