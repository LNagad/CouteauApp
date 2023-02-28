import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gender-aquinator',
    loadChildren: () => import('./gender-aquinator/gender-aquinator.module').then( m => m.GenderAquinatorPageModule)
  },
  {
    path: 'age-aquinator',
    loadChildren: () => import('./age-aquinator/age-aquinator.module').then( m => m.AgeAquinatorPageModule)
  },
  {
    path: 'university-aquinator',
    loadChildren: () => import('./university-aquinator/university-aquinator.module').then( m => m.UniversityAquinatorPageModule)
  },
  {
    path: 'weather-rd',
    loadChildren: () => import('./weather-rd/weather-rd.module').then( m => m.WeatherRDPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
