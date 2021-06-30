import {Container, Divider} from "@material-ui/core";
import Block, {Block_foo} from "./components/Block";
import Board from "./components/Board";
import {Grid} from "@material-ui/core";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import test from "./components/test";
function App() {

    const chips = new Data();
    const boards = new Data();
    const trans = new Data();


    return (
      <>
          <NavBar/>
          <Grid container>
              <Grid item xs>
                <Board/>
              </Grid>
          </Grid>
          <Divider/>
          <Grid container>
              <Grid item>
                  {/*Dynamically input blocks?*/}
                  {/*<Block curr_block={"Transistor"} costFun={(upgrade) => (upgrade + 20) * 2} curr_count={objodata}/>*/}
                  {/*<Block curr_block={"Boards"} costFun={(upgrade) => (upgrade + 20) * 2} curr_count={objodata}/>*/}

                  <Block data={chips}/>


                  <Block


              </Grid>
          </Grid>
{/*<Footer/>*/}
      </>
  );
}

export default App;
