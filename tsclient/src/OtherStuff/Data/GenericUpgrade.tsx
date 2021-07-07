import data from "../Data/currency";
import pie from "../Init";

class upgrade extends data
{

    who =pie.trans;
    uButton=()=>{

        this.addLvl();
    }

    getCMess=()=> this.checkCCost();

    checkCCost = ()=>
    {
        return{did:this.who.qty > this.qty, mess:'Click'}
    }

    constructor(name = "TEST" ,  funcCosts:any) {
        super(name, funcCosts);
    }

    bButton=()=>{
        // if (who > this.qty)
        //     who.qty -= this.defcost
        this.qty++;
        return{did:true,mess:'Click'}
    }

}

export default upgrade;