import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { IBenefits, IPackage } from 'src/types/interfaces/package.interface';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit, OnChanges {
  constructor(
    public userDataService: UserDataService,
    public router: Router,
    public packagesService: PackagesService
  ) {}
  packages: IPackage[] = [];
  benefitsByItems: { [id: string]: IBenefits[] } = {};
  selected: string | undefined;
  ngOnInit(): void {
    if (!this.userDataService.getUserName()) {
      this.router.navigateByUrl('');
      return;
    }
    this.updateData();
    this.selected = this.packages[0]?._id;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateData();
  }
  updateData() {
    this.packages = this.packagesService.getPackages();
    console.log(this.packages, 'adsasdads');
    this.packages.forEach((pack) => {
      const packId = pack._id;
      this.benefitsByItems[packId] = pack.benefits;
    });
  }
  setSelected(pack_id: string) {
    this.selected = pack_id;
    console.log(this.selected);
  }
}
