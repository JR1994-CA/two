import {Container, Divider} from "@material-ui/core";
import NavBar from "./components/Navbar";
import Drawer from "./components/Layout/index";
import Main from './components/Draw/main';
import ContactComponent from './components/LoginSignup/Contact';
import LoginComponent from "./components/LoginSignup/Login";
import SignupComponent from "./components/LoginSignup/Signup";
import {Switch,Route,Link} from 'react-router-dom';
import Signup from "./components/LoginSignup/Signup";

function App() {
    return (
        <>
        <Drawer>
            <Switch>
                <Route path='/SignUp' component={SignupComponent}/>
                <Route path='/Login' component={LoginComponent}/>
                <Route path='/Contact' component={ContactComponent}/>
                <Route path='/' component={Main}/>
            </Switch>
        </Drawer>

        </>
    );
}
export default App;
