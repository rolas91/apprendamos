import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsListPage } from './kids-list.page';

const routes: Routes = [
  {
    path: '',
    component: KidsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsListPageRoutingModule {}
