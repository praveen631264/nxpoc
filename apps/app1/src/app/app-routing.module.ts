import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        "path":"app1/landing",
        loadChildren: ()=>import("./pages/landing-page/landing-page.module").then(m => m.LandingPageModule)
    },
    {
        "path":"app1/second",
        loadChildren: ()=>import("../../../app1/src/app/pages/second-page/second-page.module").then(m => m.SecondPageModule)
    },
    {
        "path":"app1",
        loadChildren: ()=>import("../../../app1/src/app/pages/main-view/main-view.module").then(m => m.MainViewModule)
    },
    {
        "path":"landing",
        "redirectTo":"app1/landing"
    },
    {
        "path":"second",
        "redirectTo":"app1/second"
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}