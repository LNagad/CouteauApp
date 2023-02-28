import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgeAquinatorPage } from './age-aquinator.page';

const routes: Routes = [
  {
    path: '',
    component: AgeAquinatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeAquinatorPageRoutingModule {}
