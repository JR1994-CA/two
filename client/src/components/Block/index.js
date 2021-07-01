import React from "react";
import {Divider, Grid, Tooltip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";


function Block(props) {

    let [foo,setFoo] = useState(0); //Cheaty way to update site
    let {data} = props;

    let disp  = `Transistors: ${data.costs.trans()}
                Chips: ${data.costs.chips()}
                Board: ${data.costs.boards()}
                Cpu: ${data.costs.cpus()}
    `;
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
                    <div className="">click: {data.qty}</div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
                            data.changeQty(1);
                            setFoo(++foo);//forcing update
                            console.log(data.qty)
                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Tooltip title={disp}>
                            <span>
                        <Button disabled={data.qty<= data.costs.chips()} color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() =>
                        {
                            if (data.qty > data.costs.chips())
                            {
                                data.addLvl();
                                data.changeQty(-data.costs.chips());
                                setFoo(0);
                                console.log(data.upgrade);
                            }
                        }}>{ data.qty<= data.costs.chips()? "Need more Chips" : "Upgrade"}</Button>
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