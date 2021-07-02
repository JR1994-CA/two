import {Container, Divider} from "@material-ui/core";
import Block from "./components/Block";
import Blocklock from "./components/Block/Blocklock";
import {Grid} from "@material-ui/core";
import NavBar from "./components/Navbar";
import pie from "./OtherStuff/Holding"
import Drawer from "./components/Layout";


function App() {

    return (
        <>
            <NavBar/>
            <Divider/>
            <Grid container>
                <Grid item>
                    <Blocklock draw={[pie.trans,pie.chips]} />
                </Grid>
                <Grid item>
                    <Blocklock draw={[pie.fortyTwo]}/>
                </Grid>

            </Grid>
            <Drawer/>

        </>
    );
}

export default App;
