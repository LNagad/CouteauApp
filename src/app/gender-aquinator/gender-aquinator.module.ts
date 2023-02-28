import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenderAquinatorPageRoutingModule } from './gender-aquinator-routing.module';

import { GenderAquinatorPage } from './gender-aquinator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenderAquinatorPageRoutingModule
  ],
  declarations: [GenderAquinatorPage]
})
export class GenderAquinatorPageModule {}
