import { ExpenseService } from '../expense.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController } from '@ionic/angular';
import { NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.page.html',
  styleUrls: ['./expense-create.page.scss'],
})
export class ExpenseCreatePage implements OnInit {
  expense: Expense;
  @ViewChild('expenseForm', {static:false}) expenseForm: FormGroupDirective;
  @ViewChild('valueInput', {static: false}) valueInput: { setFocus: () => void; };
  
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

  ionViewDidEnter() {
    this.valueInput.setFocus();
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

  onSubmit(formData: any) {
    const newValue = parseFloat(formData['expense.value']);
    if (!isNaN(newValue) && (newValue > 0)) {
      this.expense.value = formData['expense.value'];
      this.onCreateExpense();
    }  
  }
}
