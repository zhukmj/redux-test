import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MoviesListPage } from './features/movies/MoviesListPage';
import { MovieDetailsPage } from './features/movies/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MoviesListPage} />
          <Route path="/:id" exact component={MovieDetailsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
