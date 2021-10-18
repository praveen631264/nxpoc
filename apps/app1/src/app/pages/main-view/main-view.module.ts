import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PraveensharedlibModule } from "@nxpoc/praveensharedlib";
import { MainViewRoutingModule } from "./main-view-routing.module";
import { MainViewComponent } from "./main-view.component";

@NgModule({
    declarations: [MainViewComponent],
    imports: [
        CommonModule,
        MainViewRoutingModule,
        PraveensharedlibModule
    ],
    exports: [
        MainViewComponent
    ]
})
export class MainViewModule {}