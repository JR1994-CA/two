import data from "../Data/currency";

class upgrade extends data
{
    defcost = 100 * this.qty;

    uButton=()=>{

        this.addLvl();
    }

      bButton=()=>{
        this.qty++;
        return{did:true,mess:'Click'}
    }
}
export default upgrade;