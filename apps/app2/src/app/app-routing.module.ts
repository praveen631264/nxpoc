import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        "path":"app2/third",
        loadChildren: ()=>import("./pages/third-page/third-page.module").then(m => m.ThirdPageModule)
    },
    {
        "path":"app2/fourth",
        loadChildren: ()=>import("./pages/fourth-page/fourth-page.module").then(m => m.FourthPageModule)
    },
    {
        "path":"app2",
        "redirectTo":"app2/third"
    },
    {
        "path":"third",
        "redirectTo":"app2/third"
    },
    {
        "path":"fourth",
        "redirectTo":"app2/fourth"
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}