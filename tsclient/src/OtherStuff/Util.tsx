import pie from "./Holding"

class data
{
    constructor(name = "TEST" ,  funcCosts:any)
    {
        this.name = name;
        this.upgradeLVl = 0;
        this.costs =funcCosts
    }

    costs =
        {
            trans : (val:number)=> val,
            chips : (val:number)=> val,
            boards: (val:number)=> val,
            cpus :  (val:number)=> val
        }

    name;
    upgradeLVl = 1;
    qty = 0;
    perSec=0;
    perClick=1;

    uButton=()=>{
        this.perClick++;
        this.addLvl();
    }

    changeQty = (val:number) =>
    {
        this.qty += val;
        return this.qty
    }
    getLvl = ()=> this.upgradeLVl
    checkCost = ()=>
    {
        let fin = {did:true , mess:'Need More '}

        if(pie.trans.qty < this.costs.trans(this.upgradeLVl))
        {
            fin.did = false
            fin.mess += ' Transistor'
        }

        if(pie.chips.qty < this.costs.chips(this.upgradeLVl))
        {
            fin.did = false
            fin.mess += ' Chips'
        }

        if(pie.boards.qty < this.costs.boards(this.upgradeLVl))
        {
            fin.did = false
            fin.mess += ' Boards'
        }
        if(pie.cpus.qty < this.costs.cpus(this.upgradeLVl))
        {
            fin.did = false
            fin.mess += ' Cpus'
        }
        return {did:fin.did, mess:fin.did?'Upgrade':fin.mess };

    }
    getMess = ()=>
    {
        return this.checkCost();
    }

    addLvl =()=>
    {
        let a = this.checkCost()

        if(a.did) {
            this.changeQty(-this.costs.chips(this.upgradeLVl));
            this.upgradeLVl++;
        }

        return a;

    }
}
//42
export class UfortyTwo extends data {
    uButton = () => {
        pie.trans.perSec++;
        this.perSec++;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:":)"}
    }
}
//Rowboat
export class URow extends data
{

    checkCost = ()=>
    {
     return{did:true ,mess:":)"}
    }

    uButton=()=>{

        pie.trans.perSec++;
        pie.chips.perSec++;
        pie.boards.perSec++;
        this.perSec++;
        this.addLvl();
    }

}
export class UPhoneBox extends data
{
    uButton=()=>{
        pie.trans.perSec++;
        pie.chips.perSec++;
        this.perSec++;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:":)"}
    }
}
export class URobot extends data
{
    uButton=()=>{
        pie.trans.perSec++;
        this.perSec++;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:":)"}
    }
}


export class upgrade extends data
{
    uButton=()=>{

        pie.rowboat.perClick++;
        pie.chips.perClick++;
        this.perSec++;
        this.addLvl();
    }
    checkCost = ()=>
    {
        return{did:true ,mess:":)"}
    }
}

export default data;

