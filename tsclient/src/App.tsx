import {Container, Divider} from "@material-ui/core";
import Block from "./components/Block";
import {Grid} from "@material-ui/core";
import NavBar from "./components/NavBar";
import pie from "./OtherStuff/Holding"
import Footer from "./components/Footer";

function App() {

  return (
      <>
        <NavBar/>
        <Grid container>
        </Grid>
        <Divider/>
        <Grid container>
          <Grid item>
            {/*Dynamically input blocks?*/}
            {/*<Block curr_block={"Transistor"} costFun={(upgrade) => (upgrade + 20) * 2} curr_count={objodata}/>*/}
            {/*<Block curr_block={"Boards"} costFun={(upgrade) => (upgrade + 20) * 2} curr_count={objodata}/>*/}
            <Block data={pie.trans} pie={pie}/>
            <Block data={pie.chips} pie={pie}/>
            <Block data={pie.boards} pie={pie}/>
            <Block data={pie.cpus} pie={pie}/>

          </Grid>
        </Grid>
        <Footer/>
      </>
  );
}

export default App;
