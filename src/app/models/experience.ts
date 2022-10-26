export class Experience {

    // Attributes
    id?:number;
    title:string;
    company:string;
    fromdate:string;
    todate:string;
    description:string;
    avatarURL:string;

    // Constructor
    constructor(title:string, company:string, fromdate:string, todate:string, description:string, avatarURL:string){
        this.title=title;
        this.company=company;
        this.fromdate=fromdate;
        this.todate=todate;
        this.description=description;
        this.avatarURL=avatarURL;
    }
}
