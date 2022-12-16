import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const initialData = { backgroundColor: '', text: '' };
@Injectable({
  providedIn: 'root',
})
export class SnackbarService implements OnDestroy {
  constructor() {}
  private snackbar: BehaviorSubject<ISnackbar> = new BehaviorSubject(
    initialData
  );
  private timeoutRef: any = null;
  private defaultTimeOut: number = 2000;

  getSnackbar(): BehaviorSubject<ISnackbar> {
    return this.snackbar;
  }
  showSnackbar(
    snackData: ISnackbar,
    timeoutMilliseconds: number = this.defaultTimeOut
  ): void {
    console.log('showSnackbar', snackData, timeoutMilliseconds);

    if (!snackData.backgroundColor || !snackData.text) {
      console.error('params error in showSnackbar');
      return;
    }
    if (this.timeoutRef) {
      this.clearTimeoutRef();
      this.removeSnackbar();
    }
    this.removeSnackBarByTime(timeoutMilliseconds);

    this.snackbar.next({
      ...snackData,
    });
  }

  removeSnackbar() {
    this.snackbar.next(initialData);
  }

  removeSnackBarByTime(timeToRemove: number) {
    this.timeoutRef = setTimeout(() => {
      this.removeSnackbar();
      this.clearTimeoutRef();
    }, timeToRemove);
  }
  ngOnDestroy(): void {
    this.clearTimeoutRef();
  }

  clearTimeoutRef() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }
}

interface ISnackbar {
  text: string;
  backgroundColor: string;
}
