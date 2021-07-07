import pie from "../Init";
import upgrade from "./GenericUpgrade";

export class UfortyTwo extends upgrade {

    defcostTrans:number = 100 * this.qty+1;

    uButton = () => {
        pie.trans.perSec = pie.fortyTwo.qty;
        this.addLvl();
    }

    // bButton=()=>
    // {
    //     if(pie.trans.qty > this.defcost) {
    //         console.log(this.defcost)
    //         pie.trans.changeQty(-this.defcost);
    //         this.qty++
    //         this.defcost = 100 * this.qty+1
    //         return{did:true,mess:"Hi"}
    //     }
    //     return{did:false,mess:"Bye"}
    // }

    checkCCost= ()=>
    {
        if(pie.trans.qty > this.defcostTrans)
            return{did:true,mess:"Buy"}
        return {did:false,mess:'Locked'}
    }

}

//Rowboat
export class URow extends upgrade
{
    defcostTrans:number = 100 * this.qty+1;
    defcostChips:number = 50 * this.qty+1;
    defcostBoards:number =25 * this.qty+1;
    checkCost = ()=>
    {
        if(pie.trans.qty > this.defcostTrans&&pie.chips.qty>this.defcostChips&&pie.boards.qty>this.defcostBoards)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }

    uButton=()=>{

        pie.boards.perSec = pie.rowboat.qty;
        this.addLvl();
    }

}

export class UPhoneBox extends upgrade
{
    defcostTrans:number = 100 * this.qty+1;
    defcostChips:number = 50 * this.qty+1;
    uButton=()=>{
        pie.chips.perSec = pie.phonebox.qty ;
        this.addLvl();
    }
    checkCost = ()=>
    {
        if(pie.trans.qty > this.defcostTrans&&pie.chips.qty>this.defcostChips)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }
}

export class URobot extends upgrade
{
    defcostTrans:number = 100 * this.qty+1;
    defcostChips:number = 50 * this.qty+1;
    defcostBoards:number =25 * this.qty+1;
    defcostCpus:number=10*this.qty+1;
    uButton=()=>{
        pie.cpus.perSec = pie.robot.qty;
        this.addLvl();
    }
    checkCost = ()=>
    {
        if(pie.trans.qty > this.defcostTrans&&pie.chips.qty>this.defcostChips&&pie.boards.qty>this.defcostBoards&&pie.cpus.qty>this.defcostCpus)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }
}
