import pie from "../Init";

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

    bButton=()=>{
        this.qty+= this.perClick;
        return{did:true,mess:'Click'};
    }

    changeQty = (val:number) =>
    {
        this.qty += val;
        return this.qty
    }

    setQty =(val:number) =>
    {
        this.qty = val;
        return this.qty
    }

    getLvl = ()=> this.upgradeLVl

    checkCost = ()=>
    {
        //return({did:true,mess:'Cheat'});
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

    checkCCost= ()=> {
       return {did:true,mess: 'Click'}
    }

    getUMess = ()=>
    {
        return this.checkCost();
    }

    getCMess = ()=>
    {
    return this.checkCCost()
    }

    addLvl =()=>
    {
        let a = this.checkCost()

        if(a.did) {
            pie.trans.changeQty(-this.costs.trans(this.upgradeLVl));
            pie.chips.changeQty(-this.costs.chips(this.upgradeLVl));
            pie.boards.changeQty(-this.costs.boards(this.upgradeLVl));
            pie.cpus.changeQty(-this.costs.cpus(this.upgradeLVl));

            this.upgradeLVl++;

        }

        return a;

    }
}
export default data;