import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
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
  exports: [
  ],
})
export class AppModule {}

@NgModule({})
export class App1SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: AppModule,
          providers: []
        }
      }
}
