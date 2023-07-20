import Home from './pages/home/home';
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Receipt from './pages/receipt/receiptpage';
import Login from './pages/login/login';
function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/receipt" element={<Receipt/>} />
          <Route path="/" element={<Login/>} />                                
        
        </Routes>  
        
      </Router>
      
    </div>
  );
}

export default App;
