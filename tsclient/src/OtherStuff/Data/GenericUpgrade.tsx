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
        // console.log(pie.trans.qty > this.qty);
        return{did:pie.trans.qty > this.qty, mess:'Click'}
    }

    bButton=()=>{
        // if (who > this.qty)
        //     who.qty -= this.defcost
        this.qty++;
        return{did:true,mess:'Click'}
    }

}

export default upgrade;