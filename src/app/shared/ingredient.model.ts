export class Ingredient{
    public name: string;
    public amount: number;
    constructor(name: string, amount: number){
this.name = name;
this.amount = amount;
    }
}

/* we can also use in this way 
export class Ingredient{
    constructor(public name: string, public amount: number){
    }
}*/