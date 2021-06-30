import {Divider, Grid} from "@material-ui/core";
import glass from "../../App.css";
import {Button} from "@material-ui/core";

function Block(props){

    return(
        <Grid container className="">
                {/*Row 1*/}
                <Grid container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center">
                    <h3>{props.curr_block}<span className=""> {props.curr_count}</span></h3>
                </Grid>
            <Divider/>
                {/*Row 2*/}
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                        <Grid item direction="column">
                            <div className="">click: click value</div>
                            <div className="">
                                <Button  color="secondary" variant="outlined" aria-label="outlined secondary">Do Click</Button>
                            </div>
                            <div className="">
                                <Button color="secondary" variant="outlined" aria-label="outlined secondary">Upgrade</Button>
                            </div>
                        </Grid>

                        <Grid item direction="column">
                            <div className="">per sec:per sec value</div>
                            <div>Transistors:</div>
                            <div >Board: </div>
                            <div> Chips: </div>
                            <div>Cpu:</div>
                        </Grid>
                </Grid>
            <Divider/>
        </Grid>
    );

}

export default Block;