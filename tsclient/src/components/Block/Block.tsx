import React, {useEffect} from "react";
import {Divider, Grid, Tooltip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";


function Block(props: any) {

    let {data} = props;
    let [lQty, setLQty] = useState(0); //DONT USE DIRECTLY USE ChangeQty LOCALLY


    let disp = `Transistors: ${data.costs.trans(data.upgradeLVl)}
                Chips: ${data.costs.chips(data.upgradeLVl)}
                Board: ${data.costs.boards(data.upgradeLVl)}
                Cpu: ${data.costs.cpus(data.upgradeLVl)}
    `;

    function changeQty_L(x:number)
    {
        data.changeQty(x);
        setLQty(data.qty);
        //console.log(x)
    }

    function setQty_L(x:number)
    {
        data.setQty(x);
        setLQty(data.qty);
        //console.log(x)
    }


    let inc = ()=> {

       let time = setInterval(()=>{
           changeQty_L(data.perSec);
       },1000);

       return ()=> clearInterval(time);

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
                        {/*Click Button*/}
                        <Button disabled={!data.checkCCost().did} color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
                            data.bButton();
                            setQty_L(data.qty);

                        }}>{data.getCMess().mess}</Button>
                    </div>
                    <div className="">
                        <Tooltip title={disp}>
                            <span>
                                <Button disabled={!data.checkCost().did} color="secondary" variant="outlined" aria-label="outlined secondary" onClick={
                                    ()=>{ data.uButton(); setQty_L(data.qty);}

                                }>
                                    {data.getUMess().mess}
                                </Button>
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