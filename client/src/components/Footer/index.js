import {Avatar, Link} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";
import {blue} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    blue:{
        backgroundColor:blue[900]
    },
footer:{

},
}));
function Footer(){
    const classes=useStyles();
    return(
        <Grid container
              direction="row"
              justify="space-evenly"
              alignItems="flex-end"
        >

            <Link href="https://github.com/Kingly77"  color="inherit">
                <Avatar alt="Shelby Jordan" src="/broken-image.jpg" variant="square" className={classes.blue}>
                   S
                </Avatar>
            </Link>
            <Link href="https://github.com/JR1994-CA"  color="inherit">
                <Avatar alt="Jesus Ramirez Arroyo" src="/broken-image.jpg" variant="square" className={classes.orange}>J</Avatar>
            </Link>
            <Link href="https://github.com/"  color="inherit">
                <Avatar alt="Austin John Aaro" src="/static/images/avatar/3.jpg" />
            </Link>
            <Link href="https://github.com/CynthiaMohan"  color="inherit">
                <Avatar alt="Cynthia Mohan" src="/static/images/avatar/4.jpg" />
            </Link>
        </Grid>
    );
}
export default Footer;