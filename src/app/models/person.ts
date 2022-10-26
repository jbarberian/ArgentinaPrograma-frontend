export class Person {
// Attributes
id?:number;
name:string;
position:string;
description:string;
avatarURL:string;
coverURL:string;

// Constructor
constructor(name:string,position:string,description:string,avatarURL:string,coverURL:string){
    this.name=name;
    this.position=position;
    this.description=description;
    this.avatarURL=avatarURL;
    this.coverURL=coverURL;
}
}
