import {Avatar, Link} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {amber, deepOrange} from "@material-ui/core/colors";
import {purple} from "@material-ui/core/colors";
import {Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Fade} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 500,
    },
    orange: {
        backgroundColor: deepOrange[500],
    },
    blue: {
        backgroundColor: amber[500]
    },
    purple: {
        backgroundColor: purple[800]
    },
    footer: {
        // backgroundColor:"gray",
        position: "relative",
        left: "0px",
        bottom: "0px",
        paddingTop: "50px"
    },
    h4Styles:
        {
            justifyContent: "center"

        },
}));

function About() {
    const classes = useStyles();

    return (
        <div>
            <h1>About Us</h1>


            <Grid container justify="space-evenly">

            </Grid>
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-end"
            >
                <Grid item>
                    <h3>Shelby Jordan :: Scrum Master </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad blanditiis consequuntur, deserunt distinctio dolorem ducimus earum eum fuga fugit in, ipsa itaque neque officiis perspiciatis quas quod recusandae. Possimus.</p>
                    <h4>Github profile :</h4>
                    <Tooltip title="Shelby Jordan" TransitionComponent={Fade} TransitionProps={{timeout: 600}}>
                        <Link href="https://github.com/Kingly77" color="inherit" underline={'none'} target="_blank"
                              rel="noopener">
                            <Avatar alt="Shelby Jordan" src="/broken-image.jpg" variant="square"
                                    className={classes.blue}>
                                S
                            </Avatar>
                        </Link>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <h3>Jesus Ramirez Arroyo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor dolores ea expedita facere, fugit, ipsam laudantium magni nam nesciunt officia officiis omnis praesentium recusandae ullam, veritatis voluptas voluptatibus voluptatum?</p>
                    <h4>Github profile :</h4>
                    <Tooltip title="Jesus Ramirez Arroyo" TransitionComponent={Fade} TransitionProps={{timeout: 600}}>
                        <Link href="https://github.com/JR1994-CA" color="inherit" underline={'none'} target="_blank"
                              rel="noopener">
                            <Avatar alt="Jesus Ramirez Arroyo" variant="square" src="/broken-image.jpg"
                                    className={classes.orange}>J</Avatar>
                        </Link>
                    </Tooltip>
                </Grid>
                {/*<Grid item xs={8}>*/}
                {/*<h2>Austin John Aaro</h2>*/}
                {/*<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown*/}
                {/*    printer took a galley of type and scrambled it to make a type specimen book. It has survived not*/}
                {/*    only five centuries, but also the leap into electronic typesetting, remaining essentially*/}
                {/*    unchanged.</p>*/}
                {/*<Tooltip title="Austin John Aaro" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>*/}
                {/*<Link href="https://github.com/AustinJohnAaro"  color="inherit" underline={'none'} target="_blank" rel="noopener">*/}
                {/*    <Avatar alt="Austin John Aaro" src="/broken-image.jpg" variant="square">A</Avatar>*/}
                {/*</Link>*/}
                {/*</Tooltip>*/}
                {/*    </Grid>*/}
                <Grid item >
                    <h3>Cynthia Mohan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur consequatur deserunt dolor est facere, fuga id in incidunt inventore nihil non optio perferendis quasi quidem sit sunt voluptas voluptates?</p>
                    <h4>Github profile :</h4>
                    <Tooltip title="Cynthia Mohan" TransitionComponent={Fade} TransitionProps={{timeout: 600}}>
                        <Link href="https://github.com/CynthiaMohan" color="inherit" underline={'none'} target="_blank"
                              rel="noopener">
                            <Avatar alt="Cynthia Mohan" variant="square" className={classes.purple}
                                    src="/static/images/avatar/4.jpg">C</Avatar>
                        </Link>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;