import pie from "./Holding"

class data
{
    constructor(name = "TEST" ,  funcCosts:object)
    {
        this.name = name;
        //this.costs = funcCosts;
    }

    costs =
        {
            chips : (val:number)=> val,
            boards: (val:number)=> val,
            trans : (val:number)=> val,
            cpus :  (val:number)=> val
        }

    name;
    upgradeLVl = 0;
    qty = 0;
    perSec=0;

    changeQty = (val:number) =>
    {
        this.qty += val;
        return this.qty
    }


    checkCost = ()=>
    {
        if(pie.chips.qty < this.costs.chips(this.upgradeLVl))
            return false

        if(pie.trans.qty < this.costs.trans(this.upgradeLVl))
            return false

        if(pie.boards.qty < this.costs.boards(this.upgradeLVl))
            return false

        return pie.cpus.qty >= this.costs.cpus(this.upgradeLVl);

    }

    addLvl =()=>
    {
        if(pie.chips.qty )
        this.changeQty(-this.costs.chips(this.upgradeLVl));
        this.upgradeLVl++;
        return this.upgradeLVl;
    }

}

export class upgrade extends data
{
    perClick=1;
}


export default data;

