import { Injectable } from '@angular/core';
import { IPackage } from 'src/types/interfaces/package.interface';
import { v4 as generateId } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  constructor() {}
  private packages: IPackage[] = [
    // dummy data that represents the data that got from the server
    {
      _id: generateId(),
      title: 'החבילה המורחבת',
      pricePerMonth: 69.9,
      isWebExclusive: false,
      details: [
        'ללא הגבלת SMS שיחות והודעות',
        'חבילת גלישה בנפח 25GB',
        '1000 דק לחול',
      ],
      forWebOrders: 'SIM כרטיס  במתנה',
      benefits: [
        {
          icon: 'earth.png',
          text: 'גלישה ב15,000 עמודי אינטרנט',
        },
        {
          icon: 'spiral.png',
          text: '534 שעות של שיחה על גבי האינטרנט',
        },
        {
          icon: 'mail.png',
          text: 'לשלוח 127,400 מיילים',
        },
        {
          icon: 'video.png',
          text: '6 שעות צפייה בוידאו באיכות HD',
        },
        {
          icon: 'chat.png',
          text: 'לשלוח או לקבל 240,000 תמונות או 12,000,000 הודעות',
        },
        {
          icon: 'music.png',
          text: 'לנגן 3984 שירים',
        },
        {
          icon: 'like.png',
          text: 'לבלות 132 שעות ברשתות חברתיות',
        },
      ],
    },
    {
      _id: generateId(),
      title: 'החבילה המוזלת',
      pricePerMonth: 49.9,
      isWebExclusive: true,
      details: [
        'ללא הגבלת SMS שיחות והודעות',
        'חבילת גלישה בנפח 10GB',
        'מחיר קבוע לשנתיים',
      ],
      forWebOrders: 'המחיר נשאר לשנתיים',
      benefits: [
        {
          icon: 'earth.png',
          text: 'גלישה ב15,000 עמודי אינטרנט',
        },
        {
          icon: 'spiral.png',
          text: '534 שעות של שיחה על גבי האינטרנט',
        },
        {
          icon: 'mail.png',
          text: 'לשלוח 127,400 מיילים',
        },
        {
          icon: 'video.png',
          text: '6 שעות צפייה בוידאו באיכות HD',
        },
        {
          icon: 'chat.png',
          text: 'לשלוח או לקבל 240,000 תמונות או 12,000,000 הודעות',
        },
        {
          icon: 'music.png',
          text: 'לנגן 3984 שירים',
        },
        {
          icon: 'like.png',
          text: 'לבלות 132 שעות ברשתות חברתיות',
        },
      ],
    },
    {
      _id: generateId(),
      title: 'החבילה הבסיסית',
      pricePerMonth: 59.9,
      isWebExclusive: false,
      details: [
        'ללא הגבלת SMS שיחות והודעות',
        'חבילת גלישה בנפח 15GB',
        '100 דק לחול',
      ],
      forWebOrders: 'CyberGuard לשנה ללא עלות',
      benefits: [
        {
          icon: 'earth.png',
          text: 'גלישה ב15,000 עמודי אינטרנט',
        },
        {
          icon: 'spiral.png',
          text: '534 שעות של שיחה על גבי האינטרנט',
        },
        {
          icon: 'mail.png',
          text: 'לשלוח 127,400 מיילים',
        },
        {
          icon: 'video.png',
          text: '6 שעות צפייה בוידאו באיכות HD',
        },
        {
          icon: 'chat.png',
          text: 'לשלוח או לקבל 240,000 תמונות או 12,000,000 הודעות',
        },
        {
          icon: 'music.png',
          text: 'לנגן 3984 שירים',
        },
        {
          icon: 'like.png',
          text: 'לבלות 132 שעות ברשתות חברתיות',
        },
      ],
    },
  ];
  getPackages(): IPackage[] {
    return this.packages;
  }
}
