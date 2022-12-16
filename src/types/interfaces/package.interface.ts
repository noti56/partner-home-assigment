export interface IPackage {
  title: string;
  pricePerMonth: number;
  details: string[];
  isWebExclusive: boolean;
  forWebOrders: string;
  _id: string;
  benefits: IBenefits[];
}
export interface IBenefits {
  text: string;
  icon: string;
}
