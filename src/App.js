
import './App.css';
import Login  from './Login';
import Home from './Home';
import Register from './Register';
import Search from './Search';
import List from './List';
import RateandComment from './RateandComment';
import RegisterServices from './RegisterServices';
import Comments from './Comments';
import Profile from './Profile';
import {Router,Link, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/list' component={List}/>
      <Route exact path='/rateandcomment' component={RateandComment}/>
      <Route exact path='/registerservices' component={RegisterServices}/>
      <Route exact path='/comments' component={Comments}/>
      <Route exact path='/profile' component={Profile}/>
      <ToastContainer />
    </div>
  );

}

export default App;
