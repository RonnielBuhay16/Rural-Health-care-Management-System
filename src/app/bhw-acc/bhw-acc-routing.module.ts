import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhwAccPage } from './bhw-acc.page';

const routes: Routes = [
  {
    path: '',
    component: BhwAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhwAccPageRoutingModule {}
