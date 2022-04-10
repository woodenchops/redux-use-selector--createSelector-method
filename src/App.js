import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { getCounterState } from './selectors/counter';
import { getLoggedState } from './selectors/logged';
import {counterActions, loggedInActions} from './actions/index'

function App() {
  const counter = useSelector(getCounterState);
  const isLogged = useSelector(getLoggedState);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(counterActions.increment(5))}>+</button>
    <button onClick={() => dispatch(counterActions.decrement())}>-</button><br></br>
    {isLogged && (<h3>is logged</h3>)}
    <button onClick={() => dispatch(loggedInActions.toggleLoggedStatus())}>Toggle logged in state</button>

    </div>
  );
}

export default App;
