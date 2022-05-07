import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location) { }

  ngOnInit(): void {
  }



  goBack() {
    this.location.back();
  }
  onSubmit() {
    console.log(this.signupForm.value);
  }
}
