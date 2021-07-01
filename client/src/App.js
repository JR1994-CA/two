import {Container, Divider} from "@material-ui/core";
import Block, {Block_foo} from "./components/Block";
import Board from "./components/Board";
import {Grid} from "@material-ui/core";
import NavBar from "./components/NavBar";
import Data from './util';

function App() {







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
                  <Block data={trans}/>
                  <Block data={chips}/>
                  <Block data={boards}/>
                  <Block data={cpus}/>

              </Grid>
          </Grid>
{/*<Footer/>*/}
      </>
  );
}

export default App;
