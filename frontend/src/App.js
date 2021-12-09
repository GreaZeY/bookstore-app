

import './App.css';
import { BrowserRouter as Routes,Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home.jsx';
import LoginAndSignUp from './Components/User/LoginAndSignup';
import ProtectedRoute from './Components/Route/ProtectedRoute'
import Profile from './Components/User/Profile'
import ResetPassword from './Components/User/ResetPassword'
import Books from './Components/AllBooks/Books.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx'

function App() {
 
  return (

    <Routes>
       <Header/>
     <Route exact path='/' component={Home}/>
     <Route exact path = "/login" component={LoginAndSignUp}/>
     <ProtectedRoute exact path = "/profile" component={Profile}/>
     <ProtectedRoute exact path = "/wishlist" component={Wishlist}/>
     <Route exact path = "/password/reset/:token" component={ResetPassword}/>
     <Route exact path = "/books" component={Books} />
    </Routes>

  );
}

export default App;
