import { Injectable } from '@angular/core';
import { Observable, subscribeOn, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() {

    // Create update read delete



  }
  // callback nem jo  promise observable
  loadingWithPromise(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, rejects) => {


      let i = 0;
      setTimeout(() => {

        if (email === "test@gmail.com" && password === "test") {
          resolve(true);
        }
        else {

          rejects(false)
        }


      }, 3000);

    });

  }

  loadingwithObservable(email: string, password: string): Observable<boolean> {
    return new Observable((Subscriber: Subscriber<boolean>) => {
      let i = 0
      const intervalum = setInterval(() => {
        i++
        //Subscriber.next(i)
        if (i === 3) {
          if (email === "test@gmail.com" && password === "test") {
            Subscriber.next(true);
            Subscriber.complete()
          }
          else {
  
            Subscriber.next(false)
          }
        }

      },1000)


    })
  }




}
