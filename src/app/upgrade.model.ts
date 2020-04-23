export class Upgrade{
    public header :string;
    public type: string;
    public duration: string;
    public date: string;
    public cost: number;
    public performed:string;
    public count:number;
    constructor(header :string,type:string,duration:string,date:string,cost:number,performed:string,count:number){
        this.header=header;
        this.type=type;
        this.duration=duration;
        this.date=date;
        this.cost=cost;
        this.performed=performed;
        this.count=count;
    }
}