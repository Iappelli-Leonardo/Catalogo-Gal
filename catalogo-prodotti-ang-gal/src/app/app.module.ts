import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CountPageComponent } from './count-page/count-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormPanelComponent } from './form-panel/form-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CountPageComponent,
    SearchPageComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
