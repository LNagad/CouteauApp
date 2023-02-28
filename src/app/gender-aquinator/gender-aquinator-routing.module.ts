import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenderAquinatorPage } from './gender-aquinator.page';

const routes: Routes = [
  {
    path: '',
    component: GenderAquinatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenderAquinatorPageRoutingModule {}
