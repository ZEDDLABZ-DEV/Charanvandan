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
      <Route path='/campaigns' Component={Campaign} />
      <Route path='/campaign-details/:id' Component={CampaignDetails} />
      <Route path='/contact' Component={Contact} />
      <Route path='/terms-and-condition' Component={TermsAndCondition} />
      <Route path='/privacy-policy' Component={PrivacyPolicy} />
    </Routes>
  </BrowserRouter>
}

export default App;
