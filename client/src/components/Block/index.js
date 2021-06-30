import React from "react";
import {Divider, Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";
import data from "../../util"

export class Block_foo extends React.Component {

    render(){
        return(
            <>
                {data.chips};
            </>
        )
    }
}

function Block(props) {

    const cost=()=>props.costFun.Trans(currUpgrade);//()=>(currUpgrade + 20) * 2;


    let [foo,setFoo] = useState(0);
    let [count, setcount] = useState(props.curr_count);
    let [currUpgrade, setUpgrade] = useState(0); //temp 0

    let {chips, boards, transisters}=data;
    console.log(chips.qty);
    return (

        <Grid container className="">
            {/*Row 1*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <h3>{props.curr_block}<span className=""> {chips.qty}</span></h3>
            </Grid>
            <Divider/>
            {/*Row 2*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <Grid item direction="column">
                    <div className="">click: {count}</div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
                            ++chips.qty;
                            setFoo(++foo);
                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() =>
                        {
                            if (data.chips.qty > cost())
                            {
                                setUpgrade(currUpgrade+1);
                                data.chips.qty -= cost();
                                setFoo(0);
                            }
                        }}>Upgrade</Button>
                    </div>
                </Grid>

                <Grid item direction="column">
                    <div className="">per sec:per sec value</div>
                    <div>Transistors: {cost()}</div>
                    <div>Board: 0</div>
                    <div> Chips: 0</div>
                    <div>Cpu: 0</div>
                </Grid>
            </Grid>
            <Divider/>
        </Grid>
    );

}

export default Block;