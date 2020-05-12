import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseCreatePageRoutingModule } from './expense-create-routing.module';

import { ExpenseCreatePage } from './expense-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ExpenseCreatePageRoutingModule
  ],
  declarations: [ExpenseCreatePage]
})
export class ExpenseCreatePageModule {}
