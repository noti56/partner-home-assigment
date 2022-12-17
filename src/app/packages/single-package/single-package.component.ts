import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPackage } from 'src/types/interfaces/package.interface';
import { ViewEncapsulation } from '@angular/core';
import { texts, TextsService } from 'src/app/services/texts.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-single-package',
  templateUrl: './single-package.component.html',
  styleUrls: ['./single-package.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SinglePackageComponent implements OnInit, OnDestroy {
  @Input() package!: IPackage;
  @Input() isChosen!: boolean;
  isAlive = true;
  texts: texts = {};

  constructor(public textsService: TextsService) {}

  ngOnInit(): void {
    this.textsService
      .getTexts()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((s) => {
        this.texts = s;
      });
  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
