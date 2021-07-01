import Data, {upgrade} from "./Util";

class pie {
    static chips: Data = new Data("Chips", {
        chips: (val:number) => (20 + val) * 2,
         boards: (val:number) =>  Math.round((5 + val ) * 1.5),
        cpus: (val:number) => (1 + val) * 1.001

    });

    static boards: Data = new Data("Boards", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        },
    });

    static trans: Data = new Data("Transistor", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    }, 1 );

    static cpus: Data = new Data("Cpus", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    });

    static robot: Data = new upgrade("Robot", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static fortyTwo: Data = new upgrade("42", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static rowboat: Data = new upgrade("RowBoat", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static phonebox: Data = new upgrade("Phone Box", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })


}

export default pie