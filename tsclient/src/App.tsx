import {Container, Divider} from "@material-ui/core";
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

            <Main/>
            <Drawer/>

        </>
    );

}
export default App;
