import Counter from '../components/Counter';
import {incAction,decAction} from '../actions/counter';
import {connect} from 'react-redux';

const mapStateToProps  = (state) => ({
    counter:state.count
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement:() => {dispatch(incAction)},
    onDecrement:() => {dispatch(decAction)}
})

const ConCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default ConCounter;