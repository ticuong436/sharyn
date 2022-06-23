import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ketquatuvan',
  templateUrl: './ketquatuvan.component.html',
  styleUrls: ['./ketquatuvan.component.scss']
})
export class KetquatuvanComponent implements OnInit {
  config
  combo = [
    {
      "name": "combo điểu trị dầu nhờn",
      "des": "<p>Miracle EX Spicule thúc đẩy quá trình tái tạo và sửa chữa tế bào da tổn thương từ sâu bên trong. Chỉ sau 1 liệu trình da đẹp hoàn hảo ngay tại nhà.</p>",
      "status": "Promo",
      "slug": "miracle-ex-spicule",
      "price": "1.780.000 ₫",
      "image": "../../../assets/images/combo-dieu-tri.png",
      "id": 1
    },
    {
      "name": "combo điều trị mụn",
      "des": "<p>DNA Sharyn - “trợ thủ” đắc lực trong điều trị sẹo rỗ với khả năng phục hồi lên đến 90%, ngay lập tức làn da của bạn sẽ được căng bóng, mịn màng từ sâu bên trong.&nbsp;</p>",
      "status": "Best Seller",
      "slug": "dna-sharyn",
      "price": "2.000.000 ₫",
      "image": "../../../assets/images/combo-dieu-tri.png",
      "id": 2
    },
    {
      "name": "combo điều trị nám - thâm- sạm",
      "des": "<p>“Thăng hạng” sức mạnh với công nghệ cấp nước độc quyền THẤM SÂU - KÍCH HOẠT - KHÓA ẨM, HA Ampoule serum luôn đáp ứng nhu cầu độ ẩm của mọi loại da.&nbsp;</p>",
      "status": "Promo",
      "slug": "ha-apoule",
      "price": "1.580.000 ₫",
      "image": "../../../assets/images/combo-dieu-tri.png",
      "id": 3
    },
    {
      "name": "combo điều trị sẹo rỗ",
      "des": "<p>Với kết cấu mỏng nhẹ, Cream 4in1 có khả năng dưỡng trắng, cấp ẩm, chống nắng và ngăn ngừa lão hóa. Chỉ 1 phút mỗi sáng cho làn da đẹp rạng rỡ suốt ngày dài.&nbsp;</p>",
      "status": "Best Seller",
      "slug": "cream-4in1",
      "price": "1.600.000 ₫",
      "image": "../../../assets/images/combo-dieu-tri.png",
      "id": 4
    }
  ];
  products = [
    {
        name: 'Miracle EX Spicule',
        desnoibat:'TINH THỂ THẦN KỲ NUÔI DƯỠNG TÁI TẠO PHỤC HỒI DA THẦN TỐC  ',
        des: '<p>Miracle EX Spicule thúc đẩy quá trình tái tạo và sửa chữa tế bào da tổn thương từ sâu bên trong. Chỉ sau 1 liệu trình da đẹp hoàn hảo ngay tại nhà.</p>',
        status: 'Promo',
        slug: 'miracle-ex-spicule',
        price: 890000,
        priceold:1780000,
        image: '../../../../assets/images/SẢN PHẨM/Miracle---01.jpg',
        id: 1,
    },
    {
        name: 'DNA Sharyn',
        desnoibat:'THẦN DƯỢC DÀNH RIÊNG CHO LÀN DA KHÔNG TUỔI',

        des: '<p>DNA Sharyn - “trợ thủ” đắc lực trong điều trị sẹo rỗ với khả năng phục hồi lên đến 90%, ngay lập tức làn da của bạn sẽ được căng bóng, mịn màng từ sâu bên trong.&nbsp;</p>',
        status: 'Best Seller',
        slug: 'dna-sharyn',
        price: 1200000,
        priceold:2000000,

        image: '../../../../assets/images/SẢN PHẨM/DNA.jpg',
        id: 2,
    },
    {
        name: 'HA Apoule',
        desnoibat:'SERUM TẾ BÀO GỐC PHỤC HỒI, TÁI TẠO VÀ CĂNG BÓNG DA',

        des: '<p>“Thăng hạng” sức mạnh với công nghệ cấp nước độc quyền THẤM SÂU - KÍCH HOẠT - KHÓA ẨM, HA Ampoule serum luôn đáp ứng nhu cầu độ ẩm của mọi loại da.&nbsp;</p>',
        status: 'Promo',
        slug: 'ha-ampoule',
        price: 590000,
        priceold:1580000,

        image: '../../../../assets/images/SẢN PHẨM/HA.jpg',
        id: 3,
    },
    {
        name: 'Cream 4in1',
        desnoibat:'KEM DƯỠNG - CHỐNG NẮNG - TRẺ HÓA KIÊM LỚP NỀN TRANG ĐIỂM HOÀN HẢO  ',

        des: '<p>Với kết cấu mỏng nhẹ, Cream 4in1 có khả năng dưỡng trắng, cấp ẩm, chống nắng và ngăn ngừa lão hóa. Chỉ 1 phút mỗi sáng cho làn da đẹp rạng rỡ suốt ngày dài.&nbsp;</p>',
        status: 'Best Seller',
        slug: 'cream-4in1',
        price: 800000,
        priceold:1600000,

        image: '../../../../assets/images/SẢN PHẨM/4in1.jpg',
        id: 4,
    },

    {
        name: 'PEARLY',
        desnoibat:'VIÊN UỐNG CHỐNG NẮNG - TRẮNG DA',

        des: '<p>VIÊN UỐNG CHỐNG NẮNG - TRẮNG DA &nbsp;</p>',
        status: '50%',
        slug: 'pearly',
        price: 900000,
        priceold: 1800000,

        image: '../../../../assets/images/SẢN PHẨM/Pearly.jpg',
        id: 5,
    },
    {
        name: 'INTENSIVE UV SUNBLOCK CREAM',
        desnoibat:'VIÊN UỐNG CHỐNG NẮNG - TRẮNG DA',

        des: '<p>KEM CHỐNG NẮNG 3IN1 – THOÁNG MỊN DA <br/> KHÔNG NHỜN RÍT &nbsp;</p>',
        status: '50%',
        slug: 'intensive-uv-sunblock-cream',
        price: 550000,
        priceold: 1100000,

        image: '../../../../assets/images/SẢN PHẨM/Cream.jpg',
        id: 6,
    },
];
  constructor() { }

  ngOnInit(): void {
    this.config={
      loop:true,
      speed:1000,

      autoplay: {
        delay: 1500,
        disableOnInteraction: false
        
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        
        982:{
          slidesPerView: 4,
          spaceBetween: 50,


        }
      },
    }
  }

}
