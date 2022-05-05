import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as customBuild from '../../ckCustomBuild/build/ckEditor';
import {SanphamService} from './sanpham.service'
import {FileUploadService} from '../service/file-upload.service';
import {FileUpload} from '../models/file-upload.model';
import { map } from 'rxjs';

@Component({
    selector: 'app-sanpham',
    templateUrl: './sanpham.component.html',
    styleUrls: ['./sanpham.component.scss'],
})
export class SanphamComponent implements OnInit {
    productList: FormGroup;
    selectedFiles?: FileList;
    currentFileUpload?: FileUpload;
    percentage = 0;
    thumb
    constructor(private fb: FormBuilder, private sanphamService:SanphamService, private uploadService: FileUploadService) {}
    public Editor = customBuild;
    public config = {
        // htmlSupport: {
        //     allow: [
        //         {
        //             name: /.*/,
        //             attributes: true,
        //             classes: true,
        //         },
        //     ],
        // },
    };

    onSubmit(){
      let price = this.productList.get('price').value
      let priceFormat =new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
      console.log(price);
      
      console.log(priceFormat);
      
      this.productList.get('price').setValue(priceFormat)
      this.sanphamService.postProduct(this.productList.value).subscribe()
      alert('Tạo sản phẩm thành công')
    }

    selectFile(event: any): void {
      this.selectedFiles = event.target.files;

    }
    updateProduct() {
      alert('Cập nhật thành công');

      this.sanphamService.updateProduct(this.productList.value).subscribe();
  }
    upload(): void {
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        if (file) {
          this.currentFileUpload = new FileUpload(file);
          this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
            percentage => {
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    }
    onSelect(e){
      this.productList.get('status').setValue(e)
    }

    ngOnInit(): void {
        this.productList = this.fb.group({
            name: [''],
            des: [''],
            status: [''],
            slug: [''],
            price: [''],
            image: [''],
        });

        this.uploadService.getFiles(1).snapshotChanges().pipe(
            map(changes =>
              // store the key
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe(fileUploads => {
            // this.fileUploads = fileUploads.reverse();
            console.log(fileUploads);
            return fileUploads;
            
          });
          this.uploadService._thumb$.subscribe((res)=>{
              this.thumb = res
              this.productList.get('image').setValue(res);

              
          })
        
    }
}
