import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountPageComponent } from './count-page/count-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "count-page", component: CountPageComponent },
  { path: "search-page", component: SearchPageComponent },
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
