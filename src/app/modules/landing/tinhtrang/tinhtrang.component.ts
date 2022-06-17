import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, FreeMode, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, FreeMode, Navigation, Autoplay]);
@Component({
    selector: 'app-tinhtrang',
    templateUrl: './tinhtrang.component.html',
    styleUrls: ['./tinhtrang.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TinhtrangComponent implements OnInit {
    @ViewChild(SwiperComponent) swiper: SwiperComponent;
    constructor() {}
    iVande = [];
    iTinhtrang: number;
    tinhtrang = [
        'Bình thường',
        'yếu - nhạy cảm',
        'lỗ chân lông to - sần vỏ cam',
    ];
    vande = [
        'mụn viêm - dầu nhờn',
        'rỗ, sẹo do mụn trứng cá, thủy đậu',
        'nám, tàn nhang, không đều màu da',
        'lão hóa, nếp nhăn, khô',
    ];
    getTinhtrang(i) {
        this.iTinhtrang = i;
    }
    swipePrev() {
        this.swiper.swiperRef.slidePrev();
    }
    swipeNext() {
        this.swiper.swiperRef.slideNext();
    }
    getVande(i) {
        if (this.iVande[i] == true) {
            this.iVande[i] = false;
        } else {
            this.iVande[i] = true;
        }
        // let a = document.querySelectorAll('.option')[i];
        // a.classList.add('bg-blue-500', 'text-white');
    }
    ngOnInit(): void {
        this.tinhtrang = [
            'Bình thường',
            'yếu - nhạy cảm',
            'lỗ chân lông to - sần vỏ cam',
        ];
        this.vande = [
            'mụn viêm - dầu nhờn',
            'rỗ, sẹo do mụn trứng cá, thủy đậu',
            'nám, tàn nhang, không đều màu da',
            'lão hóa, nếp nhăn, khô',
        ];
    }
}
