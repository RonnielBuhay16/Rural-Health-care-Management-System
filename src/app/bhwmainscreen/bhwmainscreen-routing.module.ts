import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhwmainscreenPage } from './bhwmainscreen.page';

const routes: Routes = [
  {
    path: '',
    component: BhwmainscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhwmainscreenPageRoutingModule {}
