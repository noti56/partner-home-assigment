import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPackage } from 'src/types/interfaces/package.interface';
import { ICarouselItemType } from 'src/types/types/CaruselleItems.type';

const numsOfCards = 3;
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
  currentSlide: number = 0;
  filteredItems: IPackage[] = [];
  hoveredCardIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    console.log('carusslele', this.items, this.itemType);

    // if (this.items) {
    //   //set the selected item as the middle in the Array.
    //   const index = Math.floor(this.items.length / 2);
    //   this.setSelected(index);
    // }

    this.setFiltered();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }
  hoverOnCard(card_id: string) {
    this.hoverOnCardEvent.emit(card_id);
    this.hoveredCardIndex = this.items.findIndex((item) => item._id == card_id);
  }

  setFiltered() {
    this.filteredItems = this.items.slice(
      this.currentSlide,
      this.currentSlide + numsOfCards
    );
  }

  previousNext(amount: number) {
    if (
      this.currentSlide + amount + numsOfCards > this.items.length ||
      (this.currentSlide == 0 && amount == -1)
    )
      return;
    this.currentSlide = this.currentSlide + amount;

    this.setFiltered();
    console.log(this.currentSlide);
    console.log(this.filteredItems);
  }
}
