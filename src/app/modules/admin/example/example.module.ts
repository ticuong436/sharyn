import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MenuComponent } from '../menu/menu.component';
import { MaterialExampleModule } from 'material.example';
import { CommonModule } from '@angular/common';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {BaivietComponent} from '../baiviet/baiviet.component'
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent,
        children:[
            {path:'menu', component:MenuComponent},
            {path:'san-pham', component:SanphamComponent},
            {path:'bai-viet', component:BaivietComponent},


        ]
        
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        MenuComponent,
        SanphamComponent,
        BaivietComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MaterialExampleModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule
    ]
})
export class ExampleModule
{
}
