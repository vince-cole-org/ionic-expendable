import { ExpenseService } from './../expense.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit, OnDestroy {
  expense: Expense;
  private expensesSub: Subscription;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('expenseId')) {
        this.router.navigate(['/expenses']);
        return;
      }
      const expenseId = paramMap.get('expenseId');

      this.expensesSub = this.expenseService.getExpense(expenseId).subscribe(expense => {
        this.expense = expense;
      });

    });
  }

  ngOnDestroy() {
    if (this.expensesSub) {
      this.expensesSub.unsubscribe();
    }    
  }

  public onDeleteExpense(expenseId: string) {
    this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Do you really want to delete this expense?',
      buttons: [{
        text: 'No',
        role: 'Cancel'
      }, {
        text: 'Yes',
        handler: () => {
          this.expenseService.deleteExpense(this.expense.id);
          this.router.navigate(['/expenses']);
        }
      }]
    }).then(a => { a.present(); });
  }

}
