import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { FakeLoadingService } from '../../../app/shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');


  constructor(private router: Router, private loadingService: FakeLoadingService) { }

  ngOnInit(): void {
  }
  async login() {
    /*this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      this.router.navigateByUrl('/main')
    }).catch(error => {
      console.error("incorect")
    }).finally(() => {
      console.log('this is executed finally. ')
    })
*/
    try {
      const bool = await this.loadingService.loadingWithPromise(this.email.value, this.password.value)
      console.log(bool)
      //.then( (_: boolean) => {
      this.router.navigateByUrl('/main')
      //})
    }
    catch (error){
      console.error(error,"incorect")
    }
    finally{
      console.log('this is executed finally. ')
    }







  }
}
