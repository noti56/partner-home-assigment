import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { ERoutes } from 'src/types/enums/RouterTypes.enum';
import { reg_Min5_Max10_NoNums_HE_EN, reg_HE_EN } from '../../../Regex';
//;
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    public router: Router,
    public snackbar: SnackbarService,
    public userDataService: UserDataService
  ) {}
  public userName = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern(reg_HE_EN),
    ],
  });

  ngOnInit(): void {
    if (this.userDataService.getUserName()) {
      this.router.navigateByUrl(ERoutes.packages);
    }
  }
  showErrorToUser(text: string) {
    this.snackbar.showSnackbar({ backgroundColor: 'red', text });
  }

  validateField() {
    if (!this.userName.errors) return;
    if (this.userName.errors['required']) {
      this.showErrorToUser('חובה ללכתוב שם משתמש!');
      return;
    }
    if (this.userName.errors['minlength']) {
      this.showErrorToUser('האורך המינימאלי של שם משתמש הוא 5 אותיות');
      return;
    }
    if (this.userName.errors['maxlength']) {
      this.showErrorToUser('האורך המקסימאלי של שם משתמש הוא 10 אותיות');
      return;
    }
    if (this.userName.errors['pattern']) {
      this.showErrorToUser('שם משתמש יכול להכיל אותיות בעברית ובאנגלית בלבד');
      return;
    }
  }
  submitForm(): void {
    if (this.userName.errors) return;
    this.userDataService.updateUserName(this.userName.value);
    this.router.navigateByUrl('/' + ERoutes.packages);
  }
}
