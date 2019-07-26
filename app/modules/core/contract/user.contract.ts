export interface UserContract  {
    name: string;
    email: string;
    password: string;
    address?: [
        {
            state: string;
            street: string;
            number: number;
        }
    ];
    cellphones?: [{ dd: string; number: number }];
    roles?: [];

    checkPassword?:Function;
  
}
