import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhgia',
  templateUrl: './danhgia.component.html',
  styleUrls: ['./danhgia.component.scss']
})
export class DanhgiaComponent implements OnInit {
  config;
  constructor() { }

  ngOnInit(): void {
    this.config={
      loop:true,
    }
  }

}
