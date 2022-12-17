import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPackage } from 'src/types/interfaces/package.interface';
import { ICarouselItemType } from 'src/types/types/CaruselleItems.type';

interface IScreenSize {
  height: number;
  width: number;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calcScreenSize({
      height: event.target.innerHeight,
      width: event.target.innerWidth,
    });
  }

  @Input() itemType: ICarouselItemType | undefined;
  @Input() items: IPackage[] = [];
  @Output() hoverOnCardEvent = new EventEmitter<string>();

  currentSlide: number = 0;
  filteredItems: IPackage[] = [];
  hoveredCardIndex: number = 0;
  numsOfCards = 3;

  constructor() {}

  calcScreenSize(screenSize: IScreenSize) {
    if (screenSize.width > 320 && screenSize.width < 640) {
      this.numsOfCards = 1;
    } else if (screenSize.width > 640 && screenSize.width < 1024) {
      this.numsOfCards = 2;
    } else if (screenSize.width > 1025) {
      this.numsOfCards = 3;
    }
    this.setFiltered();
  }
  ngOnInit(): void {
    this.calcScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  hoverOnCard(card_id: string) {
    this.hoverOnCardEvent.emit(card_id);
    this.hoveredCardIndex = this.items.findIndex((item) => item._id == card_id);
  }

  setFiltered() {
    this.filteredItems = this.items.slice(
      this.currentSlide,
      this.currentSlide + this.numsOfCards
    );
    if (this.numsOfCards == 1) {
      this.hoverOnCard(this.filteredItems[0]._id);
    }
  }

  previousNext(amount: number) {
    if (
      this.currentSlide + amount + this.numsOfCards > this.items.length ||
      (this.currentSlide == 0 && amount == -1)
    )
      return;
    this.currentSlide = this.currentSlide + amount;

    this.setFiltered();
  }
}
