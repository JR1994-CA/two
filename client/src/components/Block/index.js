import {Divider, Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";

function Block(props){
     
    const [count,setcount]=useState(props.curr_count);
    return(
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
                                <Button  color="secondary" variant="outlined" aria-label="outlined secondary" onClick={()=>{setcount(count+1)}}>Do Click</Button>
                            </div>
                            <div className="">
                                <Button color="secondary" variant="outlined" aria-label="outlined secondary">Upgrade</Button>
                            </div>
                        </Grid>

                        <Grid item direction="column">
                            <div className="">per sec:per sec value</div>
                            <div>Transistors: 40</div>
                            <div >Board: 0</div>
                            <div> Chips: 0</div>
                            <div>Cpu: 0</div>
                        </Grid>
                </Grid>
            <Divider/>
        </Grid>
    );

}

export default Block;