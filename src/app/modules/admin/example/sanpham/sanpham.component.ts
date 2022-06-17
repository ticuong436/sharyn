import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as customBuild from '../../../ckCustomBuild/build/ckEditor';
import { SanphamService } from './sanpham.service';
import { FileUploadService } from '../../service/file-upload.service';
import { FileUpload } from '../../models/file-upload.model';
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
    products: any[];
    percentage = 0;
    thumb = {};
    i = 0;
    constructor(
        private fb: FormBuilder,
        private sanphamService: SanphamService,
        private uploadService: FileUploadService
    ) {}
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

    onSubmit() {
        this.productList.get('image').setValue(this.thumb);
        this.sanphamService
            .postProduct(this.productList.value)
            .subscribe((res) => alert('Tạo sản phẩm thành công'));
    }

    selectProductID(id) {
        this.productList.addControl('id', new FormControl(id));
        console.log(this.productList.value);
    }

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }
    onUpdate() {
        this.sanphamService
            .updateProduct(this.productList.value)
            .subscribe((res) => alert('Cập nhật thành công'));
    }
    onDelete(){
      // this.sanphamService.
    }
    upload(): void {
        this.i++;

        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0);
            this.selectedFiles = undefined;
            if (file) {
                this.currentFileUpload = new FileUpload(file);
                this.uploadService
                    .pushFileToStorage(this.currentFileUpload)
                    .subscribe(
                        (percentage) => {
                            this.percentage = Math.round(
                                percentage ? percentage : 0
                            );
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        }
        this.uploadService._thumb$.subscribe((res) => {
            console.log(this.i);
            let a = {};
            a[this.i] = res;

            Object.assign(this.thumb, a);
            console.log(this.thumb);
        });
    }
    onSelect(e) {
        this.productList.get('status').setValue(e);
    }
    resetForm() {
        this.productList = this.fb.group({
            name: [''],
            des: [''],
            status: [''],
            khoiluong: [''],
            slug: [''],
            price: [''],
            oldprice: [''],
            image: [''],
            type: [''],
        });
    }

    ngOnInit(): void {
        this.resetForm();
        this.sanphamService.getProduct().subscribe();
        this.sanphamService.products$.subscribe((res) => (this.products = res));
        this.uploadService
            .getFiles(1)
            .snapshotChanges()
            .pipe(
                map((changes) =>
                    // store the key
                    changes.map((c) => ({
                        key: c.payload.key,
                        ...c.payload.val(),
                    }))
                )
            )
            .subscribe((fileUploads) => {
                // this.fileUploads = fileUploads.reverse();
                // console.log(fileUploads);
                return fileUploads;
            });
    }
}
