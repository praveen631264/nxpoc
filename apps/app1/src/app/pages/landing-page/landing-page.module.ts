import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainViewModule } from "../main-view/main-view.module";
import { landingpageRoutingModule } from "./landing-page-routing.module";
import { LandingPageComponent } from "./landing-page.component";

@NgModule({
    declarations: [LandingPageComponent],
    imports: [
        CommonModule,
        landingpageRoutingModule,
        MainViewModule
    ]
})
export class LandingPageModule {}