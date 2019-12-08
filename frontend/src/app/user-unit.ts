import { Input } from '@angular/core';

export class UserUnit {

    @Input() public set userUnit(value: any){
        console.log(value);
    };
}
