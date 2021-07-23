import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfTubercolosisPage } from './sf-tubercolosis.page';

const routes: Routes = [
  {
    path: '',
    component: SfTubercolosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfTubercolosisPageRoutingModule {}
