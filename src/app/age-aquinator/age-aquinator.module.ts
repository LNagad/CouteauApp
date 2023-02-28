import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgeAquinatorPageRoutingModule } from './age-aquinator-routing.module';

import { AgeAquinatorPage } from './age-aquinator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeAquinatorPageRoutingModule
  ],
  declarations: [AgeAquinatorPage]
})
export class AgeAquinatorPageModule {}
