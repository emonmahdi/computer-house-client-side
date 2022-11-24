import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import HeaderNav from './components/Home/HeaderNav/HeaderNav';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <HeaderNav />  
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inventory/:Id' element={
           <RequireAuth>
             <ProductDetails /> 
           </RequireAuth>} 
            /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} /> 

          <Route path='*' element={<NotFound />} /> 
          
       </Routes>
    </div>
  );
}

export default App;
