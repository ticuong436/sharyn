import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SwiperModule } from "swiper/angular";
import { HomepageComponent } from '../homepage/homepage.component';
import { ChinhsachThanhtoanComponent } from '../chinhsach-thanhtoan/chinhsach-thanhtoan.component';
import { ChinhsachBaomatComponent } from '../chinhsach-baomat/chinhsach-baomat.component';
import { ChinhsachMuabanComponent } from '../chinhsach-muaban/chinhsach-muaban.component';
import { ChinhsachTrahangComponent } from '../chinhsach-trahang/chinhsach-trahang.component';
import { MaterialExampleModule } from 'material.example';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { BlogComponent } from '../blog/blog.component';
import { SanphamChitietComponent } from '../sanpham/sanpham-chitiet/sanpham-chitiet.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        CarouselComponent,
        HeaderComponent,
        FooterComponent,
        HomepageComponent,
        ChinhsachThanhtoanComponent,
        ChinhsachBaomatComponent,
        ChinhsachMuabanComponent,
        ChinhsachTrahangComponent,
        SanphamComponent,
        BlogComponent,
        SanphamChitietComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        SwiperModule,
        MaterialExampleModule,

    ]
})
export class LandingHomeModule
{
}
