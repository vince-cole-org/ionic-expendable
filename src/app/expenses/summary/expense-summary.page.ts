import { ExpenseService } from './../expense.service';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.page.html',
  styleUrls: ['./expense-summary.page.scss'],
})

export class ExpenseSummaryPage implements OnInit {
  expenses: Expense[];
  sumTotal: number;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.expenses = this.expenseService.getAllExpenses();
    this.sumTotal = 0;
    for (let i=0; i<this.expenses.length; i++) {
      this.sumTotal += this.expenses[i].value;
    }
  }

}
