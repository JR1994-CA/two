import {data as Data} from "./Data";
import {UfortyTwo,URow,UPhoneBox,URobot} from "./Data";

class pie {
    static trans: Data = new Data("Transistor", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: (val:number) => 0 ,
        boards: (val:number) => 0,
        cpus: (val:number) => 0

    });

    static cpus: Data = new Data("Cpus", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: (val:number) =>  Math.round((5 + val) * 10),
         boards: (val:number) =>  Math.round((1 + val ) * 15),
        cpus: (val:number) => Math.round((1 + val) * 1.1)
    });

    static boards: Data = new Data("Boards", {
        trans: (val:number) => Math.round((50+val)**1.25*0.75),
        chips: (val:number) => Math.round((1+val)**1.25*0.65),
        boards: (val:number) => {
            if(pie.chips.qty>2000)
                return(Math.round((1.1*val)**1.5*0.75))
            return 0;
        },
        cpus: (val:number) => 0,
    });

    static chips: Data = new Data("Chips", {
        trans: (val:number) =>Math.round((1+val)**2.5*1.1),
        chips: (val:number) => Math.round((1+val)**1.5*0.75),
        boards: (val:number) =>0,
        cpus: (val:number) => 0,
    });

    static fortyTwo: UfortyTwo = new UfortyTwo("42", {
        trans: (val: number) => Math.round((1 + val) ** 1.5 * 0.9),
        chips: (val:number) => 0,
        boards: (val:number) => 0,
        cpus: (val:number) => 0,
    },);

    static phonebox: UPhoneBox = new UPhoneBox("Phone Box", {
        trans: (val:number) => Math.round((40+val)**1.25*0.8),
        chips: (val:number) => Math.round((1+val)**1.25*0.75) ,
        boards: (val:number) => 0,
        cpus: (val:number) => 0,
    });

    static rowboat: URow = new URow("RowBoat", {
        trans: (val:number) =>  Math.round((60+val)**1.25*1.1),
        chips: (val:number) => Math.round((10+val)**1.25*0.8),
        boards: (val:number) => Math.round((1+val)**1.25*0.8),
        cpus: (val:number) => 0,
    },);

    static robot: URobot = new URobot("Robot", {
        trans: (val:number) =>  Math.round((70+val)**1.25*2),
        chips: (val:number) =>  Math.round((20+val)**1.25*2),
        boards: (val:number) =>  Math.round((10+val)**1.25*0.8),
        cpus: (val:number) => Math.round((1+val)**1.25*0.8),
    },);
    static upLvl = 0;
    static listO_Open =[pie.trans];
    static listO_Up:Data[] =  [];

}

export default pie