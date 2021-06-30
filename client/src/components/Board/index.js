import {Container} from "@material-ui/core";
import glass from '../../App.css';
import {Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";

function Board(){
    return(
        <Grid container className="" direction="column" justify="space-between" alignItems="center">
            <div><h1>Score Board</h1></div>
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center" >


                    <div className="mt-1 mb-2"><h2>Transistor:count</h2></div>
                    <div className="mt-1 mb-2"><h2>Boards:count</h2></div>
                    <div className="mt-1 mb-2"><h2>Chips:count</h2></div>
                    <div className="mt-1 mb-2"><h2>CPU:count</h2></div>
                    <div className="mt-1 mb-2">
                        <Button size="small" variant="outlined" color="inherit"><h3>Current Upgrade</h3></Button>
                    </div>


            </Grid>
        </Grid>

    );
}

export default Board;
