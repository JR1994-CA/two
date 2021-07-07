import pie from "../Init";
import upgrade from "./GenericUpgrade";

class UfortyTwo extends upgrade {
    uButton = () => {
        pie.trans.perSec = pie.fortyTwo.qty;
        this.addLvl();
    }


    checkCost = ()=>
    {
        return{did:true ,mess:"Unlock"}
    }
}
//Rowboat
class URow extends upgrade
{

    checkCost = ()=>
    {
        return{did:true ,mess:"Unlock"}
    }

    uButton=()=>{

        pie.boards.perSec = pie.rowboat.qty;
        this.addLvl();
    }

}
class UPhoneBox extends upgrade
{
    uButton=()=>{
        pie.chips.perSec = pie.phonebox.qty ;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:"Unlock"}
    }
}
class URobot extends upgrade
{
    uButton=()=>{
        pie.cpus.perSec = pie.robot.qty;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:"Unlock"}
    }
}

export  {UfortyTwo,URow,UPhoneBox,URobot};