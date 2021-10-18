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
    this.menus = [
      {path:"/third", name:"App2 Landing Page"} as IMenu,
      {path:"/fourth", name:"App2 Second Page"} as IMenu
    ];
  }

}
