import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseSummaryPage } from './expense-summary.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseSummaryPageRoutingModule {}
