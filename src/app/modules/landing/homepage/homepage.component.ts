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
    products;
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
        this.homepageService.getProduct().subscribe((res)=>{
            console.log(res);
            
            return this.products = res
        })

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
