import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'bhwlogin',
    loadChildren: () => import('./pages/bhwlogin/bhwlogin.module').then( m => m.BhwloginPageModule)
  },
  {
    path: 'user-acc',
    loadChildren: () => import('./user-acc/user-acc.module').then( m => m.UserAccPageModule)
  },

  {
    path: 'bhwmainscreen',
    loadChildren: () => import('./bhwmainscreen/bhwmainscreen.module').then( m => m.BhwmainscreenPageModule)
  },
  {
    path: 'sf-childinfo',
    loadChildren: () => import('./pages/sf-childinfo/sf-childinfo.module').then( m => m.SfChildinfoPageModule)
  },
  {
    path: 'sf-covidcases',
    loadChildren: () => import('./pages/sf-covidcases/sf-covidcases.module').then( m => m.SfCovidcasesPageModule)
  },
  {
    path: 'sf-denguecases',
    loadChildren: () => import('./pages/sf-denguecases/sf-denguecases.module').then( m => m.SfDenguecasesPageModule)
  },
  {
    path: 'sf-tubercolosis',
    loadChildren: () => import('./pages/sf-tubercolosis/sf-tubercolosis.module').then( m => m.SfTubercolosisPageModule)
  },
  {
    path: 'sf-adultinformation',
    loadChildren: () => import('./pages/sf-adultinformation/sf-adultinformation.module').then( m => m.SfAdultinformationPageModule)
  },
  {
    path: 'sf-household',
    loadChildren: () => import('./pages/sf-household/sf-household.module').then( m => m.SfHouseholdPageModule)
  },
  {
    path: 'sf-maternal',
    loadChildren: () => import('./pages/sf-maternal/sf-maternal.module').then( m => m.SfMaternalPageModule)
  },

  {
    path: 'bhw-acc',
    loadChildren: () => import('./bhw-acc/bhw-acc.module').then( m => m.BhwAccPageModule)
  },
  {
    path: 'welcomescreen',
    loadChildren: () => import('./welcomescreen/welcomescreen.module').then( m => m.WelcomescreenPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
