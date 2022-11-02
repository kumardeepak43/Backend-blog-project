import './Components/style.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Bollywood from './Components/Bollywood'
import Hollywood from './Components/Hollywood'
import Food from './Components/Food'
import Technology from './Components/Technology'
import Places from './Components/Places'
import Articles from './Components/Articles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from './Components/data';


function App() {


  return (
    <>
      <Data>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/hollywood' element={<Hollywood />} />
            <Route path='/places' element={<Places />} />
            <Route path="/:path/article/:path" element={<Articles />} />
            <Route path='/food' element={<Food />} />
          </Routes>

        </BrowserRouter>
      </Data>
    </>
  );
}


export default App;