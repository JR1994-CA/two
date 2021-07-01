import React from "react";
import Block from "./index";
import pie from "../../OtherStuff/Holding"

function Blocklock(props:any)
{


    if(pie.trans.shown)
        return <Block data={pie.trans} pie={pie}/>

        // if(pie.chips.qty)
        // {
        //     return <Block data={pie.chips} pie={pie}/>
        // }
        //
        // if(pie.boards.qty) {
        //    return <Block data={pie.boards} pie={pie}/>
        // }
        //
        // if(pie.cpus.qty) {
        //     return <Block data={pie.cpus} pie={pie}/>
        // }

    return <h1></h1>;

}


export default Blocklock;