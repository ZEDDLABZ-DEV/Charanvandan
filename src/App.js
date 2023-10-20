import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, ServiceDetails, Services } from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { NotFound } from './Pages/404';


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='*' Component={NotFound} />
      <Route path='/' Component={Home} />
      <Route path='/services' Component={Services} />
      <Route path='/service-details/:id' Component={ServiceDetails} />
      <Route path='/contact' Component={Contact} />
    </Routes>
  </BrowserRouter>
}

export default App;
