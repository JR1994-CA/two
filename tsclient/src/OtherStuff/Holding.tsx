import Data, {upgrade} from "./Util";

class pie {
    static chips: Data = new Data("Chips", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    });

    static boards: Data = new Data("Boards", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    });

    static trans: Data = new Data("Transistor", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    });

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