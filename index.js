// bài 1
document.querySelector('.btn-kq').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var khuvuc = document.getElementById('khuVuc').value;
    var doituong = document.getElementById('doiTuong').value;
    var diemmon1 = document.getElementById('diemMon1').value * 1;
    var diemmon2 =document.getElementById('diemMon2').value * 1;
    var diemmon3 =document.getElementById('diemMon3').value * 1;
    var resultDiv = document.getElementById('ketQua1');
    resultDiv.innerHTML = '';
   if (diemmon1 === 0 || diemmon2 === 0 || diemmon3 === 0) {
        resultDiv.innerHTML = '<p> điểm 0.</p>';
    } else {
        let diemUuTien = 0;

        if (khuvuc === 'A') {
            diemUuTien += 2.0;
        } else if (khuvuc === 'B') {
            diemUuTien += 1.5;
        } else if (khuvuc === 'C') {
            diemUuTien += 1.0;
        }

        if (doituong === '1') {
            diemUuTien += 2.5;
        } else if (doituong === '2') {
            diemUuTien += 1.5;
        } else if (doituong === '3') {
            diemUuTien += 1.0;
        }

        var diemTongKet = diemmon1 + diemmon2 + diemmon3 + diemUuTien;

        if (diemTongKet >= diemChuan) {
            resultDiv.innerHTML = `<p> Bạn đã đậu. Tổng điểm là ${diemTongKet}.</p>`;
        } else {
            resultDiv.innerHTML = `<p> Bạn đã rớt. Tổng điểm là ${diemTongKet}.</p>`;
        }
    }
}
// bài 2
document.querySelector('.btn-tinhtien').onclick = function() {
    var hoten = document.getElementById('hoTen').value;
    var sokw = document.getElementById('soKW').value *1;
    var tien;
    if (sokw <= 50) {
        tien = sokw * 500;
    } else if (sokw <= 100) {
        tien = 50 * 500 + (sokw - 50) * 650;
    } else if (sokw <= 150) {
        tien = 50 * 500 + 50 * 650 + (sokw - 100) * 850;
    } else if (sokw <= 200) {
        tien = 50 * 500 + 50 * 650 + 50 * 850 + (sokw - 150) * 1100;
    } else {
        tien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (sokw - 200) * 1300;
    }
    document.getElementById('ketQua2').innerHTML = "Tên: " + hoten + ",Tiền phải trả: " + tien.toLocaleString() + " đồng";
}
// bài 3
document.querySelector('.btn-tinhtienthue').onclick = function(){
    var HoTen = document.getElementById('HoTen').value;
    var thunhapnam = document.getElementById('thuNhapNam').value *1;
    var songuoi = document.getElementById('soNguoi').value * 1;
    var thuNhapChiuThue = thunhapnam - 4 - songuoi * 1.6;
    var thue;
    
    if (thuNhapChiuThue <= 60) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
    } else {
        thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
    }

    var formatTien = new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND'
    });
    var formattedThue = formatTien.format(thue);

    document.getElementById('ketQua3').innerHTML = 'Họ tên: ' + HoTen + ' Tiền thuế cá nhân:' + formattedThue;
}
// bài 4

document.getElementById('mloaikhachHang').addEventListener('change', function () {
    var loaiKhachHang = this.value;
    var inputKetNoi = document.getElementById('soKetNoi');

    if (loaiKhachHang === 'doanhnnghiep') {
        inputKetNoi.style.display = 'block';
    } else {
        inputKetNoi.style.display = 'none';
    }
});
document.querySelector('.btn-tinhtiencap').onclick = function () {
    var maKhachHang = document.getElementById('makhachHang').value;
    var loaiKhachHang = document.getElementById('mloaikhachHang').value;
    var soKetNoi = document.getElementById('soKetNoi').value * 1;
    var soKenhCaoCap = document.getElementById('soKenhcaoCap').value * 1;
    var tongTien = 0;
    if (loaiKhachHang === 'doanhnnghiep') {
        phiXuLy = 15;
        phiDichVuCoBan = 75;
        phiThueKenhCaoCap = 50;
        phiDichVuCoBan = soKetNoi <= 10 ? phiDichVuCoBan : phiDichVuCoBan + (soKetNoi - 10) * 5;
        return tongTien;
    } else {
        phiXuLy = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = soKenhCaoCap * 7.5;
    }
    var tongTien = phiXuLy + phiDichVuCoBan + phiThueKenhCaoCap;
 document.getElementById('ketQua4').innerHTML =
        "Mã khách hàng: " + maKhachHang + "\nLoại khách hàng: " + loaiKhachHang + "\nTổng tiền cáp: $ " + tongTien;
};
