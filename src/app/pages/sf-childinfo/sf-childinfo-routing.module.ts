import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfChildinfoPage } from './sf-childinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SfChildinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfChildinfoPageRoutingModule {}
