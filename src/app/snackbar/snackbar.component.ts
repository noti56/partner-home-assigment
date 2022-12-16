import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [],
})
export class SnackbarComponent implements OnInit {
  constructor(public snackbarService: SnackbarService) {}

  ngOnInit(): void {}
}
