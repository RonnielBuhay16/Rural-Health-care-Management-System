import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhwloginPage } from './bhwlogin.page';

const routes: Routes = [
  {
    path: '',
    component: BhwloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhwloginPageRoutingModule {}
