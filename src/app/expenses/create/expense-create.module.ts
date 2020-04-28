import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseCreatePageRoutingModule } from './expense-create-routing.module';

import { ExpenseCreatePage } from './expense-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseCreatePageRoutingModule
  ],
  declarations: [ExpenseCreatePage]
})
export class ExpenseCreatePageModule {}
