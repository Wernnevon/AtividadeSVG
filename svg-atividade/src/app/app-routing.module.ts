import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipioComponent } from './pages/municipio/municipio.component';


const routes: Routes = [
  { path: '', component: MunicipioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
