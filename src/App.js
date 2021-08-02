
import './App.css';
import Login  from './Login';
import Home from './Home';
import Register from './Register';
import {Router,Link, Route} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register}/>

    </div>
  );

}

export default App;
