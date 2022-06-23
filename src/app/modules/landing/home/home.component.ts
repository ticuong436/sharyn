import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
  styleUrls: ['./home.component.scss'],

    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
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
            title: 'COMBO ĐIỀU TRỊ',
            parentid: 1,
            slug: 'combo-dieu-tri',
            id: 6,
        },
        {
            title: 'Giới thiệu',
            parentid: 4,
            slug: 'gioi-thieu',
            id: 7,
        },
        {
            title: 'Sharyn love skin',
            parentid: 4,
            slug: 'blog',
            id: 8,
        },
        {
            title: 'liên hệ',
            parentid: 4,
            slug: 'lien-he',
            id: 9,
        },
        
    ];
    constructor() {}
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
    goUp() {
      document.getElementById("header").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
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
    /**
     * Constructor
     */
    
    
}
