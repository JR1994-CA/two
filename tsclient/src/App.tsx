import {Container, Divider} from "@material-ui/core";
import NavBar from "./components/Navbar";
import Drawer from "./components/Layout/index";
import Main from './components/Draw/main';
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import SignInOutContainer from "./components/LoginSignup/Container";
import {Switch,Route} from 'react-router-dom';
function App() {
    return (
        <Drawer>
            <Switch>
                {/*<NavBar/>*/}
                {/*<Divider/>*/}
                {/*<Login/>*/}
                {/*<Signup/>*/}
                <Route path='/SigninOut' component={SignInOutContainer}/>
                <Route path='/' component={Main}/>
                {/*<Drawer/>*/}
            </Switch>
        </Drawer>
    );
}
export default App;
