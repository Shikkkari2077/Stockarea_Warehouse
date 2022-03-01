import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WareHouse from './components/WareHouse';
import WarehouseList from './components/WarehouseList';


function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
        <Routes>
          <Route excat path='/' element={<WarehouseList/>}/>
          <Route excat path='/Warehouse/:id' element={<WareHouse/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
