import { Component, OnInit } from '@angular/core';
import { IMenu } from '@nxpoc/praveensharedlib';

@Component({
  selector: 'nxpoc-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  menus:IMenu[] = [];

  constructor() { }

  ngOnInit():void {
    console.log("loaded***************");
    this.menus = [
      {path:"/landing", name:"App1 Landing Page"} as IMenu,
      {path:"/second", name:"App1 Second Page"} as IMenu
    ];
  }

}
