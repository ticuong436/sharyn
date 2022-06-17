import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SanphamchitietService } from './sanphamchitiet.service';
import * as customBuild from '../../../ckCustomBuild/build/ckEditor';
import { map } from 'rxjs';
import { FileUpload } from '../../models/file-upload.model';
import { FileUploadService } from '../../service/file-upload.service';
import { MyUploadAdapter } from '../../MyUploadAdapter';
import { SanphamService } from '../sanpham/sanpham.service';
import { ThemesanphamchitietService } from './themesanphamchitiet/themesanphamchitiet.service';

@Component({
    selector: 'app-sanphamchitiet',
    templateUrl: './sanphamchitiet.component.html',
    styleUrls: ['./sanphamchitiet.component.scss'],
})
export class SanphamchitietComponent implements OnInit {
    fileUploads?: any[];
    public html: string;
    selectedFiles?: FileList;
    currentFileUpload?: FileUpload;
    percentage = 0;
    inforImage: any;
    products: any[];
    sanphamchitiet: any[];
    themes: any[];
    theme: any;
    message: 'chon theme';
    sanphamchitietForm: FormGroup;
    selectTheme: any;
    menu: any[];
    loader;
    idSelect;
    thumb;
    public Editor: customBuild;

    public config = {
        htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                },
            ],
        },
    };

    public componentEvents: string[] = [];
    upload(): void {
        if (this.selectedFiles) {
            const file: File | null = this.selectedFiles.item(0);
            this.selectedFiles = undefined;
            if (file) {
                this.currentFileUpload = new FileUpload(file);
                console.log(this.currentFileUpload);

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
    }

    constructor(
        private _sanphamchitietService: SanphamchitietService,
        private fb: FormBuilder,
        private uploadService: FileUploadService,
        private _sanphamService: SanphamService,
        private _themesanphamchitietService: ThemesanphamchitietService
    ) {
        this.html = '';
        this.Editor = customBuild;
    }
    onSubmit() {
        this.sanphamchitietForm.removeControl('id');
        this._sanphamchitietService
            .postSanphamchitiet(this.sanphamchitietForm.value)
            .subscribe((res) => alert('Tạo nội dung thành công'));
        this.resetForm();
    }
    onSelect(item) {
        this.sanphamchitietForm.get('content').setValue(item.content);
        this.sanphamchitietForm.get('title').setValue(item.title);
    }

    onSelectSanphamchitiet(item) {
        this.sanphamchitietForm.get('idProduct').setValue(item.id);

        let a = this.sanphamchitiet.find((x) => {
            if (item?.id == x?.idProduct) {
                console.log(x);

                console.log(x.id);
                this.idSelect = x.id;

                this.sanphamchitietForm.get('gioithieu').setValue(x.gioithieu);
                this.sanphamchitietForm.get('thanhphan').setValue(x.thanhphan);
                // this.sanphamchitietForm.get('danhgia').setValue(x.danhgia);
                this.sanphamchitietForm.get('hieuqua').setValue(x.hieuqua);

                this.sanphamchitietForm.get('id').setValue(x.id);
                this.sanphamchitietForm
                    .get('cachsudung')
                    .setValue(x.cachsudung);
                return this.sanphamchitietForm.value;
            } else {
                this.resetForm();
            }
        });

        // this.sanphamchitietForm
        //     .get('LoaiSanphamchitiet')
        //     .setValue(item.LoaiSanphamchitiet);
        // this.sanphamchitietForm.get('thumbimage').setValue(item.thumbimage);

        // this.thumb = item.thumbimage;
    }
    onSelectThemesanphamchitiet(item) {
        console.log(item);
        
        this.sanphamchitietForm.get('gioithieu').setValue(item.gioithieu);
        this.sanphamchitietForm.get('thanhphan').setValue(item.thanhphan);
        this.sanphamchitietForm.get('hieuqua').setValue(item.hieuqua);

        this.sanphamchitietForm.get('cachsudung').setValue(item.cachsudung);
    }

    deleteSanphamchitiet() {
        alert('Xóa bài thành công');
        this._sanphamchitietService
            .deleteSanphamchitiet(this.idSelect)
            .subscribe();
    }
    updateSanphamchitiet() {
        console.log(this.sanphamchitietForm.value);

        this._sanphamchitietService
            .updateSanphamchitiet(this.sanphamchitietForm.value)
            .subscribe((res) => alert('Cập nhật thành công'));
        this.resetForm();
    }

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }

    public onReady(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            console.log(loader);

            return new MyUploadAdapter(loader, this.uploadService);
        };

        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            );
    }
    resetForm() {
        this.sanphamchitietForm = this.fb.group({
            id: [''],
            gioithieu: [''],
            thanhphan: [''],
            hieuqua: [''],
            cachsudung: [''],
            idProduct: [0],
        });
    }
    ngOnInit(): void {
        this.resetForm();
        this._sanphamService.getProduct().subscribe();

        this._sanphamService.products$.subscribe((res) => {
            return (this.products = res);
        });

        this._themesanphamchitietService.getThemeSanphamchitiet().subscribe();
        this._themesanphamchitietService.themes$.subscribe(
            (res) => (this.themes = res)
        );
        this._sanphamchitietService.getSanphamchitiet().subscribe();
        this._sanphamchitietService.sanphamchitiets$.subscribe(
            (res) => (this.sanphamchitiet = res)
        );

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
                this.fileUploads = fileUploads.reverse();
                // console.log(fileUploads);
            });
        this.uploadService._thumb$.subscribe((res) => {
            if (res) {
                this.sanphamchitietForm.get('thumbimage').setValue(res);
            }
        });
    }
}
