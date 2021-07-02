import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {purple } from '@material-ui/core/colors';
import pie from "../../OtherStuff/Holding"

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

function checkUnlocks(data:object){
    //unlock Robot - trans=100
    //unlock 42 -trans =1000
    //unlock Robot -  comp: 10000, chip: 1000,
    // Phonebox - board: 500,comp: 100000,chip: 1000,
}

export default function Unlocks(props:any) {
    const classes = useStyles();

    return (
        <div>
            <ColorButton variant="contained" color="primary" className={classes.margin} onClick={()=>checkUnlocks({})}>
               Unlocks
            </ColorButton>

        </div>
    );
}
