import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-khamdaonline',
    templateUrl: './khamdaonline.component.html',
    styleUrls: ['./khamdaonline.component.scss'],
})
export class KhamdaonlineComponent implements OnInit {
    submitted = null;
    userAddressValidations: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router) {}
    phoneRegex =
        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    ngOnInit(): void {
        this.userAddressValidations = this.formBuilder.group({
            mobile: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern(this.phoneRegex),
                ]),
            ],
        });
    }
    onSubmit() {
        console.log(this.submitted);
        if (this.userAddressValidations.invalid == true) {
            this.submitted = false;
        } else {
            this.submitted = true;
            this.router.navigate(['./tinhtrang']);
        }
    }
}
