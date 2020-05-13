import { ExpenseService } from '../expense.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { AlertController, Platform } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.page.html',
  styleUrls: ['./expense-create.page.scss'],
})
export class ExpenseCreatePage implements OnInit {
  expense: Expense;
  form: FormGroup;
  @ViewChild('filePicker', {static: false}) filePicker: ElementRef<HTMLInputElement>;

  constructor(
    private platform: Platform,
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
    if (!this.form.valid || !this.expense.imageUrl) { 
      return; 
    }
    this.expense.value = this.form.value.expenseValue;
    this.onCreateExpense();
  }

  onPickPhoto() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePicker.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 320,
      resultType: CameraResultType.DataUrl
    }).then(img => {
      // store the image data (already a data URL) in the expense
      this.expense.imageUrl = img.dataUrl;
    }).catch(err => {
      // use the filepicker instead
      this.filePicker.nativeElement.click();
    });
  }

  onFilePicked(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) { 
      return; 
    }
    // convert the picked image to a data URL and store it in the expense
    const fr = new FileReader();
    fr.onload = () => {
      this.expense.imageUrl = fr.result.toString();
    }
    fr.readAsDataURL(pickedFile);
  }
}
