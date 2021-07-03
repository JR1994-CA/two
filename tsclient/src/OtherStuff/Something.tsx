import pie from './Holding';
class Something {


    constructor(chips = 10000,
                trans = 1000,
                boards = 10000,
                cpus = 10000 , x = pie.chips) {
        this.chips = chips;
        this.trans = trans;
        this.boards = boards;
        this.cpus = cpus;
        this.x = x;
    }
    chips=10000
    trans=1000
    boards=10000
    cpus=10000
    x = pie.chips;

}


export let uRobots =new Something(0,100,0,0);
export let uChips=new Something(0,1000,0,0);
export let uBoards=new Something(1000,10_000,0,0);
export let uCpus=new Something(30000,100000,100000,0);

export let uOrder = [
    new Something(0,1000,0,0,pie.chips),
    new Something(1000,10_000,0,0,pie.boards),
    new Something(30000,100000,100000,0,pie.cpus)];