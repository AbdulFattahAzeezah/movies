import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import { Movie } from './Pages/Movie';
import { Notfound } from './Pages/Notfound';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:movieId' component={Movie} />
          <Route exact path='' component={Notfound} />
        </Switch>
      </Router>

      
      <GlobalStyle />
    </>
  )

}

export default App;
