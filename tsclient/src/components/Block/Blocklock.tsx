import React, {useState} from "react";
import Block from "./index";
import pie from "../../OtherStuff/Holding"

function Blocklock(props: any) {

    let [set,sets] = useState(0)
    let {draw} = props
    
    console.log(draw);
    return (<span> {draw.map((item: any) => <Block data={item} pie={pie}/>)} </span>)
}

export default Blocklock;