import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityAquinatorPageRoutingModule } from './university-aquinator-routing.module';

import { UniversityAquinatorPage } from './university-aquinator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityAquinatorPageRoutingModule
  ],
  declarations: [UniversityAquinatorPage]
})
export class UniversityAquinatorPageModule {}
