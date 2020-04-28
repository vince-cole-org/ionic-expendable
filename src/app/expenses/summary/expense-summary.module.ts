import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseSummaryPageRoutingModule } from './expense-summary-routing.module';

import { ExpenseSummaryPage } from './expense-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseSummaryPageRoutingModule
  ],
  declarations: [ExpenseSummaryPage]
})
export class ExpenseSummaryPageModule {}
