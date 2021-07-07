import data from "../Data/currency";
import pie from "../Init";

class upgrade extends data
{

    // who =pie.trans;
    uButton=()=>{

        this.addLvl();
    }

    getCMess=()=> this.checkCCost()

    checkCCost = ()=>
    {
        return{did:pie.trans.qty > this.qty, mess:'Click'}
    }

    bButton=()=>{
        this.qty++;
        return{did:true,mess:'Click'}
    }

}

export default upgrade;