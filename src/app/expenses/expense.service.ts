import { Injectable } from '@angular/core';
import { Expense } from './expense.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private _expenses = new BehaviorSubject<Expense[]>([{
    id: 'asfdtasfdta',
    timestamp: '0000-00-00T00:00:00',
    imageUrl: 'https://images.unsplash.com/photo-1558981001-792f6c0d5068',
    value: 0
  }]);

  constructor() { }

  public newExpense() {
    return new Expense('', 0);
  }

  public getAllExpenses(): Observable<Expense[]> {
    return this._expenses.asObservable();
  }

  public getExpense(expenseId: string): Observable<Expense> {
    return this._expenses.pipe(
      take(1),
      map( exps => {
        return { ...exps.find(exp => exp.id === expenseId) };
      })  
    );
  }

  public createExpense(newExpense: Expense) {
    this._expenses
      .pipe(take(1))
      .subscribe( exps => {
        this._expenses.next( 
          exps.concat(newExpense)
        )
    });
  }

  public deleteExpense(expenseId: string) {
    this._expenses
      .pipe(take(1))
      .subscribe( exps => {
        this._expenses.next( 
          exps.filter( expense => expense.id !== expenseId )
        )
    });
  }
}
