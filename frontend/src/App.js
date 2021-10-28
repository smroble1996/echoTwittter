// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home';
import Tweet from './Components/Tweet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Nav />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/Tweets" exact component={Tweet} />
       </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
