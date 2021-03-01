import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Welcome from './components/Welcome/Welcome';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/room/:roomId" component={Chat} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
