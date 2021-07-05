import {Container, Divider} from "@material-ui/core";
import NavBar from "./components/Navbar";
import Drawer from "./components/Layout/index";
import Main from './components/Draw/main';
import ContactComponent from './components/LoginSignup/ContactModal';
import SignInOutContainer from "./components/LoginSignup/Container";
import SignupComponent from "./components/LoginSignup/Signup";
import {Switch,Route,Link} from 'react-router-dom';

function App() {
    return (
        <>
        <Drawer>
            <Switch>
                <Route path='/SigninOut' component={SignInOutContainer}/>
                <Route path='/Contact' component={ContactComponent}/>
                <Route path='/' component={Main}/>
            </Switch>
        </Drawer>

        </>
    );
}
export default App;
