import { ExpenseService } from './../expense.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Expense } from '../expense.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.page.html',
  styleUrls: ['./expense-summary.page.scss'],
})

export class ExpenseSummaryPage implements OnInit, OnDestroy {
  expenses: Expense[];
  sumTotal: number;
  private expensesSub: Subscription;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {     
    this.expensesSub = this.expenseService.getAllExpenses().subscribe(expenses => {
      this.expenses = expenses;
      this.sumTotal = 0;
      for (let i=0; i<this.expenses.length; i++) {
        this.sumTotal += this.expenses[i].value;
      }
    });
  }

  ngOnDestroy() {
    if (this.expensesSub) {
      this.expensesSub.unsubscribe();
    }    
  }

}
