import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import logo from './logo.svg';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Erroe404 from './Pages/Erroe404';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Main from './Pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Main/>}>
                  <Route index element={<Home/>} />
                  <Route path='about' element={<About/>} />
                  <Route path='gallery' element={<Gallery/>} />
                  <Route path='contact' element={<Contact/>} />
                  <Route  path='*' element={<Erroe404/>}/>
            </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
