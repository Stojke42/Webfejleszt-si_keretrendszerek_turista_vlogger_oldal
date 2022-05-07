import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FakeLoadingService } from '../../../app/shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

    loadingSubscription?:Subscription;

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
    /*  try {
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
  */
    this.loadingSubscription = this.loadingService.loadingwithObservable(this.email.value, this.password.value).subscribe((data: boolean) => {
      console.log(data)
      

    })
   

   



  }

  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe
  }
}
