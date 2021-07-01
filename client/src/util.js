import pie from "./Holding"

class data
{
    constructor(name = "TEST" , qty = 0)
    {
        this.name = name;
        this.qty = qty;
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

    changeQty = (val) =>
    {
        this.qty += val;
        return this.qty
    }
    addLvl =()=>
    {
        this.upgradelVl++;
        return this.upgradelVl;
    }

}

class upgrade extends data
{
    perClick=1;
}


function hasMoney(data , cost)
{

}

export default data;

