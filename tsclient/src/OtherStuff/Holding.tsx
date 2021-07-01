import Data, {upgrade} from "./Util";

class pie
{
    static  chips:Data = new Data("Chips");
    static boards:Data = new Data("Boards");
    static trans:Data = new Data("Transistor");
    static cpus:Data = new Data("Cpus");
    static robot:Data = new upgrade("Robot")
    static fortyTwo:Data = new upgrade("42")
    static rowboat:Data = new upgrade("RowBoat")
    static phonebox:Data = new upgrade("Phone Box")
}

export default pie