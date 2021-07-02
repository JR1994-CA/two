import {Container, Divider} from "@material-ui/core";
import Blocklock from "./components/Block/Blocklock";
import {Grid} from "@material-ui/core";
import NavBar from "./components/Navbar";
import pie from "./OtherStuff/Holding"
import Drawer from "./components/Layout";
import Unlocks from './components/Unlocks';

function App() {

    return (
        <>
            <NavBar/>
            <Divider/>
            <Grid container>
                <Grid item>
                    <Blocklock draw={[pie.trans,pie.chips,pie.trans]} />
                </Grid>
                <Grid item>
                    <Blocklock draw={[pie.fortyTwo]}/>
                </Grid>
<Grid item>
    <Unlocks unlockData={pie.trans}/>
</Grid>
            </Grid>
            <Drawer/>
        </>
    );
}

export default App;
