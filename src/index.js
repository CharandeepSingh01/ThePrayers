import React from 'react';
import ReactDOM from 'react-dom/client';
import Disclaimer from './components/Disclaimer';
import App from './App';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HanumanChalisa from './pages/HanumanChalisa';
import YouAre from './pages/YouAre';
import VinBoleya from './pages/VinBoleya';
import SukhmeSaathi from './pages/SukhmeSaathi';
import SukhmaniSahib from './pages/SukhmaniSahib';
import ShriRadhe from './pages/ShriRadhe';
import LaxmiAarti from './pages/LaxmiAarti';
import ShivChalisa from './pages/ShivChalisa';
import SaraswatiAarti from './pages/SaraswatiAarti';
import SabnakaMaapiyo from './pages/SabnakaMaapiyo';
import RehrasSahib from './pages/RehrasSahib';
import PatanhKisroop from './pages/PatanhKisroop';
import OurFather from './pages/OurFather';
import OmjaiJagdish from './pages/OmjaiJagdish';
import MaulaSalli from './pages/MaulaSalli';
import KirtanSohila from './pages/KirtanSohila';
import JiskeUpar from './pages/JiskeUpar';
import JapjiSahib from './pages/JapjiSahib';
import HasbiRabbi from './pages/HasbiRabbi';
import HareMurari from './pages/HareMurari';
import GayatriMantra from './pages/GayatriMantra';
import GaneshAarti from './pages/GaneshAarti';
import GaganThaal from './pages/GaganThaal';
import EkOnkar from './pages/EkOnkar';
import ChaupaiSahib from './pages/ChaupaiSahib';
import BhajamanRadhe from './pages/BhajamanRadhe';
import Ardaas from './pages/Ardaas';
import AisiKripa from './pages/AisiKripa';
import Adharam from './pages/Adharam';
import AartiKunj from './pages/AartiKunj';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/"  element={<App />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/disclaimer" element={<Disclaimer />}></Route>
        <Route exact path="/hanumanchalisa" element={<HanumanChalisa />}></Route>
        <Route exact path="/youare" element={<YouAre />}></Route>
        <Route exact path="/vinboleya" element={<VinBoleya />}></Route>
        <Route exact path="/sukhmesaathi" element={<SukhmeSaathi />}></Route>
        <Route exact path="/sukhmanisahib" element={<SukhmaniSahib />}></Route>
        <Route exact path="/shriradhe" element={<ShriRadhe />}></Route>
        <Route exact path="/laxmiaarti" element={<LaxmiAarti />}></Route>
        <Route exact path="/shivchalisa" element={<ShivChalisa />}></Route>
        <Route exact path="/saraswatiaarti" element={<SaraswatiAarti />}></Route>
        <Route exact path="/sabnakamaapiyo" element={<SabnakaMaapiyo />}></Route>
        <Route exact path="/rehrassahib" element={<RehrasSahib />}></Route>
        <Route exact path="/patanhkisroop" element={<PatanhKisroop />}></Route>
        <Route exact path="/ourfather" element={<OurFather />}></Route>
        <Route exact path="/omjaijagdish" element={<OmjaiJagdish />}></Route>
        <Route exact path="/maulasalli" element={<MaulaSalli />}></Route>
        <Route exact path="/kirtansohila" element={<KirtanSohila />}></Route>
        <Route exact path="/jiskeupar" element={<JiskeUpar />}></Route>
        <Route exact path="/japjisahib" element={<JapjiSahib />}></Route>
        <Route exact path="/hasbirabbi" element={<HasbiRabbi />}></Route>
        <Route exact path="/haremurari" element={<HareMurari />}></Route>
        <Route exact path="/gayatrimantra" element={<GayatriMantra />}></Route>
        <Route exact path="/ganeshaarti" element={<GaneshAarti />}></Route>
        <Route exact path="/gaganthaal" element={<GaganThaal />}></Route>
        <Route exact path="/ekonkar" element={<EkOnkar />}></Route>
        <Route exact path="/chaupaisahib" element={<ChaupaiSahib />}></Route>
        <Route exact path="/bhajamanradhe" element={<BhajamanRadhe />}></Route>
        <Route exact path="/ardaas" element={<Ardaas />}></Route>
        <Route exact path="/aisikripa" element={<AisiKripa />}></Route>
        <Route exact path="/adharam" element={<Adharam />}></Route>
        <Route exact path="/aartikunj" element={<AartiKunj />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

