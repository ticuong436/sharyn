import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-combo-dieu-tri',
    templateUrl: './combo-dieu-tri.component.html',
    styleUrls: ['./combo-dieu-tri.component.scss'],
})
export class ComboDieuTriComponent implements OnInit {
    config;
    combo = [
        {
            name: 'combo điểu trị dầu nhờn',
            des: '<p>Miracle EX Spicule thúc đẩy quá trình tái tạo và sửa chữa tế bào da tổn thương từ sâu bên trong. Chỉ sau 1 liệu trình da đẹp hoàn hảo ngay tại nhà.</p>',
            status: 'Promo',
            slug: 'miracle-ex-spicule',
            price: '1.780.000 ₫',
            image: '../../../../assets/images/SẢN PHẨM/2COMBO-ĐIỀU-TRỊ-DẦU-NHỜN.png',
            id: 1,
        },
        {
            name: 'combo điều trị mụn',
            des: '<p>DNA Sharyn - “trợ thủ” đắc lực trong điều trị sẹo rỗ với khả năng phục hồi lên đến 90%, ngay lập tức làn da của bạn sẽ được căng bóng, mịn màng từ sâu bên trong.&nbsp;</p>',
            status: 'Best Seller',
            slug: 'dna-sharyn',
            price: '2.000.000 ₫',
            image: '../../../assets/images/combo.png',
            id: 2,
        },
        {
            name: 'combo điều trị nám - thâm- sạm',
            des: '<p>“Thăng hạng” sức mạnh với công nghệ cấp nước độc quyền THẤM SÂU - KÍCH HOẠT - KHÓA ẨM, HA Ampoule serum luôn đáp ứng nhu cầu độ ẩm của mọi loại da.&nbsp;</p>',
            status: 'Promo',
            slug: 'ha-apoule',
            price: '1.580.000 ₫',
            image: '../../../assets/images/combo.png',
            id: 3,
        },
        {
            name: 'combo điều trị lão hóa - nếp nhăn',
            des: '<p>Với kết cấu mỏng nhẹ, Cream 4in1 có khả năng dưỡng trắng, cấp ẩm, chống nắng và ngăn ngừa lão hóa. Chỉ 1 phút mỗi sáng cho làn da đẹp rạng rỡ suốt ngày dài.&nbsp;</p>',
            status: 'Best Seller',
            slug: 'cream-4in1',
            price: '1.600.000 ₫',
            image: '../../../assets/images/combo.png',
            id: 4,
        },
        {
            name: 'combo điều trị nám - thâm- sạm',
            des: '<p>“Thăng hạng” sức mạnh với công nghệ cấp nước độc quyền THẤM SÂU - KÍCH HOẠT - KHÓA ẨM, HA Ampoule serum luôn đáp ứng nhu cầu độ ẩm của mọi loại da.&nbsp;</p>',
            status: 'Promo',
            slug: 'ha-apoule',
            price: '1.580.000 ₫',
            image: '../../../assets/images/combo.png',
            id: 5,
        },
        {
            name: 'combo điều trị lão hóa - nếp nhăn',
            des: '<p>Với kết cấu mỏng nhẹ, Cream 4in1 có khả năng dưỡng trắng, cấp ẩm, chống nắng và ngăn ngừa lão hóa. Chỉ 1 phút mỗi sáng cho làn da đẹp rạng rỡ suốt ngày dài.&nbsp;</p>',
            status: 'Best Seller',
            slug: 'cream-4in1',
            price: '1.600.000 ₫',
            image: '../../../assets/images/combo.png',
            id: 6,
        },
    ];
    products = [
        {
            name: 'miracle ex spicule',
            des: 'Chống lão hóa, mờ sẹo thâm mụn',
            status: '50%',
            slug: 'miracle-ex-spicule',
            price: '800.000',
            image: '../../../../assets/images/SẢN PHẨM/Miracle---01.jpg',
            id: 1,
        },
        {
            name: 'miracle ex spicule',
            des: 'Chống lão hóa, mờ sẹo thâm mụn',
            status: '50%',
            slug: 'miracle-ex-spicule',
            price: '800.000',
            image: '../../../../assets/images/SẢN PHẨM/DNA.jpg',
            id: 2,
        },
        {
            name: 'miracle ex spicule',
            des: 'Chống lão hóa, mờ sẹo thâm mụn',
            status: '50%',
            slug: 'miracle-ex-spicule',
            price: '800.000',
            image: '../../../../assets/images/SẢN PHẨM/Pearly.jpg',
            id: 3,
        },
        {
            name: 'miracle ex spicule',
            des: 'Chống lão hóa, mờ sẹo thâm mụn',
            status: '50%',
            slug: 'miracle-ex-spicule',
            price: '800.000',
            image: '../../../../assets/images/SẢN PHẨM/4in1.jpg',

            id: 4,
        },
    ];
    constructor() {}

    ngOnInit(): void {
        this.config = {
            loop: true,
            speed: 1000,

            autoplay: {
                
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
              992: {
                  spaceBetween: 50,
                  slidesPerView: 1,
              },
              
          },
        };
    }
}
