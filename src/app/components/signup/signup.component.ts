import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  path: string = '';
  imagePreview: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      confirmPwd: [''],
      tel: [''],
      img:['']
    });
  }
  signup() {
    this.signupForm.value.role = this.path == '/inscription' ? 'user' : 'admin';
    console.log('Here object', this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
      console.log('Here response from BE', response.msg);
    });
  }

  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      console.log("Here selected file", file);
      this.signupForm.patchValue({ img: file });
      this.signupForm.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
