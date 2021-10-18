import { Component } from '@angular/core';
import { IMenu } from '@nxpoc/praveensharedlib';

@Component({
  selector: 'nxpoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nxpocsample';
  menus:IMenu[] = [];

  ngOnInit():void {
    this.menus = [
      {path:"app1", name:"App1"} as IMenu,
      {path:"app2", name:"App2"} as IMenu
    ];
  }
}
