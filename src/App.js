import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ToDoPage from './Pages/ToDoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <ToDoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
