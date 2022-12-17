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
  @Input() itemType: ICarouselItemType | undefined;
  @Input() items: IPackage[] = [];
  //@Output() // לטפל בלקיחת מידע מההיתרונות הרלוונטים
  @Output() hoverOnCardEvent = new EventEmitter<string>();

  numsOfCards = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calcScreenSize({
      height: event.target.innerHeight,
      width: event.target.innerWidth,
    });
  }
  currentSlide: number = 0;
  filteredItems: IPackage[] = [];
  hoveredCardIndex: number = 0;
  constructor() {}

  calcScreenSize(screenSize: IScreenSize) {
    if (screenSize.width > 320 && screenSize.width < 640) {
      console.log(1);

      this.numsOfCards = 1;
    } else if (screenSize.width > 640 && screenSize.width < 1024) {
      console.log(2);
      this.numsOfCards = 2;
    } else if (screenSize.width > 1025) {
      console.log(3);
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
  }

  previousNext(amount: number) {
    if (
      this.currentSlide + amount + this.numsOfCards > this.items.length ||
      (this.currentSlide == 0 && amount == -1)
    )
      return;
    this.currentSlide = this.currentSlide + amount;

    this.setFiltered();
    console.log(this.currentSlide);
    console.log(this.filteredItems);
  }
}
