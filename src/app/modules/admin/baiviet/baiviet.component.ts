import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaivietService } from './baiviet.service';
import * as customBuild from '../../ckCustomBuild/build/ckEditor'
@Component({
  selector: 'app-baiviet',
  templateUrl: './baiviet.component.html',
  styleUrls: ['./baiviet.component.scss']
})
export class BaivietComponent implements OnInit {
  baivietForm:FormGroup
  public Editor: customBuild

  constructor(private baivietService: BaivietService, private fb: FormBuilder) { 

    this.Editor = customBuild
  }
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
