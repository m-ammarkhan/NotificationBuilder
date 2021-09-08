import { Notification } from "../notification.model";

export class User{
    constructor(public username:string, public password:string,public token:string,public isLoggedin:boolean){
        
    }
}