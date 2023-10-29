import './App.css';
import Home from "./Pages/Home.js"
import LoginPage from './Auth/LoginPage';
import SigninPage from './Auth/SigninPage';
import SpecificItem from './Pages/SpecificItem';
import SpecificCategory from './Pages/SpecificCategory';
import Cart from './Pages/Cart.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GetContextData from './Context/GetContextData';
import FilterContext from './Context/FilterContext';
function App() {
  return (
    <GetContextData>
      <FilterContext>
    <Router>
      <div className="App">

      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sc' element={<SpecificCategory />} />
        <Route path='/si/:id' element={<SpecificItem />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SigninPage />} />

      </Routes>
    </Router>
    </FilterContext>
    </GetContextData>
  )
}

export default App;
