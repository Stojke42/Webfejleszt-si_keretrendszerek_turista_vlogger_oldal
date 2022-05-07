import { Injectable } from '@angular/core';

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

}
