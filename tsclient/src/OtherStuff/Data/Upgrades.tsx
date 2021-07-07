import pie from "../Init";
import upgrade from "./GenericUpgrade";

export class UfortyTwo extends upgrade {

    defcost:number = 100 * this.qty+1;

    uButton = () => {
        pie.trans.perSec = pie.fortyTwo.qty;
        this.addLvl();
    }

    bButton=()=>
    {
        if(pie.trans.qty > this.defcost) {
            console.log(this.defcost)
            pie.trans.changeQty(-this.defcost);
            this.qty++
            this.defcost = 100 * this.qty+1
            return{did:true,mess:"Hi"}
        }
        return{did:false,mess:"Bye"}
    }

    checkCCost= ()=>
    {
        if(pie.trans.qty > this.defcost)
            return{did:true,mess:"Buy"}
        return {did:false,mess:'Locked'}
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
