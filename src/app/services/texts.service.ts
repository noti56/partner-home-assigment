import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface texts {
  [id: string]: string;
}
const texts = {
  userNamePlaceHolder: 'Type your user name',
  submit: 'Submit',
  hey: 'היי',
  partnerKeeps: 'פרטנר שומרת עליכם',
  youConnected: 'מחוברים תמיד',
  webExclusive: 'בלעדי באתר!',
  perMonth: 'לחודש',
  coin: '₪',
  webExclusiveExtra: 'בלעדי למזמינים באתר',
  join: '<< להצטרפות',
  userNameIsMandatory: 'חובה ללכתוב שם משתמש!',
  minimalValue: 'האורך המינימאלי של שם משתמש הוא 5 אותיות',
  maxValue: 'האורך המקסימאלי של שם משתמש הוא 10 אותיות',
  enHe: 'שם משתמש יכול להכיל אותיות בעברית ובאנגלית בלבד',
};

@Injectable({
  providedIn: 'root',
})
export class TextsService {
  private textsData: BehaviorSubject<texts> = new BehaviorSubject({});
  constructor() {
    this.textsData.next(texts);
  }

  getTexts() {
    return this.textsData;
  }
}
