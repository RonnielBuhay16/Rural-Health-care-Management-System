import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccPage } from './user-acc.page';

const routes: Routes = [
  {
    path: '',
    component: UserAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccPageRoutingModule {}
