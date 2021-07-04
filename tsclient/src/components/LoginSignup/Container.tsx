import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useState} from "react";
import {Typography,Box} from "@material-ui/core";
import Login from "./Login";
import Signup from "./Signup";

const SignInOutContainer = () => {
    const paperStyle={width:300,margin:'20px auto'};
    const [value,setValue]=useState(0);
    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };

    function TabPanel(props:any) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

return(
    <Paper elevation={20} style={paperStyle}>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Sign In" />
            <Tab label="Sign up" />
        </Tabs>
        <TabPanel value={value} index={0} >
            <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1} >
        <Signup/>
    </TabPanel>
    </Paper>
);
}

export default SignInOutContainer;