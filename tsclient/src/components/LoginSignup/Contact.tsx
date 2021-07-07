import {makeStyles} from "@material-ui/core/styles";
import {indigo, pink} from "@material-ui/core/colors";
import React, {useState} from "react";
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    blue: {
        color: '#fff',
        backgroundColor: indigo[400],
    },

}));


const Contact=()=>{

    const classes = useStyles();
    const paperStyle = {padding: '20px', height: '70vh', width: 300, margin: "0px auto"};
    const btnStyle={margin:"30px 0px"};
    const textStyle={margin:"30px 0px"}
    const [state, setState] =useState({
        checked: true,
    });


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center" direction={"column"} alignItems={"center"}>
                    <Avatar className={classes.blue}><LockOutlinedIcon/></Avatar>
                    <h2>Contact</h2>
                </Grid>
                <form>
                <TextField label={'Email'} placeholder={'Enter email'} fullWidth/>
                <TextField label={'Message'} placeholder={'Send us your thoughts'}  multiline rows={4} fullWidth style={textStyle}/>

                <Button type="submit" color='primary' variant='contained' fullWidth style={btnStyle} >Submit</Button>
                </form>

            </Paper>
        </Grid>
    );
}
export default Contact;