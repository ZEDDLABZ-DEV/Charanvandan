import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, TermsAndCondition, PrivacyPolicy, CampaignDetails, Campaign} from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { NotFound } from './Pages/404';



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='*' Component={NotFound} />
      <Route path='/' Component={Home} />
      <Route path='/services' Component={Campaign} />
      <Route path='/service-details/:id' Component={CampaignDetails} />
      <Route path='/contact' Component={Contact} />
      <Route path='/terms-and-conditions' Component={TermsAndCondition} />
      <Route path='/privacy-policies' Component={PrivacyPolicy} />
    </Routes>
  </BrowserRouter>
}

export default App;
