import React from "react";
import {Divider, Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";


function Block(props) {

    const fCost=()=>props.costFun.Trans(currUpgrade);//()=>(currUpgrade + 20) * 2;


    let [foo,setFoo] = useState(0);
    let [count, setcount] = useState(props.curr_count);
    let [currUpgrade, setUpgrade] = useState(0); //temp 0
    let {qty,cost,changeQty} = props.data;

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
                            changeQty(1);
                            setFoo(++foo);//forcing update
                            console.log(qty)
                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() =>
                        {
                            if (data.chips.qty > cost())
                            {
                                setUpgrade(currUpgrade+1);
                                changeQty(-fCost());
                                setFoo(0);
                            }
                        }}>Upgrade</Button>
                    </div>
                </Grid>

                <Grid item direction="column">
                    <div className="">per sec:0</div>
                    <div>Transistors: {fCost()}</div>
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