import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherRDPage } from './weather-rd.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherRDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRDPageRoutingModule {}
