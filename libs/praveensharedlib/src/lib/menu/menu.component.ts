import { Component, Input, OnInit } from '@angular/core';

export interface IMenu{
  path:string;
  name:string;
}

@Component({
  selector: 'nxpoc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  _menus:IMenu[] = [];

  @Input()
  set menus(menu: IMenu[]){
    this._menus=menu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
