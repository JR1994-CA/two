import Block, {Blocklock} from "../Block";
import {Grid} from "@material-ui/core";
import pie from "../../OtherStuff/Holding";
import React, {Component, useState} from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {indigo} from "@material-ui/core/colors";
import {checkUnlocks} from "../Unlocks/Button";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    blue: {
        backgroundColor: indigo[600],
        margin: theme.spacing(2),
        marginLeft:"25px",
    },
}));


function Chip() {

return <>{pie.listO_Open.length > 0 && <Block data={pie.chips} />} </>
}

function Trans(){
   return <> {pie.listO_Open.length >= 0 && <Block data={pie.trans} />} </>
}

function Boards(){
    return <>{pie.listO_Open.length > 0 && <Block data={pie.boards} />} </>
}

function Cpus(){

    return <> {pie.listO_Open.length > 0 && <Block data={pie.cpus}/>} </>
}

class Redoer extends Component<any, any> {

    constructor(props:any) {
        super(props);

        this.state = {
            list: [pie.trans]
        };
    }

    clicks = () => {
        checkUnlocks();
        this.setState({list:pie.listO_Open});
    };

    render = () => (
        <>
            <Blocklock draw={this.state.list}/>
            <Grid container>
                <div>
                    <Button variant="contained" color="primary" onClick={this.clicks}>
                        Unlocks
                    </Button>
                </div>
            </Grid>
        </>
    );
}

export default Redoer


