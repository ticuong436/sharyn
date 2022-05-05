import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CarouselComponent implements OnInit {
  config;
  constructor() { }

  ngOnInit(): void {
    this.config={
      loop:true,
      speed:1000,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
    }
  }

}
