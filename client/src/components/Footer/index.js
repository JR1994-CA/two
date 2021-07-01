import {Avatar, Link} from "@material-ui/core";
import {Grid} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
                <Avatar variant="square" alt="Shelby Jordan" src="/static/images/avatar/1.jpg" />
            </Link>
            <Link href="https://github.com/JR1994-CA"  color="inherit">
                <Avatar alt="Jesus Ramirez Arroyo" variant="square" src="/static/images/avatar/2.jpg" />
            </Link>
            <Link href="https://github.com/CynthiaMohan"  color="inherit">
                <Avatar alt="Cynthia Mohan" src="/static/images/avatar/3.jpg" variant="square" />
            </Link>
        </Grid>
    );
}
export default Footer;