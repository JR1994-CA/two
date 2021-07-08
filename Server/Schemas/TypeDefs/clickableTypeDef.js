const { gql } = require('apollo-server-express');

const clickableTypeDef = gql`
    
    type Clickable {
        tran: [Transistor],
        comp: [Comp],
        Chip: [Chip],
        CPU: [CPU],
        clickmodifier:Int,
        cost: [Cost],
        mod:[Mod],
        curUpgrade:Boolean,
    }
    
    type Transistor {
        count: Int,
        isHide:Boolean
    }

    type Comp {
        count: Int,
        isHide:Boolean
    }

    type Chip {
        count: Int,
        isHide:Boolean
    }
    type CPU {
        count: Int,
        isHide:Boolean
    }
    
    
    type Cost{
        trans: Int,
        comps: Int,
        chips: Int,
        cpus: Int,
    }
    type Mod {
        click: Int,
        per: Int
    }

`;

module.exports = clickableTypeDef;
