import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityAquinatorPage } from './university-aquinator.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityAquinatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityAquinatorPageRoutingModule {}
