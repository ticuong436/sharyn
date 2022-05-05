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
    ngOnInit(): void {
        this.headerService.getMenu().subscribe((dataMenu) => {
            this.menu = nest(dataMenu);
            console.log(this.menu);

            // const datas= this.items.concat(data)
        });
        const nest = (items, id = '', link = 'parentid') =>
            items
                .filter((item) => item[link] == id)
                .map((item) => ({
                    ...item,
                    children: nest(items, item.id),
                }));
    }
}
