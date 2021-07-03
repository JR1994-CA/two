import {Container, Divider} from "@material-ui/core";
import NavBar from "./components/Navbar";
import Drawer from "./components/Layout/index";
import Main from './components/Draw/main';
import Login from "./components/LoginSignup/SignInModal";


function App() {
    return (
        <>
            <NavBar/>
            <Divider/>
            {/*<Login/>*/}
            <Main/>
            <Drawer/>
        </>
    );
}
export default App;
