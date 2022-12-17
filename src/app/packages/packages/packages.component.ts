import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { PackagesService } from 'src/app/services/packages.service';
import { texts, TextsService } from 'src/app/services/texts.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { IBenefits, IPackage } from 'src/types/interfaces/package.interface';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit, OnDestroy {
  constructor(
    public userDataService: UserDataService,
    public router: Router,
    public packagesService: PackagesService,
    public textsService: TextsService
  ) {}
  packages: IPackage[] = [];
  benefitsByItems: { [id: string]: IBenefits[] } = {};
  selected: string | undefined;
  isAlive = true;
  texts: texts = {};

  ngOnInit(): void {
    if (!this.userDataService.getUserName()) {
      this.router.navigateByUrl('');
      return;
    }
    this.initSubs();

    this.selected = this.packages[0]?._id;
  }

  initSubs() {
    this.textsService
      .getTexts()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((s) => {
        this.texts = s;
      });
    this.packagesService
      .getPackages()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((pacs) => {
        this.packages = pacs;
        this.packages.forEach((pack) => {
          const packId = pack._id;
          this.benefitsByItems[packId] = pack.benefits;
        });
      });
  }

  setSelected(pack_id: string) {
    this.selected = pack_id;
    console.log(this.selected);
  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
