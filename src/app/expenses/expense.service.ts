import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

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
    return new Expense('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAIAAABC8jL9AAADAFBMVEUAAAD/AAAA/wD//wAAAP//AP8A///////b29u2traSkpJtbW1JSUkkJCTbAAC2AACSAABtAABJAAAkAAAA2wAAtgAAkgAAbQAASQAAJADb2wC2tgCSkgBtbQBJSQAkJAAAANsAALYAAJIAAG0AAEkAACTbANu2ALaSAJJtAG1JAEkkACQA29sAtrYAkpIAbW0ASUkAJCT/29vbtra2kpKSbW1tSUlJJCT/trbbkpK2bW2SSUltJCT/kpLbbW22SUmSJCT/bW3bSUm2JCT/SUnbJCT/JCTb/9u227aStpJtkm1JbUkkSSS2/7aS25Jttm1JkkkkbSSS/5Jt221JtkkkkiRt/21J20kktiRJ/0kk2yQk/yTb2/+2ttuSkrZtbZJJSW0kJEm2tv+SktttbbZJSZIkJG2Skv9tbdtJSbYkJJJtbf9JSdskJLZJSf8kJNskJP///9vb27a2tpKSkm1tbUlJSST//7bb25K2tm2SkkltbST//5Lb2222tkmSkiT//23b20m2tiT//0nb2yT//yT/2//bttu2kraSbZJtSW1JJEn/tv/bktu2bbaSSZJtJG3/kv/bbdu2SbaSJJL/bf/bSdu2JLb/Sf/bJNv/JP/b//+229uStrZtkpJJbW0kSUm2//+S29tttrZJkpIkbW2S//9t29tJtrYkkpJt//9J29sktrZJ//8k29sk////27bbtpK2km2SbUltSSRJJAD/tpLbkm22bUmSSSRtJAD/ttvbkra2bZKSSW1tJElJACT/krbbbZK2SW2SJEltACTbtv+2ktuSbbZtSZJJJG0kAEm2kv+SbdttSbZJJJIkAG222/+SttttkrZJbZIkSW0AJEmStv9tkttJbbYkSZIAJG22/9uS27ZttpJJkm0kbUkASSSS/7Zt25JJtm0kkkkAbSTb/7a225KStm1tkklJbSQkSQC2/5KS221ttklJkiQkbQD/tgDbkgC2bQCSSQD/ALbbAJK2AG2SAEkAtv8AktsAbbYASZIAAAAAAADPKgIEAAAFI0lEQVR42u3cWVLjMBRA0caVpcT7X5BZTH+kiqIIUWTpaTLnfDbBg+QbKwP9cRzHP2BNmyEAAQMCBgQMAgYEDAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMCBgEDAgYEDAIGBAwIGBAwCBgQMCBgQMAgYEDAgIBBwICAAQEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgYEDAIGBAwICAQcCAgAEBAwIGAQMCBgQMCBgEDAgYEDAIGBAwIGBAwCBgQMCAgAEBg4ABAQMCBgEDAgYEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgIABAYOAAQEDAgYBAwIGBAwIGAQMCBgQMCBgEDAgYEDAIGBAwICAAQGDgAEBAwIGBAwCBgQMCBgEDAgYEDAgYBAwIGBAwCBgQMCAgAEBg4ABAQMCBgQMAgYEDAgYBAwIGBAwIGAQMCBgQMCAgEHAgIABAYOAAQEDAgYEDAIGBAyEuMVu7r7vP/7l8zjSj3l+QHqDb3/l1BH+2FTO8Zc9OOpcft1IYjuvHl98GKemL3wQCn797Qi83XvZGNbvt3fAmedZv7XHjwrOP32Ep44/9mTrd/frmIQfZM0GW0xoyAGn9152yvX7XXgJfd/3/POvkTN2UQ0UbydzNIbIvPiiJrTpOIwa58r9bh2Or93jR13Z3fY7bboXm1CvgWOewt++qnx+wH3fWyy9Yi+ywGVYzUqv80DFTmhI2/WXU9kYtruMt+Ezmj/ZQy7B8PVk5oD8OhqJXaR/Osm9t9GEFrc9asQC97t1KDP2JItPvvgdrO8/qr/9hjyFD5mRyg3WTGjZGNavStq9gxXV8NbhOabPO1KxSbxdxZVdQ4FX3vC7TYtLv90zYMgIdHvyXeY18GxrmwuPxtkPkE3obGM4XcBrTWq322/xlXTJZ712Y3gNW7syn1fRIcuqDovtV8efuIZ6XlgX+6zFR0fjA66cg5pfD3lV2eKTocStI/2hQs+nucrvMLae0OIxDBnGRt+g/BOvgaddvc+whPs6hvxrpfM7WAvNeP4SPfYdrKiXBrfWo/Z1oKusnxstSSwUz05ohzG8wDf5hn0XOrEcyj/tzveBmd+wneqWuMSEjtp77H63Oa/ynGffRsP96pklf3HV50ax1i397IS2PrvLfIv+1vqYvq+iYzcbtamCHZ1a+PWf+PzFZ/GtsmCD+ePc4v2ns3+dW3bK9fud6zVw2avl1jf5nuu0sr89KH7Wm2oVHTWhsX+pO9ULkPr9blNN+XIv9tKXVM2q+9RpzjkmZRMaOIaZex8yelH7vU01tY9//ztfM8ocpQm/wXfqFCac0Av8HdLDx+G7abAs/yslCBgQMCBgEDAgYEDAgIBBwICAAQGDgAEBAwIGBAwCBgQMCBgQMAgYEDAgYBAwIGBAwICAQcCAgAEBAwIGAQMCBgQMAgYEDAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMCBgEDAgYEDAIGBAwIGBAwCBgQMCBgQMAgYEDAgIBBwICAAQEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgYEDAIGBAwICAQcCAgAEBAwIGAQMCBgQMCBgEDAgYEDAIGBAwIGBAwCBgQMCAgAEBg4ABAQMCBgEDAgYEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgIABAYOAAQEDAgYBAwIGBAwIGAQMCBgQMCBgEDAgYEDAIGBAwICAAQGDgAEBAwIGBAwCBgQMCBgEDAgYEDAgYBAwIGBAwCBgQwDr+g9vGO44BrhnMwAAAABJRU5ErkJggg==', 0);
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
