import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MaterialExampleModule } from 'material.example';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MenuComponent } from './menu/menu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { BaivietComponent } from './baiviet/baiviet.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { SanphamchitietComponent } from './sanphamchitiet/sanphamchitiet.component';
import { ThemesanphamchitietComponent } from './sanphamchitiet/themesanphamchitiet/themesanphamchitiet.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
        children: [
            { path: 'menu', component: MenuComponent },
            { path: 'san-pham', component: SanphamComponent },
            { path: 'bai-viet', component: BaivietComponent },
            { path: 'danh-muc', component: DanhmucComponent },
            { path: 'sanphamchitiet', component: SanphamchitietComponent },
            {
                path: 'themesanphamchitiet',
                component: ThemesanphamchitietComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        ExampleComponent,
        MenuComponent,
        SanphamComponent,
        BaivietComponent,
        DanhmucComponent,
        SanphamchitietComponent,
        ThemesanphamchitietComponent,
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MaterialExampleModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
    ],
})
export class ExampleModule {}
