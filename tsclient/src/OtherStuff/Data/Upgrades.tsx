import pie from "../Holding";
import {upgrade} from "./GenericUpgrade";

export class UfortyTwo extends upgrade {
    uButton = () => {
        pie.trans.perSec = pie.fortyTwo.qty;
        this.addLvl();
    }

    bButton=()=>{
        this.perClick++;
        this.addLvl();
        return{did:true,mess:'Click'}
    }
    checkCost = ()=>
    {
        return{did:true ,mess:"Unlock"}
    }
}
//Rowboat
export class URow extends upgrade
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
export class UPhoneBox extends upgrade
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
export class URobot extends upgrade
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