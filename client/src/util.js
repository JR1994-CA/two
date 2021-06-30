
class data
{

    static chips =
        {
        cost: 10,
        qty:10,
        changeQty :(val)=>{this.chips.qty += val; return this.chips.qty}

    }
    static boards =
        {
            cost: 10,
            qty:10,
            changeQty :(val)=>{this.boards.qty += val; return this.boards.qty}
        }

    static transisters=
        {
            cost: 10,
            qty:10,
            changeQty :(val)=>{this.transisters.qty += val; return this.transisters.qty}
        }



}





export default data;