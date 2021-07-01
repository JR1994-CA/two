import pie from "./Holding"

class data
{
    constructor(name = "TEST" ,  funcCosts:object , qty:number = 0)
    {
        this.name = name;
        this.qty = qty
    }

    costs =
        {
            chips : ()=> (this.upgradelVl + 20) * 2 ,
            boards: ()=> 0,
            trans : ()=> 0,
            cpus :  ()=> 0
        }

    name;
    upgradelVl = 0;
    qty = 10;
    perSec=0;

    changeQty = (val:number) =>
    {
        this.qty += val;
        return this.qty
    }


    checkCost = ()=>
    {
        if(pie.chips.qty < this.costs.chips() )
            return false

        if(pie.trans.qty < this.costs.trans())
            return false

        if(pie.boards.qty < this.costs.boards())
            return false

        return pie.cpus.qty >= this.costs.cpus();


    }

    addLvl =()=>
    {
        if(pie.chips.qty )
        this.changeQty(-this.costs.chips());
        this.upgradelVl++;
        return this.upgradelVl;
    }

}

export class upgrade extends data
{
    perClick=1;
}


export default data;

