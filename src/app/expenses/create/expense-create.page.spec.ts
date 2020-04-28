import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpenseCreatePage } from './expense-create.page';

describe('ExpenseCreatePage', () => {
  let component: ExpenseCreatePage;
  let fixture: ComponentFixture<ExpenseCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
