import { Input } from '@angular/core';

export class BarUnit {

    @Input() public set barUnit(value: any){
        console.log(value);
    };
}