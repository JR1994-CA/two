import Block, {Blocklock} from "./Block";

import pie from "../OtherStuff/Holding";
import {Component} from "react";


function Chip() {
return <> {pie.listO_Open.length > 1 && <Block data={pie.chips}/>} </>
}

function Trans(){
   return <> {pie.listO_Open.length >= 0 && <Block data={pie.trans}/>} </>
}

function Boards(){
    return <> {pie.listO_Open.length > 1 && <Block data={pie.boards}/>} </>
}


function Cpus(){

    return <> {pie.listO_Open.length > 2 && <Block data={pie.cpus}/>} </>
}

class Redoer extends Component<any, any> {

    render() {
        return (
            <>
                <Trans/>
                <Chip/>
                <Boards/>
                <Cpus/>
            </>
        );
    }
}


export default Redoer