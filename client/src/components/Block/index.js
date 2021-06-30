import React from "react";
import {Divider, Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";


export class Block_foo extends React.Component {
     getNum = function(){count};

    render(){
        return(
            <>
                HI
            </>
        )
    }
}

function Block(props) {

    const cost=()=>props.costFun.Trans(currUpgrade);//()=>(currUpgrade + 20) * 2;

    const [count, setcount] = useState(props.curr_count);
    let [currUpgrade, setUpgrade] = useState(0); //temp 0
    return (
        <Grid container className="">
            {/*Row 1*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <h3>{props.curr_block}<span className=""> {count}</span></h3>
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
                            setcount(count + 1)
                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() =>
                        {
                            if (count > cost())
                            {
                                setUpgrade(currUpgrade+1);
                                setcount(count-cost());
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