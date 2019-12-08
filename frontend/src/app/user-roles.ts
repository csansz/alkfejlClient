import { Input } from '@angular/core';

export class UserRoles {

    @Input() public set productUnit(value: any){
        console.log(value);
    };
}
