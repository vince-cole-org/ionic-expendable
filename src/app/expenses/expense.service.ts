import { Injectable } from '@angular/core';
import { Expense } from './expense.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private _expenses = new BehaviorSubject<Expense[]>([]);

  constructor() {
    this.loadDataFile();
   }

   async loadDataFile() {
     const json = await Storage.get({ key: 'expenses' });
     const data = JSON.parse(json.value);
     if (data && data.length) {
        this._expenses
          .pipe(take(1))
          .subscribe( exps => {
            this._expenses.next( 
              exps.concat(data)
            )
        });    
     }
   }

   async saveDataFile() {
    this._expenses
      .pipe(take(1))
      .subscribe( exps => {
        Storage.set({ key: 'expenses', value: JSON.stringify(exps) });
      });
  }

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
        );
        this.saveDataFile();
    });
  }

  public deleteExpense(expenseId: string) {
    this._expenses
      .pipe(take(1))
      .subscribe( exps => {
        this._expenses.next( 
          exps.filter( expense => expense.id !== expenseId )
        );
        this.saveDataFile();
    });
  }

}