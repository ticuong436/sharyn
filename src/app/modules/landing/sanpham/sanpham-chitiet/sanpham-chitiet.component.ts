import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { Navigation,Pagination,FreeMode, Autoplay } from "swiper";
SwiperCore.use([Pagination, FreeMode, Navigation, Autoplay]);
@Component({
    selector: 'app-sanpham-chitiet',
    templateUrl: './sanpham-chitiet.component.html',
    styleUrls: ['./sanpham-chitiet.component.scss'],
})
export class SanphamChitietComponent implements OnInit {
    products = [
        {
            name: 'MIRACLE EX SPICULE',
            des: '<p>TINH THỂ THẦN KỲ NUÔI DƯỠNG TÁI TẠO </br> PHỤC HỒI DA THẦN TỐC &nbsp;</p>',
            status: '50%',
            slug: 'miracle-ex-spicule',
            price: '2,5ml - 890.000',
            priceold: 1780000,
            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 1,
        },
        {
            name: 'DNA SHARYN',
            des: '<p>THẦN DƯỢC DÀNH RIÊNG CHO LÀN DA  <br/> KHÔNG TUỔI &nbsp;</p>',
            status: '50%',
            slug: 'dna-sharyn',
            price: '30ml - 1.200.000',

            priceold: 2000000,
            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 2,
        },
        {
            name: 'HA AMPOULE',
            des: '<p>SERUM TẾ BÀO GỐC PHỤC HỒI, TÁI TẠO <br/> VÀ CĂNG BÓNG DA &nbsp;</p>',
            status: '50%',
            slug: 'ha-ampoule',
            price: '20ml - 590.000',

            priceold: 1580000,

            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 3,
        },
        {
            name: 'CREAM 4 IN 1',
            des: '<p>KEM DƯỠNG - CHỐNG NẮNG - TRẺ HÓA <br/> KIÊM LỚP NỀN TRANG ĐIỂM HOÀN HẢO &nbsp;</p>',
            status: '50%',
            slug: 'cream-4in1',
            price: '50ml - 800.000',

            priceold: 1600000,

            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 4,
        },
        {
            name: 'PEARLY',
            des: '<p>VIÊN UỐNG CHỐNG NẮNG - TRẮNG DA &nbsp;</p>',
            status: '50%',
            slug: 'pearly',
            price: 'Hộp 90 viên - 1.800.000',

            priceold: 1800000,

            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 5,
        },
        {
            name: 'INTENSIVE UV SUNBLOCK CREAM',
            des: '<p>KEM CHỐNG NẮNG 3IN1 – THOÁNG MỊN DA <br/> KHÔNG NHỜN RÍT &nbsp;</p>',
            status: '50%',
            slug: 'intensive-uv-sunblock-cream',
            price: '50ml - 550.000',

            priceold: 1100000,

            image: {
                1: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-01.png',
                2: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-02.png',
                3: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE--03.png',
                4: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-0--4.png',
                5: '../../../../../assets/images/SẢN PHẨM CHI TIẾT/MIRACLE/MIRACLE-5.png',
            },
            id: 6,
        },
    ];
    config;
    config1;
    productDetail: any;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.config = {
            loop: true,
            speed: 1000,

            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
        };

        this.config1={
            loop:true,
            autoplay: {
              delay: 1500,
              disableOnInteraction: false
            },
            breakpoints: {
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              
              982:{
                slidesPerView: 4,
                spaceBetween: 20,
      
              }
            },
        
              freeMode: true,
              
          }
        this.productDetail = this.products.find(
            (x) => x.slug == this.route.snapshot.params.slug
        );
    }
}
