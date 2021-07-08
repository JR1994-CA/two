import React, {useState} from 'react';
import {Avatar, Grid, Paper, TextField} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {indigo,pink} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import {Checkbox} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import {Button} from '@material-ui/core';
import {Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';



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

const Login=(handleChange:any)=> {
    const classes = useStyles();
    const paperStyle = {padding: '20px', height: '70vh', width: 300, margin: "0px auto"};
    const btnStyle={margin:"30px 0px"};
    // const [state, setState] =useState({
    //     checked: true,
    // });


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center" direction={"column"} alignItems={"center"}>
                    <Avatar className={classes.blue}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <form>
                <TextField label={'Email'} placeholder={'Enter email'} fullWidth/>
                <TextField label={'Password'} placeholder={'Enter password'} type="password" fullWidth/>
                {/*<FormControlLabel*/}
                {/*    control={*/}
                {/*        <Checkbox*/}
                {/*            name="checked"*/}
                {/*            color="primary"*/}
                {/*        />*/}
                {/*    }*/}
                {/*    label="Remember Me"*/}
                {/*/>*/}
                <Button type="submit" color='primary' variant='contained' fullWidth style={btnStyle}>Sign in</Button>
                {/*<Typography>*/}
                {/*    <Link href="#" >*/}
                {/*        Forgot Password?*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
                <Typography > Do you have an account?
                    <Link href="/SignUp" onClick={()=>{handleChange("event",1)}} >
                        Sign up
                    </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
    );
}
export default Login;