import { ExpenseService } from '../expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.page.html',
  styleUrls: ['./expense-create.page.scss'],
})
export class ExpenseCreatePage implements OnInit {
  expense: Expense;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.expense = this.expenseService.newExpense();
    });
  }

  public onCreateExpense() {
    this.expenseService.createExpense(this.expense)
    this.router.navigate(['/expenses']);
  }
  
  public onCancelExpense() {
    this.alertCtrl.create({
      header: 'Confirm Cancel',
      message: 'Do you really want to cancel this expense?',
      buttons: [{
        text: 'No',
        role: 'Cancel'
      }, {
        text: 'Yes',
        handler: () => {
          this.router.navigate(['/expenses']);
        }
      }]
    }).then(a => { a.present(); });
  }


}
