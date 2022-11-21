import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">  
       <Routes>
          <Route path='/' element={<Home />} />
      


          <Route path='*' element={<NotFound />} /> 
          
       </Routes>
    </div>
  );
}

export default App;
