import { Injectable, OnInit } from '@angular/core';
const localStorageKey = 'userNamePartner';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private userName: string | undefined;
  constructor() {
    const userNameFromStorage = localStorage[localStorageKey];
    if (userNameFromStorage && typeof userNameFromStorage == 'string') {
      this.userName = userNameFromStorage;
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  updateUserName(userName: string) {
    this.userName = userName;
    localStorage[localStorageKey] = userName;
  }
  getUserName(): string | undefined {
    return this.userName;
  }
}
