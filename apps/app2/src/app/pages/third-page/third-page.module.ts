import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainViewModule } from "../main-view/main-view.module";
import { thirdpageRoutingModule } from "./third-page-routing.module";
import { ThirdPageComponent } from "./third-page.component";

@NgModule({
    declarations: [ThirdPageComponent],
    imports: [
        CommonModule,
        thirdpageRoutingModule,
        MainViewModule
    ]
})
export class ThirdPageModule {}