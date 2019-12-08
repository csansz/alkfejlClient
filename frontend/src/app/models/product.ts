import { Bar } from './bar';
import { Label } from './label';

export class Product {
    id: number;
    name: string;
    price: number;
    amount: number ;
    unit: Unit;
    ownerBar: Bar ;
    labels: Array<Label>;
}


export enum Unit {
    BOTTLE,
    DECILITER,
    CENTILITER
}

