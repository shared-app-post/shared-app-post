import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path: 'pruebas', component: PruebasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
