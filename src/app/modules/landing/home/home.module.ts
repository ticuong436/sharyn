import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { HomepageComponent } from '../homepage/homepage.component';
import { ChinhsachThanhtoanComponent } from '../chinhsach-thanhtoan/chinhsach-thanhtoan.component';
import { ChinhsachBaomatComponent } from '../chinhsach-baomat/chinhsach-baomat.component';
import { ChinhsachMuabanComponent } from '../chinhsach-muaban/chinhsach-muaban.component';
import { ChinhsachTrahangComponent } from '../chinhsach-trahang/chinhsach-trahang.component';
import { MaterialExampleModule } from 'material.example';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { BlogComponent } from '../blog/blog.component';
import { SanphamChitietComponent } from '../sanpham/sanpham-chitiet/sanpham-chitiet.component';
import { ThanhphanComponent } from '../sanpham/sanpham-chitiet/thanhphan/thanhphan.component';
import { HieuquaComponent } from '../sanpham/sanpham-chitiet/hieuqua/hieuqua.component';
import { CachsudungComponent } from '../sanpham/sanpham-chitiet/cachsudung/cachsudung.component';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
import { DanhgiaComponent } from '../sanpham/sanpham-chitiet/danhgia/danhgia.component';
import { ComboDieuTriComponent } from '../combo-dieu-tri/combo-dieu-tri.component';
import { CurrencyPipe } from '@angular/common';
import { CustomModule } from '../custom/custom.module';
import { KhamdaonlineComponent } from '../khamdaonline/khamdaonline.component';
import { TinhtrangComponent } from '../tinhtrang/tinhtrang.component';
import { KetquatuvanComponent } from '../ketquatuvan/ketquatuvan.component';
import { LienheComponent } from '../lienhe/lienhe.component';
import { GiohangComponent } from '../giohang/giohang.component';
import { SigninComponent } from '../signin/signin.component';
import { BannerFormComponent } from '../components/banner-form/banner-form.component';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

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
        SanphamChitietComponent,
        ThanhphanComponent,
        HieuquaComponent,
        CachsudungComponent,
        DanhgiaComponent,
        ComboDieuTriComponent,
        KhamdaonlineComponent,
        TinhtrangComponent,
        KetquatuvanComponent,
        LienheComponent,
        GiohangComponent,
        SigninComponent,
        BannerFormComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'de-DE',
        },
        CurrencyPipe,
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        SwiperModule,
        MaterialExampleModule,
        CustomModule,
    ],
})
export class LandingHomeModule {}
