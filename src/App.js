import './App.css';
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home';
import Tourism from './components/tourism';
import Fitness from './components/fitness';
import Technology from './components/technology';
import Bollywood from './components/bollywood';
import Blog from './components/blog';
import Food from './components/food';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tourism' element={<Tourism/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/category/:id/:title' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
