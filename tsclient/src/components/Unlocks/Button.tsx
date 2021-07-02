import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {purple } from '@material-ui/core/colors';
import {uOrder} from "../../OtherStuff/Something";
import data from '../../OtherStuff/Holding';
import pie from '../../OtherStuff/Holding';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function checkUnlocks(data:any){

    console.log(data.trans.qty);
    // console.log(data.chips);
if( true || data.tran.qty >= uOrder[pie.upLvl].trans && data.boards.qty >= uOrder[pie.upLvl].boards && data.chips.qty >= uOrder[pie.upLvl].cpus && data.tran.qty >= uOrder[pie.upLvl].cpus ) {

    pie.chips.changeQty(-uOrder[pie.upLvl].chips);
    pie.trans.changeQty(-uOrder[pie.upLvl].trans);
    pie.cpus.changeQty(-uOrder[pie.upLvl].cpus);
    pie.boards.changeQty(-uOrder[pie.upLvl].boards);
    pie.listO_Open.push(uOrder[pie.upLvl].x);
    pie.upLvl++;

console.log(pie.listO_Open);
}

}

export default function Unlocks(props:any) {
    const classes = useStyles();
    return (
        <div>
            <ColorButton variant="contained" color="primary" className={classes.margin} onClick=
                {()=>checkUnlocks(data)}>
               Unlocks
            </ColorButton>

        </div>
    );
}
