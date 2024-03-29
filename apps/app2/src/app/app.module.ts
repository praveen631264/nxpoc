import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewModule } from './pages/main-view/main-view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class App2SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: AppModule,
          providers: []
        }
      }
}