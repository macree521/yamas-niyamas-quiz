import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import './styles/index.css';
import './styles/form.css';
import './styles/card.css';
import ToDoPage from './Pages/ToDoPage';
import ShowPage from './Pages/showPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <ToDoPage />
          </Route>

          <Route path='/:id'>
            <ShowPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
