import './App.css';
import Home from "./Pages/Home.js"
import LoginPage from './Auth/LoginPage';
import SigninPage from './Auth/SigninPage';
import SpecificItem from './Pages/SpecificItem';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SigninPage />} />

      </Routes>
    </Router>
  );
}

export default App;
