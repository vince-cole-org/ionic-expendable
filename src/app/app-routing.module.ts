import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full'
  },
  {
    path: 'expenses',
    children: [
      {
        path: '',
        loadChildren: () => import('./expenses/summary/expense-summary.module').then( m => m.ExpenseSummaryPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./expenses/create/expense-create.module').then( m => m.ExpenseCreatePageModule)
      },
      {
        path: 'detail/:expenseId',
        loadChildren: () => import('./expenses/detail/expense-detail.module').then( m => m.ExpenseDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
