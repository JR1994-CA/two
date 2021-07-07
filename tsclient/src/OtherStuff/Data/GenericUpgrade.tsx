import data from "../Data/currency";
import pie from "../Init";

class upgrade extends data
{
    constructor(name = "TEST" ,  funcCosts:any)
    {
        super(name,  funcCosts)

    }
    defcost=
        {
            trans:100 * this.qty+1,
            chips: 50 * this.qty+1,
            boards:25 * this.qty+1,
            cpus:10*this.qty+1

        }
    // who =pie.trans;
    uButton=()=>{

        this.addLvl();
    }

    getCMess=()=> this.checkCCost()

    checkCCost = ()=>
    {
        return{did:true, mess:'Click'}
    }

    bButton=()=>{
        this.qty++;
        return{did:true,mess:'Click'}
    }

}

export default upgrade;