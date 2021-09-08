export class Notification{
    constructor(public _id:string,public title:string,public type:string,public msg:string,public show:boolean,public timeout:number,public username:string){}
}