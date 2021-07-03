import {Container, Divider} from "@material-ui/core";
import Blocklock from "./components/Block/Blocklock";
import {Grid} from "@material-ui/core";
import NavBar from "./components/Navbar";
import pie from "./OtherStuff/Holding"
import Drawer from "./components/Layout";
import Unlocks from './components/Unlocks';
import Main from './components/Draw/main';
function App() {

        return (

            <>
                <NavBar/>
                <Divider/>
                {/*<Grid container>*/}
                {/*    <Grid item>*/}
                {/*        <Blocklock draw={[pie.listO_Open]}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item>*/}
                {/*        <Blocklock draw={[pie.fortyTwo]}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item>*/}
                {/*        <Unlocks />*/}
                {/*        /!*unlockData={pie}*!/*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
<Main/>
                <Drawer/>

            </>
        );

}
export default App;
