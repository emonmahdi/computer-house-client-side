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
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';


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
          <Route path='/manage' element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
            } /> 
          <Route path='/add-new-inventory' element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>
            } /> 
          <Route path='/my-items' element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
            } /> 

          <Route path='/blogs' element={<Blogs />} /> 
          <Route path='*' element={<NotFound />} /> 
          
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
