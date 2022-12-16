import { Component, Input, OnInit } from '@angular/core';
import { IPackage } from 'src/types/interfaces/package.interface';

@Component({
  selector: 'app-single-package',
  templateUrl: './single-package.component.html',
  styleUrls: ['./single-package.component.scss'],
})
export class SinglePackageComponent implements OnInit {
  @Input() package!: IPackage;
  @Input() isChosen!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
