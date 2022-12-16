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

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() itemType: ICarouselItemType | undefined;
  @Input() items: IPackage[] | undefined;
  //@Output() // לטפל בלקיחת מידע מההיתרונות הרלוונטים
  @Output() hoverOnCardEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log('carusslele', this.items, this.itemType);
    // if (this.items) {
    //   //set the selected item as the middle in the Array.
    //   const index = Math.floor(this.items.length / 2);
    //   this.setSelected(index);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }
  hoverOnCard(card_id: string) {
    this.hoverOnCardEvent.emit(card_id);
  }
}
