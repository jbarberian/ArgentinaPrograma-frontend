export class Project {
    
    // Attributes
    id?:number;
    title:string;
    company:string;
    datespan: string;
    description:string;
    avatarURL:string;
    
    // Constructor
    constructor(title:string, company:string, datespan:string, description:string, avatarURL:string){
        this.title=title;
        this.company=company;
        this.datespan=datespan;
        this.description=description;
        this.avatarURL=avatarURL;
    }
}