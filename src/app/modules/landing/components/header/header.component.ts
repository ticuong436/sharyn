import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isShow = true;
    timedOutCloser;
    menu;
    menuData = [
        {
            title: 'CỬA HÀNG',
            parentid: '',
            slug: 'cua-hang',
            id: 1,
        },
        {
            title: 'SẢN PHẨM',
            parentid: 1,
            slug: 'san-pham',
            id: 3,
        },
        
        {
            title: 'VỀ SHARYN',
            parentid: '',
            slug: 'blog',
            id: 4,
        },
        {
            title: 'KHÁM DA ONLINE',
            parentid: '',
            slug: 'kham-da',
            id: 5,
        },
        {
            title: 'COMPO ĐIỀU TRỊ',
            parentid: 1,
            slug: 'combo-dieu-tri',
            id: 6,
        },
        
    ];
    constructor(private headerService: HeaderService) {}
    toggleMenu() {
        this.timedOutCloser = setTimeout(() => {
            this.isShow = !this.isShow;
        }, 150);
    }
    mouseEnter(trigger) {
        if (this.timedOutCloser) {
            clearTimeout(this.timedOutCloser);
        }
        trigger.openMenu();
    }

    mouseLeave(trigger) {
        this.timedOutCloser = setTimeout(() => {
            trigger.closeMenu();
        }, 150);
    }
    mouseRemove(trigger) {
        this.timedOutCloser = setTimeout(() => {
            trigger.closeMenu();
        }, 150);
    }
     nest(items, id = '', link = 'parentid'){
        return items
            .filter((item) => item[link] == id)
            .map((item) => ({
                ...item,
                children: this.nest(items, item.id),
            }));
        }
   
    ngOnInit(): void {
        // this.headerService.getMenu().subscribe((dataMenu) => {
        //     this.menu = nest(dataMenu);
        //     console.log(this.menu);

        // });
        this.menu = this.nest(this.menuData)
        console.log(this.menu);
        
        const nest = (items, id = '', link = 'parentid') =>
            items
                .filter((item) => item[link] == id)
                .map((item) => ({
                    ...item,
                    children: nest(items, item.id),
                }));
            
       
    }
}
