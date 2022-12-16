import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';

import { CarouselComponent } from '../carousel/carousel/carousel.component';
import { SinglePackageComponent } from './single-package/single-package.component';
import { BenefitsComponent } from './benefits/benefits.component';

@NgModule({
  declarations: [PackagesComponent, CarouselComponent, SinglePackageComponent, BenefitsComponent],
  imports: [CommonModule, PackagesRoutingModule],
})
export class PackagesModule {}
