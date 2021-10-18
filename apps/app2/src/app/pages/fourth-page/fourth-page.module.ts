import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainViewModule } from "../main-view/main-view.module";
import { FourthpageRoutingModule } from "./fourth-page-routing.module";
import { FourthPageComponent } from "./fourth-page.component";

@NgModule({
    declarations: [FourthPageComponent],
    imports: [
        CommonModule,
        FourthpageRoutingModule,
        MainViewModule
    ]
})
export class FourthPageModule {}