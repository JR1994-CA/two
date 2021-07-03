import {Grid} from "@material-ui/core";
import Blocklock from "../Block/Blocklock";
import pie from "../../OtherStuff/Holding";
import Unlocks from "../Unlocks";

function main() {
    const blockIndex=pie.listO_Open.length;
    console.log(blockIndex)
    return(
        <Grid container>
            <Grid item>
                {<span>{(pie.listO_Open).map((blockItem: any) =><Blocklock draw={[blockItem]}/>)} </span>}
            </Grid>
            <Grid item>
                {/*<Blocklock draw={[pie.fortyTwo]}/>*/}
            </Grid>
            <Grid item>
                <Unlocks/>
                {/*unlockData={pie}*/}
            </Grid>
        </Grid>
    );

}

export default main;