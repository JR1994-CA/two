import {Container, Divider} from "@material-ui/core";
import NavBar from "./components/Navbar";
import Drawer from "./components/Layout/index";
import Main from './components/Draw/main';
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import SignInOutContainer from "./components/LoginSignup/Container";

function App() {
    return (
        <>
            <NavBar/>
            <Divider/>
            {/*<Login/>*/}
            {/*<Signup/>*/}
            <SignInOutContainer/>
            <Main/>
            <Drawer/>
        </>
    );
}
export default App;
