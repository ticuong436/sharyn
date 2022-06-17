import { Route } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { ChinhsachBaomatComponent } from '../chinhsach-baomat/chinhsach-baomat.component';
import { ChinhsachMuabanComponent } from '../chinhsach-muaban/chinhsach-muaban.component';
import { ChinhsachThanhtoanComponent } from '../chinhsach-thanhtoan/chinhsach-thanhtoan.component';
import { ChinhsachTrahangComponent } from '../chinhsach-trahang/chinhsach-trahang.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { BlogComponent } from '../blog/blog.component';
import { SanphamChitietComponent } from '../sanpham/sanpham-chitiet/sanpham-chitiet.component';
import { ComboDieuTriComponent } from '../combo-dieu-tri/combo-dieu-tri.component';
import { KhamdaonlineComponent } from '../khamdaonline/khamdaonline.component';
import { TinhtrangComponent } from '../tinhtrang/tinhtrang.component';
import { KetquatuvanComponent } from '../ketquatuvan/ketquatuvan.component';
import { LienheComponent } from '../lienhe/lienhe.component';
import { GiohangComponent } from '../giohang/giohang.component';
import { SigninComponent } from '../signin/signin.component';

export const landingHomeRoutes: Route[] = [
    {
        path: '',
        component: LandingHomeComponent,
        children: [
            { path: '', component: HomepageComponent },
            { path: 'chinh-sach-bao-mat', component: ChinhsachBaomatComponent },
            {
                path: 'chinh-sach-thanh-toan',
                component: ChinhsachThanhtoanComponent,
            },
            { path: 'chinh-sach-mua-ban', component: ChinhsachMuabanComponent },
            {
                path: 'chinh-sach-tra-hang',
                component: ChinhsachTrahangComponent,
            },
            { path: 'san-pham', component: SanphamComponent },
            { path: 'san-pham/:slug', component: SanphamChitietComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'combo-dieu-tri', component: ComboDieuTriComponent },
            { path: 'kham-da', component: KhamdaonlineComponent },
            { path: 'tinhtrang', component: TinhtrangComponent },
            { path: 'ket-qua-tu-van', component: KetquatuvanComponent },
            {
                path: 'lien-he',
                component: LienheComponent,
            },
            { path: 'giohang', component: GiohangComponent },
            { path: 'dang-nhap', component: SigninComponent },
        ],
    },
];
