import Data, {UfortyTwo, upgrade, UPhoneBox, URobot, URow} from "./Util";
import data from "./Util";

class pie {
    static cpus: Data = new Data("Cpus", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: (val:number) =>  Math.round((1 + val) * 10),
         boards: (val:number) =>  Math.round((5 + val ) * 15),
        cpus: (val:number) => Math.round((1 + val) * 1.1)
    });

    static boards: Data = new Data("Boards", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => 0,
        cpus: (val:number) => 0,
    });

    static trans: Data = new Data("Transistor", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: (val:number) => 0 ,
        boards: (val:number) => 0,
        cpus: (val:number) => 0

    });

    static chips: Data = new Data("Chips", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => 0,
        cpus: (val:number) => 0,
    });

    static robot: URobot = new URobot("Robot", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => val,
        cpus: (val:number) => val,
    },);

    static fortyTwo: UfortyTwo = new UfortyTwo("42", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => val,
        cpus: (val:number) => val,
    },);

    static rowboat: URow = new URow("RowBoat", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => val,
        cpus: (val:number) => val,
    },);

    static phonebox: UPhoneBox = new UPhoneBox("Phone Box", {
        trans: (val:number) => val,
        chips: (val:number) => val,
        boards: (val:number) => val,
        cpus: (val:number) => val,
    });

    static upLvl = 0;
    static listO_Open =[pie.trans];
    static listO_Up:data[] =  [];

}

export default pie