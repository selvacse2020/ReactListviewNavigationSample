import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import AssignmentUsingClassComponent from './AssignmentUsingClassComponent';
import AssignmentUsingFunctionComponent from './AssignmentUsingFunctionComponent';

const StaticAPI = {
  lists: [
    { movieId: 1, name: "Joker", rating: 9 },
    { movieId: 2, name: "Glass", rating: 7 },
    { movieId: 3, name: "Escape Room", rating: 6 },
    { movieId: 4, name: "Captain Marvel", rating: 7 },
    { movieId: 5, name: "The Hole in the Ground", rating: 5 },
    { movieId: 6, name: "Avengers: Endgame", rating: 8 }
  ],
  all: function() { return this.lists},
  get: function(id) {
    const isList = p => p.movieId === id
    return this.lists.find(isList)
  }
}

const HomeAssignment = () => (
  <div>
    <ul>
      {
        StaticAPI.all().map(p => (
          <li key={p.movieId}>
            <Link to={`/assignment/${p.movieId}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const HomeAssignmentList = (props) => {
  const movie = StaticAPI.get(
    parseInt(props.match.params.movieId, 10)
  )
  if (!movie) {
    return <div>Sorry, but the movie was not found</div>
  }
  return (
    <div>
      <h1>{movie.name} (#{movie.movieId})</h1>
      <h2>Movie Rating: {movie.rating}</h2>
      <Link to='/assignment'>Back</Link>
    </div>
  )
}

const Assignment = () => (
  <Switch>
    <Route exact path='/assignment' component={HomeAssignment}/>
    <Route path='/assignment/:movieId' component={HomeAssignmentList}/>
  </Switch>
)

const WelcomePage = () => (
  <div>
    <h1>Welcome to the Home Assignment!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/assignment' component={Assignment}/>
      <Route path='/assignmentusingclasscomponent' component={AssignmentUsingClassComponent}/>
      <Route path='/assignmentusingfunctioncomponent' component={AssignmentUsingFunctionComponent}/>       
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Welcome Page</Link></li>
        <li><Link to='/assignment'>Assignment Using StaticAPI</Link></li>
        <li><Link to='/assignmentusingclasscomponent'>Assignment(List) using Class Component</Link></li>
        <li><Link to='/assignmentusingfunctioncomponent'>Assignment(List) using Function Component</Link></li>        
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;