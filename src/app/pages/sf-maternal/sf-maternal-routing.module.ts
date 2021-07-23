import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfMaternalPage } from './sf-maternal.page';

const routes: Routes = [
  {
    path: '',
    component: SfMaternalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfMaternalPageRoutingModule {}
