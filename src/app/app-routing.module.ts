import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'comic-details/:id',
    loadChildren: () => import('./pages/comic-details/comic-details.module').then( m => m.ComicDetailsPageModule)
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./pages/character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
