import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SFURoboticSoccerLogo from '../images/SFUcsssLogoWhite.png';
import sideBar from '../images/sideBar.png';
import python from '../images/python.png';
import folder from '../images/folder.png';
import downArrow from '../images/downArrow.svg';
import rightArrow from '../images/rightArrow.svg';
import { ThreeLines } from './ThreeLines';
import { CloseIcon } from './X';

export const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const aboutOpenFunction = () => {
    setAboutOpen(!aboutOpen);
  };

  const documentsOpenFunction = () => {
    setDocumentsOpen(!documentsOpen);
  };

  const eventsOpenFunction = () => {
    setEventsOpen(!eventsOpen);
  };

  const moreOpenFunction = () => {
    setMoreOpen(!moreOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  return (
    <>
      <div className="lg:hidden fixed w-screen background-400 z-40">
        <div className="flex justify-between items-center">
          <Link
            className="z-10 px-4 py-5 text-lg font-400 text-red-200 lg:text-xl"
            to="/"
          >
            <img className="w-12" src={SFURoboticSoccerLogo}></img>
          </Link>
          <div className="flex flex-col absolute right-0 top-0">
            <div className="z-10 lg:hidden px-4 py-3 text-right">
              <button
                onClick={toggleNavbar}
                className="text-red-200 focus:outline-none"
              >
                {isOpen ? <CloseIcon /> : <ThreeLines />}
              </button>
            </div>
            <div
              className={`z-10 w-screen flex justify-center lg:flex space-y-4 lg:space-y-0 flex px-4 py-6 lg:py-8 text-right flex-col lg:flex-row lg:space-x-10 ${isOpen ? 'block' : 'hidden'}`}
            >
              <Link
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out  font-300 text-black lg:text-opacity-30 lg:hover:text-red-600 lg:text-lg"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out lg:text-opacity-30  lg:hover:text-red-600 font-300 text-black lg:text-lg"
                to="/teams"
              >
                Teams
              </Link>
              <Link
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out  font-300 text-black lg:text-opacity-30 lg:hover:text-red-600 lg:text-lg"
                to="/sponsors"
              >
                Sponsors
              </Link>
              <Link
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out  font-300 text-black lg:text-opacity-30 lg:hover:text-red-600 lg:text-lg"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out  font-300 text-black lg:text-opacity-30 lg:hover:text-red-600 lg:text-lg"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-95"></div>
        )}
        <Link to="/resources">
          <button className="hidden lg:z-10 lg:block lg:absolute lg:top-6 lg:right-10 primaryButton lg:text-md">
            Join our Team ↗
          </button>
        </Link>
      </div>

      <div className="hidden lg:fixed lg:flex lg:h-screen overflow-y-scroll overflow-x-hidden lg:w-80 background-400 border-600">
        <img className="fixed w-14 pr-1" src={sideBar}></img>
        <div className="lg:flex fixed lg:flex-col background-700 h-max">
          <Link className="z-30 lg:w-max px-2 py-3" to="/">
            <img className="w-8 opacity-30" src={SFURoboticSoccerLogo}></img>
          </Link>
        </div>
        <div className="h-max gap-1.5 items-center flex text-md w-full px-14 ml-1 py-3">
          <img className="w-3 pt-0.5" src={downArrow}></img>
          <h2 className="font-300 text-white">computing-science-sfu</h2>
        </div>
        <div
          className={`z-10  w-full left-12 pl-1 absolute h-screen top-10 flex justify-start lg:flex flex text-left lg:flex-col ${isOpen ? 'block' : 'hidden'}`}
        >
          <Link
            className="background-400 py-1 px-2 text-md font-400 flex items-center gap-2 text-white navTab"
            to="/"
          >
            <img className="w-4 opacity-80 h-4" src={python}></img>
            home.py
          </Link>

          <button
            onClick={aboutOpenFunction}
            className="background-400 py-1 px-2.5 text-md font-300 flex items-center gap-0 text-300 navTab"
          >
            {aboutOpen ? (
              <img className="w-3 pt-0" src={downArrow}></img>
            ) : (
              <img className=" w-3 pt-0" src={rightArrow}></img>
            )}
            <img
              className="w-6 ml-1 opacity-100 h-5 mix-blend-lighten"
              src={folder}
            ></img>
            About
          </button>
          {aboutOpen ? (
            <>
              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/whoweare"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                WhoWeAre.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofcurrentofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                ListOfCurrentOfficers.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                ListOfPastOfficers.py
              </Link>
            </>
          ) : (
            <div></div>
          )}

          <button
            onClick={documentsOpenFunction}
            className="background-400 py-1 px-2.5 text-md font-300 flex items-center gap-0 text-300 navTab"
          >
            {documentsOpen ? (
              <img className="w-3 pt-0" src={downArrow}></img>
            ) : (
              <img className=" w-3 pt-0" src={rightArrow}></img>
            )}
            <img
              className="w-6 ml-1 opacity-100 h-5 mix-blend-lighten"
              src={folder}
            ></img>
            Documents
          </button>

          {documentsOpen ? (
            <>
              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/whoweare"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSConstitution.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofcurrentofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSPolicies.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                SFSSCouncilMinutes.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSGallery.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                UploadMedia .py
              </Link>
            </>
          ) : (
            <div></div>
          )}

          <button
            onClick={eventsOpenFunction}
            className="background-400 py-1 px-2.5 text-md font-300 flex items-center gap-0 text-300 navTab"
          >
            {eventsOpen ? (
              <img className="w-3 pt-0" src={downArrow}></img>
            ) : (
              <img className=" w-3 pt-0" src={rightArrow}></img>
            )}
            <img
              className="w-6 ml-1 opacity-100 h-5 mix-blend-lighten"
              src={folder}
            ></img>
            Events
          </button>

          {eventsOpen ? (
            <>
              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/whoweare"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                RegularEvents.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofcurrentofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                TechFairs.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSFroshWeek.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                MountainMadness.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                FallHacks.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                Workshops.py
              </Link>
            </>
          ) : (
            <div></div>
          )}

          <Link
            className="background-400 py-1 px-2 text-md font-300 flex items-center gap-2 text-white navTab"
            to="/"
          >
            <img className="w-4 opacity-80 h-4" src={python}></img>
            elections.py
          </Link>

          <button
            onClick={moreOpenFunction}
            className="background-400 py-1 px-2.5 text-md font-300 flex items-center gap-0 text-300 navTab"
          >
            {moreOpen ? (
              <img className="w-3 pt-0" src={downArrow}></img>
            ) : (
              <img className=" w-3 pt-0" src={rightArrow}></img>
            )}
            <img
              className="w-6 ml-1 opacity-100 h-5 mix-blend-lighten"
              src={folder}
            ></img>
            More
          </button>

          {moreOpen ? (
            <>
              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/whoweare"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                SoftwareGuides.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofcurrentofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                BursariesAndAwards.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                AssociatedClubs.py
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>

        {isOpen && <div className="fixed inset-0 bg-white bg-opacity-95"></div>}
      </div>
    </>
  );
};
