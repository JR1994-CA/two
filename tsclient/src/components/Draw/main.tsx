import {Grid} from "@material-ui/core";
import pie from "../../OtherStuff/Init";
import Redoer from "./renderer";

function main() {
    const blockIndex=pie.listO_Open.length;
    console.log(blockIndex)

    return(
        <Grid container >
            <Grid item>
                <Redoer/>
            </Grid>
        </Grid>
    );

}

export default main;