import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FourthPageComponent } from "./fourth-page.component";

const routes: Routes = [
    {
        'path':'',
        component:FourthPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FourthpageRoutingModule {}