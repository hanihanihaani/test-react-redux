import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
// import {Provider,connect} from "react-redux";
import {Provider} from 'react-redux';
// import Counter from "./components/Counter";
import reducer from "./reducers/counter";
// import {incAction,decAction} from "./actions/counter";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';


const store = createStore(reducer);

// function mapStateToProps(state){
//   return {counter:state.count}
// }

// function mapDispatchToProps(dispatch){
//   return {
//     onIncrement:() => {dispatch(incAction),
//       console.log("dispatch",incAction)},
//     onDecrement:() => dispatch(decAction)
//   }
// }

// const App = connect(
//      mapStateToProps,
//      mapDispatchToProps
//   )(Counter)

ReactDOM.render( 
      <Provider store={store}>
        <App/>
      </Provider>,
    document.getElementById('root')
    )

registerServiceWorker();
