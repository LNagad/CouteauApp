import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherRDPageRoutingModule } from './weather-rd-routing.module';

import { WeatherRDPage } from './weather-rd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherRDPageRoutingModule
  ],
  declarations: [WeatherRDPage]
})
export class WeatherRDPageModule {}
