class data
{
    constructor(name = "TEST" , qty = 0,cost = 0, costFuncs)
    {
        this.name = name;
        this.qty = qty;
        this.cost = cost;
        this.costs = costFuncs;
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
    cost = 10;
    qty = 10;

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

export default data;