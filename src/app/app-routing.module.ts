import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { WeathercomponentComponent } from './weathercomponent/weathercomponent.component';

const routes: Routes = [
  //{path: "/" , component : WeathercomponentComponent} exemple de route pour le routing .
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
