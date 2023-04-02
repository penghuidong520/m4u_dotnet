import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import widgets from './components/widgets/widgets';

function App(): JSX.Element {
  return (
    <div className='app-container'>
        <div className="container">
            <Route path="/checkout" component={widgets}/>
            <div className="widget">column 1</div>
            <div className="widget">column 2</div>
            <div className="widget">column 3</div>
            <div className="widget">column 4</div>
            <div className="widget">column 5</div>
        </div>
    </div>
  );
}

export default App;