import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { SplitText } from "gsap/SplitText";
// import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, { Navigation, Pagination, FreeMode, Autoplay } from 'swiper';
import { HomepageService } from './homepage.service';
SwiperCore.use([Pagination, FreeMode, Navigation, Autoplay]);

SwiperCore.use([Pagination, Navigation]);
// gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit {
    config;
    config1;
    products = [
        {
          "name": "Miracle EX Spicule",
          "des": "<p>Miracle EX Spicule thúc đẩy quá trình tái tạo và sửa chữa tế bào da tổn thương từ sâu bên trong. Chỉ sau 1 liệu trình da đẹp hoàn hảo ngay tại nhà.</p>",
          "status": "Promo",
          "slug": "miracle-ex-spicule",
          "price": "1.780.000 ₫",
          "image": "https://firebasestorage.googleapis.com/v0/b/sharyn.appspot.com/o/uploads%2FHOME_SHARYN_1908-(26).png?alt=media&token=02de9b47-eee3-4419-87f1-51f8ae7455f8",
          "id": 1
        },
        {
          "name": "DNA Sharyn",
          "des": "<p>DNA Sharyn - “trợ thủ” đắc lực trong điều trị sẹo rỗ với khả năng phục hồi lên đến 90%, ngay lập tức làn da của bạn sẽ được căng bóng, mịn màng từ sâu bên trong.&nbsp;</p>",
          "status": "Best Seller",
          "slug": "dna-sharyn",
          "price": "2.000.000 ₫",
          "image": "https://firebasestorage.googleapis.com/v0/b/sharyn.appspot.com/o/uploads%2FHOME_SHARYN_1908-(29).png?alt=media&token=def78a7e-121d-4db0-9250-ae28710f71e2",
          "id": 2
        },
        {
          "name": "HA Apoule",
          "des": "<p>“Thăng hạng” sức mạnh với công nghệ cấp nước độc quyền THẤM SÂU - KÍCH HOẠT - KHÓA ẨM, HA Ampoule serum luôn đáp ứng nhu cầu độ ẩm của mọi loại da.&nbsp;</p>",
          "status": "Promo",
          "slug": "ha-apoule",
          "price": "1.580.000 ₫",
          "image": "https://firebasestorage.googleapis.com/v0/b/sharyn.appspot.com/o/uploads%2FHOME_SHARYN_1908-(27).png?alt=media&token=4a4549b6-590a-4534-bf31-2d9770c31498",
          "id": 3
        },
        {
          "name": "Cream 4in1",
          "des": "<p>Với kết cấu mỏng nhẹ, Cream 4in1 có khả năng dưỡng trắng, cấp ẩm, chống nắng và ngăn ngừa lão hóa. Chỉ 1 phút mỗi sáng cho làn da đẹp rạng rỡ suốt ngày dài.&nbsp;</p>",
          "status": "Best Seller",
          "slug": "cream-4in1",
          "price": "1.600.000 ₫",
          "image": "https://firebasestorage.googleapis.com/v0/b/sharyn.appspot.com/o/uploads%2FHOME_SHARYN_1908-(28).png?alt=media&token=2c8829c8-cffe-4155-8874-9ed24ae02b1a",
          "id": 4
        }
      ];
    constructor(private homepageService: HomepageService) {}

    ngOnInit(): void {
        this.config = {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            freeMode: true,

            breakpoints: {
                992: {
                    spaceBetween: 20,
                    slidesPerView: 5,
                },
                320: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                },
            },
        };
        this.config1 = {
            loop: true,

            autoplay: {
                delay: 4000,

                disableOnInteraction: false,
            },
            freeMode: true,
        };
        // this.homepageService.getProduct().subscribe((res)=>{
        //     console.log(res);
            
        //     return this.products = res
        // })

        // this.initScrollTriggers();
    }
    // initScrollTriggers() {
    //     document.querySelectorAll('.box').forEach((box) => {
    //         const scrollBox = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: box,
    //                 start: 'top center',
    //                 end: 'bottom bottom',
    //                 toggleActions: 'play none none reverse',
    //             },
                
    //         });
    //         scrollBox.from(box, {
    //             y: 40,
    //             opacity: 0,
    //             duration: 0.4,
    //             ease: 'power1.inOut',
    //         });
    //         scrollBox.from('.title',{y:40, opacity:0, delay:0.1, duration:0.4}),
    //         scrollBox.from('#split-text',{y:40, opacity:0, delay:0.1, duration:0.4}),
    //         scrollBox.from('.more',{y:40, opacity:0, delay:0.1, duration:0.4})


    //     });
       
        
    // }
    
}
