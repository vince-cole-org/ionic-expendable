import { Injectable } from '@angular/core';
import { Expense } from './expense.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenses: Expense[] = [{
    id: 'asfdtasfdta',
    timestamp: '0000-00-00T00:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1558981001-792f6c0d5068',
    value: 0
  }];

  constructor() { }

  public newExpense() {
    return {
      id: uuidv4(),
      timestamp: (new Date()).toISOString(),
      imageUrl: '',
      value: 0
    };
  }

  public getAllExpenses() {
    return [...this.expenses];
  }

  public getExpense(expenseId: string) {
    return {
      ...this.expenses.find( expense => {
        return expense.id === expenseId;
      })
    };
  }

  public createExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  public deleteExpense(expenseId: string) {
    this.expenses = this.expenses.filter( expense => {
      return expense.id !== expenseId;
    });
  }
}
