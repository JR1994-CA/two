import React, {useState} from "react";
import Block from "./index";
import pie from "../../OtherStuff/Init"

function Blocklock(props: any) {

    let {draw} = props
    return (<span> {draw.map((item: any) => <Block data={item}  pie={pie}/>)}</span>)
}

export default Blocklock;


//TODO FIX RENDERING