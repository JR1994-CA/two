import {Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, TextField} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {indigo, pink} from "@material-ui/core/colors";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Typography} from "@material-ui/core";
import {Input,InputLabel,FormHelperText} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    blue: {
        color: '#fff',
        backgroundColor: indigo[400],
    },
headerStyle:{
        margin:2
},
    btnStyle:{
        margin:"10px auto"
    },
}));
const handleNotify=()=>{
    return(<h1>Successful</h1>);
}

const Signup = () => {
    const classes = useStyles();
    const paperStyle = {padding: '20px', height: '70vh', width: 300, margin: "00px auto"};
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center" direction={"column"} alignItems={"center"}>
                    <Avatar className={classes.blue}><PermIdentityIcon/></Avatar>
                    <h2 className={classes.headerStyle}>Sign up</h2>
                    <Typography variant={'caption'}>Please fill this form to create your Account</Typography>
                </Grid>
                <form>

                    <TextField label={'e-mail'} fullWidth/>
                    <TextField label={'Password'} type={'password'} fullWidth/>
                    <TextField label={'Confirm Password'} type={'password'} fullWidth/>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.btnStyle}
                        onClick={()=>handleNotify}>
                        Sign up
                    </Button>
                </form>
                {/*<div className={}>*/}
                {/*    You have Successfully Signed up!*/}
                {/*</div>*/}
            </Paper>
        </Grid>
    );
}
export default Signup;