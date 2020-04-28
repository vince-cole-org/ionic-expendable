import { ExpenseService } from './../expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {
  expense: Expense;

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
      this.expense = this.expenseService.getExpense(expenseId);
    });
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
