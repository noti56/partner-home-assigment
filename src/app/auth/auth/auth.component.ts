import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { texts, TextsService } from 'src/app/services/texts.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { ERoutes } from 'src/types/enums/RouterTypes.enum';
import { reg_Min5_Max10_NoNums_HE_EN, reg_HE_EN } from '../../../Regex';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(
    public router: Router,
    public snackbar: SnackbarService,
    public userDataService: UserDataService,
    public textsService: TextsService
  ) {}
  public userName = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern(reg_HE_EN),
    ],
  });

  texts: texts = {};
  isAlive: boolean = true;
  ngOnInit(): void {
    if (this.userDataService.getUserName()) {
      this.router.navigateByUrl(ERoutes.packages);
    }
    this.textsService
      .getTexts()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((s) => {
        this.texts = s;
      });
  }
  showErrorToUser(text: string) {
    this.snackbar.showSnackbar({ backgroundColor: 'red', text });
  }

  validateField() {
    if (!this.userName.errors) return;
    if (this.userName.errors['required']) {
      this.showErrorToUser(this.texts.userNameIsMandatory);
      return;
    }
    if (this.userName.errors['minlength']) {
      this.showErrorToUser(this.texts.minimalValue);
      return;
    }
    if (this.userName.errors['maxlength']) {
      this.showErrorToUser(this.texts.maxValue);
      return;
    }
    if (this.userName.errors['pattern']) {
      this.showErrorToUser(this.texts.enHe);
      return;
    }
  }
  submitForm(): void {
    if (this.userName.errors) return;
    this.userDataService.updateUserName(this.userName.value);
    this.router.navigateByUrl('/' + ERoutes.packages);
  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
