import { Bar } from './bar';

export class User {
    id: number;
    username: string;
    password: string;
    role: string;
    // bar: Bar;
    // type: UserType;
    // shift: Shift;
    // boss: User;
}

export enum Shift {
    DAY,
    NIGHT
}
  
export enum UserType {
    ROLE_BARTENDER,
    ROLE_BOSS,
    ROLE_ADMIN
}
  

