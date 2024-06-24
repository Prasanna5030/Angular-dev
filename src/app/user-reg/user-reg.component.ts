import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-reg',
  templateUrl: './user-reg.component.html',
  styleUrl: './user-reg.component.css'
})
export class UserRegComponent {

  userRegForm!:FormGroup;

  submitted:boolean= false;

  constructor(private fb: FormBuilder){
    this.userRegForm= this.fb.group({
      firstName:['', [Validators.required]],
      lastName :['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword :['', [Validators.required,Validators.minLength(8)]]
  } ,{
    validators: this.passwordMatchValidation.bind(this)
  })
  }

  passwordMatchValidation(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    return password?.value === confirmPassword?.value ? null : { passwordNotMatch: true };
  }

  
  onSubmit(){
    this.submitted=true;
    console.log(this.userRegForm);
  }

  reset=()=>{
    this.submitted=false;
    this.userRegForm.reset();
  }
}