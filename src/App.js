import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Dummy from './component/Dummy';


function App() {
  return (
    <div className="App">
      <Routes>
           <Route path = "/" element = {<Home />}/>
            <Route path = "about" element = {<About />}/>
            <Route path = "dummy" element = {<Dummy />}/>
      </Routes>
    </div>
  );
}

export default App;
