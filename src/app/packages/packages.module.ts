import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';

import { CarouselComponent } from '../carousel/carousel/carousel.component';
import { SinglePackageComponent } from './single-package/single-package.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PricePipe } from '../pipes/price.pipe';

@NgModule({
  declarations: [PackagesComponent, CarouselComponent, SinglePackageComponent, BenefitsComponent,PricePipe],
  imports: [CommonModule, PackagesRoutingModule],
})
export class PackagesModule {}
