import {Container, Divider} from "@material-ui/core";
import Block, {Block_foo} from "./components/Block";
import Board from "./components/Board";
import {Grid} from "@material-ui/core";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import test from "./components/test";
function App() {
    // const block_count=0;
    const objodata=150;

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
                    <Block_foo/>
                  <Block items={  } curr_block={"Chips"} costFun={
                      {
                            Trans:(upgrade)=> (upgrade + 20) * 2,
                            Chips:(upgrade)=> (20 + upgrade) * 45
                        }

                  } curr_count={objodata}/>
              </Grid>
          </Grid>
{/*<Footer/>*/}
      </>
  );
}

export default App;
