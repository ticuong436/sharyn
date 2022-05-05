import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaivietService } from './baiviet.service';

@Component({
  selector: 'app-baiviet',
  templateUrl: './baiviet.component.html',
  styleUrls: ['./baiviet.component.scss']
})
export class BaivietComponent implements OnInit {
  baivietForm:FormGroup
  constructor(private baivietService: BaivietService, private fb: FormBuilder) { }

  onSubmit(){
    
  }

  ngOnInit(): void {
    this.baivietForm = this.fb.group({
      title: [''],
      des: [''],
      content: [''],
      slug:[''],
      Loaibaiviet:[0],
      thumbimage:[''],
  });
  }

}
