import React, {useEffect} from "react";
import {Divider, Grid, Tooltip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";
function Block(props: any) {

    let {data} = props;
    let [lQty, setLQty] = useState(0); //DONT USE DIRECTLY USE ChangeQty LOCALLY
    let [mess,setMess]= useState('')

    let disp = `Transistors: ${data.costs.trans(data.upgradeLVl)}
                Chips: ${data.costs.chips(data.upgradeLVl)}
                Board: ${data.costs.boards(data.upgradeLVl)}
                Cpu: ${data.costs.cpus(data.upgradeLVl)}
    `;

    function changeQty_L(x:number)
    {
        let temp = lQty + x;
        setLQty(temp);
        data.changeQty(x);
    }

    let inc = ()=> {
       setInterval(()=>{
           changeQty_L(data.perSec);
       },1000)
    }

    useEffect(inc);

    return (

        <Grid container className="">
            {/*Row 1*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <h3>{data.name}<span className=""> {data.qty}</span></h3>
            </Grid>
            <Divider/>
            {/*Row 2*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">

                <Grid item direction="column">
                    <div className="">click: {data.perClick}</div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
                            changeQty_L(1);

                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Tooltip title={disp}>
<span>
    <Button disabled={!data.checkCost().did} color="secondary" variant="outlined"
            aria-label="outlined secondary" onClick={() => {
            setMess(data.addLvl().mess);

    }}>{data.getMess().mess}</Button>
</span>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
            <Divider/>
        </Grid>
    );
}

export default Block;
