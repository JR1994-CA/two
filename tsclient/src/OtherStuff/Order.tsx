import pie from './Init';
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

 let uOrder = [
    // new Something(-100000000,-100000000,-100000000,-100000000,pie.fortyTwo),
    // new Something(-1000,-1000,-1000,-1000,pie.fortyTwo),
     new Something(0,1000,0,0,pie.fortyTwo),
    new Something(0,1000,0,0,pie.chips),
    new Something(10000,10000,0,0,pie.phonebox),
    new Something(1000,10_000,0,0,pie.boards),
    new Something(100000,100000,10000,0,pie.rowboat),
    new Something(30000,100000,100000,0,pie.cpus),
    new Something(300000,3000000,30000,300000,pie.robot)
];

export default uOrder;