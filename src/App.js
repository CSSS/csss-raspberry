import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';
import { Navbar } from './lib/VSCode/navigation/Navbar';
import { ListOfCurrentOfficers } from './pages/About/ListOfCurrentOfficers';
import { ListOfPastOfficers } from './pages/About/ListOfPastOfficers';
import { WhoWrAre } from './pages/About/WhoWeAre';
import { CsssConstitution } from './pages/Documents/csssConstitution';
import { CsssCouncilMin } from './pages/Documents/csssCouncilMin';
import { CsssGallery } from './pages/Documents/csssGallery';
import { CsssMediaFromEvents } from './pages/Documents/csssMediaFromEvents';
import { CsssPolicies } from './pages/Documents/csssPolicies';
import { ElectionsHome } from './pages/Elections/ElectionsHome';
import { CSSSFroshWeek } from './pages/Events/CSSSfroshWeek';
import { FallHacks } from './pages/Events/FallHacks';
import { MountainMadness } from './pages/Events/MountainMadness';
import { RegularEvents } from './pages/Events/RegularEvents';
import { TechFairs } from './pages/Events/TechFairs';
import { Workshops } from './pages/Events/Workshops';
import { Home } from './pages/Home';
import { AssociatedClubsAndDSU } from './pages/More/AssociatedClubsAndDSU';
import { BursuriesAndAwards } from './pages/More/BursuriesAndAwards';
import { SoftwareGuides } from './pages/More/SoftwareGuides';

function App() {
  return (
    <div className="app">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const [isSub, setIsSub] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSub(location.pathname.includes('/apathyoudontwanttoshowthenavbar'));
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ABOUT PAGES */}
        <Route
          path="/about/listofcurrentofficers"
          element={<ListOfCurrentOfficers />}
        />
        <Route
          path="/about/listofpastofficers"
          element={<ListOfPastOfficers />}
        />
        <Route path="/about/whoweare" element={<WhoWrAre />} />

        {/* DOCUMENTS PAGES */}
        <Route
          path="/documents/csssconstitution"
          element={<CsssConstitution />}
        />
        <Route path="/documents/cssspolicies" element={<CsssPolicies />} />
        <Route
          path="/documents/sfsscouncilminutes"
          element={<CsssCouncilMin />}
        />
        <Route path="/documents/csssgallery" element={<CsssGallery />} />
        <Route
          path="/documents/csssmediafromevents"
          element={<CsssMediaFromEvents />}
        />

        {/* EVENTS PAGES */}
        <Route path="/events/regularevents" element={<RegularEvents />} />
        <Route path="/events/techfairs" element={<TechFairs />} />
        <Route path="/events/csssfroshweek" element={<CSSSFroshWeek />} />
        <Route path="/events/mountainmadness" element={<MountainMadness />} />
        <Route path="/events/fallhacks" element={<FallHacks />} />
        <Route path="/events/workshops" element={<Workshops />} />

        {/* ELECTIONS PAGES */}
        <Route path="/elections" element={<ElectionsHome />} />

        {/* MORE PAGES */}
        <Route path="/more/softwareguides" element={<SoftwareGuides />} />
        <Route
          path="/more/bursariesandawards"
          element={<BursuriesAndAwards />}
        />
        <Route
          path="/more/associatedclubsanddsu"
          element={<AssociatedClubsAndDSU />}
        />
      </Routes>
    </>
  );
}

export default App;
