import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfDenguecasesPage } from './sf-denguecases.page';

const routes: Routes = [
  {
    path: '',
    component: SfDenguecasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfDenguecasesPageRoutingModule {}
