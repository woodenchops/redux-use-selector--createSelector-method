import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { getCounterState } from './selectors/counter';
import { getLoggedState } from './selectors/logged';
import {counterActions, loggedInActions} from './actions/index'
import { One } from './pages/One';
import { Two } from './pages/Two';
import { Three } from './pages/Three';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


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




    <BrowserRouter>

    <nav>
        <ul>
          <li>
            <Link to="/one">one</Link>
          </li>
          <li>
            <Link to="/two">two</Link>
          </li>
          <li>
            <Link to="/three">three</Link>
          </li>
        </ul>
      </nav>


      <Routes>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
      </Routes>
    </BrowserRouter>


    </div>

  );

  }

export default App;
