import { Input } from '@angular/core';

export class ProductUnit {

    @Input() public set productUnit(value: any){
        console.log(value);
    };
}
