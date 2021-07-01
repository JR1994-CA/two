import {Container, Divider} from "@material-ui/core";
import Block from "./components/Block";
import Blocklock from "./components/Block/Blocklock";
import {Grid} from "@material-ui/core";
import NavBar from "./components/Navbar";
import pie from "./OtherStuff/Holding"
import Footer from "./components/Footer";
import Drawer from "./components/Layout";
import SimpleModal from "./components/Login Signup";

function App() {

    return (
        <>
            <NavBar/>
            <Divider/>
            <Grid container>
                <Grid item>

                    <Blocklock/>

                    {/*Dynamically input blocks?*/}
                    {/*<Block data={pie.trans} pie={pie}/>*/}
                    {/*<Block data={pie.chips} pie={pie}/>*/}
                    {/*<Block data={pie.boards} pie={pie}/>*/}
                    {/*<Block data={pie.cpus} pie={pie}/>*/}
                </Grid>
                <Grid item>
                    <Block data={pie.robot} pie={pie}/>
                    <Block data={pie.fortyTwo} pie={pie}/>
                    <Block data={pie.rowboat} pie={pie}/>
                    <Block data={pie.phonebox} pie={pie}/>
                </Grid>

            </Grid>
            <Drawer/>
            {/*<Footer/>*/}

        </>
    );
}

export default App;
