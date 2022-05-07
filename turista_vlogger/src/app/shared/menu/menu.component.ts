import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() selctedPage: EventEmitter<string> = new EventEmitter();


  constructor() { 
    console.log("construktor called");

  }

  ngOnInit(): void {
    console.log("init called");
  }

  ngAfterViewInit():void{
    console.log("ngavi called");

  }

  menuSwitch(pageValue:string){
    this.selctedPage.emit(pageValue);
  }


}
