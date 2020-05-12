import { ExpenseService } from '../expense.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.page.html',
  styleUrls: ['./expense-create.page.scss'],
})
export class ExpenseCreatePage implements OnInit {
  expense: Expense;
  form: FormGroup;
  
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
    this.form = new FormGroup({
      expenseValue: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0.01), Validators.pattern(/^[0-9]{1,}(\.[0-9]{2})?$/)]
      })
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

  onSubmit() {
    console.log("this.form", this.form);
    if (!this.form.valid) { 
      return; 
    }
    this.expense.value = this.form.value.expenseValue;
    this.onCreateExpense();
  }
}
