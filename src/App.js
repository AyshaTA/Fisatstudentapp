import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}></Route>
      <Route path='/Search' element={<Search/>}></Route>
      <Route path='/View' element={<View/>}></Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
