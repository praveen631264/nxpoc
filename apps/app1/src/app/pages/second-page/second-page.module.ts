import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainViewModule } from "../main-view/main-view.module";
import { landingpageRoutingModule } from "./second-page-routing.module";
import { SecondPageComponent } from "./second-page.component";

@NgModule({
    declarations: [SecondPageComponent],
    imports: [
        CommonModule,
        landingpageRoutingModule,
        MainViewModule
    ]
})
export class SecondPageModule {}