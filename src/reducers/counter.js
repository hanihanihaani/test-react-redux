import {COUNTER_INC,COUNTER_DEC} from "../actions/counter";

const counter = (state={count:0},action) =>{
  const count = state.count
  switch (action.type) {
    case COUNTER_INC:
     return {count:count+1};
    case COUNTER_DEC:
     return {count:count-1};
    default:
     return state
  }
}

export default counter;