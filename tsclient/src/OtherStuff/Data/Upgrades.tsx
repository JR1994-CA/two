import pie from "../Init";
import upgrade from "./GenericUpgrade";

export class UfortyTwo extends upgrade {

    uButton = () => {
        pie.trans.perSec = pie.fortyTwo.qty;
        this.addLvl();
    }

    bButton=()=>
    {
        if(pie.trans.qty > this.defcost.trans) {
            console.log(this.defcost)
            pie.trans.changeQty(-this.defcost.trans);
            this.qty++
            this.defcost.trans = 100 * this.qty+1
            return{did:true,mess:"Hi"}
        }
        return{did:false,mess:"Bye"}
    }

    checkCCost= ()=>
    {
        if(pie.trans.qty > this.defcost.trans)
            return{did:true,mess:"Buy"}
        return {did:false,mess:'Locked'}
    }

}

//Rowboat
export class URow extends upgrade
{
    constructor(name = "TEST" ,  funcCosts:any)
    {
        super(name,  funcCosts)

    }
    checkCCost = ()=>
    {
        if(pie.trans.qty > this.defcost.trans&&pie.chips.qty>this.defcost.chips&&pie.boards.qty>this.defcost.boards)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }

    uButton=()=>{

        pie.boards.perSec = pie.rowboat.qty;
        this.addLvl();
    }

    bButton=()=>
    {
        if(pie.boards.qty > this.defcost.boards) {
            console.log(this.defcost)
            pie.boards.changeQty(-this.defcost.boards);
            this.qty++
            this.defcost.boards = 100 * this.qty+1
            return{did:true,mess:"Hi"}
        }
        return{did:false,mess:"Bye"}
    }
}

export class UPhoneBox extends upgrade
{
    constructor(name = "TEST" ,  funcCosts:any)
    {
        super(name,  funcCosts)

    }
    uButton=()=>{
        pie.chips.perSec = pie.phonebox.qty ;
        this.addLvl();
    }
    checkCCost = ()=>
    {
        if(pie.trans.qty > this.defcost.trans&&pie.chips.qty>this.defcost.chips)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }
    bButton=()=>
    {
        if(pie.chips.qty > this.defcost.chips) {
            console.log(this.defcost)
            pie.chips.changeQty(-this.defcost.chips);
            this.qty++
            this.defcost.trans = 100 * this.qty+1
            return{did:true,mess:"Hi"}
        }
        return{did:false,mess:"Bye"}
    }
}

export class URobot extends upgrade
{
    constructor(name = "TEST" ,  funcCosts:any)
    {
        super(name,  funcCosts)

    }
    uButton=()=>{
        pie.cpus.perSec = pie.robot.qty;
        this.addLvl();
    }
    checkCCost = ()=>
    {
        if(pie.trans.qty > this.defcost.trans&&pie.chips.qty>this.defcost.chips&&pie.boards.qty>this.defcost.boards&&pie.cpus.qty>this.defcost.cpus)
            return{did:true,mess:"Buy"}
        return{did:true ,mess:"Unlock"}
    }
    bButton=()=>
    {
        if(pie.cpus.qty > this.defcost.chips) {
            console.log(this.defcost)
            pie.cpus.changeQty(-this.defcost.cpus);
            this.qty++
            this.defcost.cpus = 100 * this.qty+1
            return{did:true,mess:"Hi"}
        }
        return{did:false,mess:"Bye"}
    }
}
