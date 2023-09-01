import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PostComponent } from './post/post.component';
import { ComentsComponent } from './coments/coments.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path: 'pruebas', component: ComentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
