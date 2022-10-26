export class Skill {

    // Attributes
    id?: number;
    name: string;
    percentage: string;

    //Constructor
    constructor(name: string, percentage: string){
        this.name=name;
        this.percentage=percentage;
    }

    //Setter for percentage attribute
    setPercentage(p: string){
        this.percentage=p;
    }

}