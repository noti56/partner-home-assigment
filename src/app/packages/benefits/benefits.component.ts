import { Component, Input, OnInit } from '@angular/core';
import { IBenefits } from 'src/types/interfaces/package.interface';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit {
  constructor() {}
  @Input() benefits!: IBenefits[];
  ngOnInit(): void {}
}
