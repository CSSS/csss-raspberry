import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import SFUcsssLogo from '../images/SFUcsssLogoWhite.png';
import sideBar from '../images/sideBar.png';
import python from '../images/python.png';
import folder from '../images/folder.png';
import downArrow from '../images/downArrow.svg';
import rightArrow from '../images/rightArrow.svg';
import { ThreeLines } from './ThreeLines';
import { CloseIcon } from './X';

export const Navbar = () => {
  const location = useLocation();

  const [aboutOpen, setAboutOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // on location changed
  useEffect(() => {
    console.log('new location: ' + location);
  }, [location]);

  return (
    <>
      <div className="lg:hidden fixed w-screen background-400 z-40">
        <div className="flex justify-between items-center">
          <Link
            className="z-10 px-4 py-5 text-lg font-400 text-red-200 lg:text-xl"
            to="/"
          >
            <img className="w-12" src={SFUcsssLogo}></img>
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
                (TODO)
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-95"></div>
        )}
      </div>

      <div className="hidden lg:fixed lg:flex lg:h-screen overflow-y-scroll overflow-x-hidden lg:w-80 background-400 border-600">
        <img className="fixed w-14 pr-1" src={sideBar}></img>
        <div className="lg:flex fixed lg:flex-col background-700 h-max">
          <Link className="z-30 lg:w-max px-2 py-3" to="/">
            <img className="w-8 opacity-30" src={SFUcsssLogo}></img>
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
                to="/about"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                about.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/officers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                officers.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/officers/past"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                past_officers.py
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
                to="/documents/constitution"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                constitution.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/documents/policies"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                policies.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/documents/sfsscouncilminutes"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                council_minutes.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/documents/gallery"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                gallery.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/documents/upload"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                upload_media.py
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
                to="/events/frequent"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                frequent_events.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/events/techfair"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                tech_fair.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/events/frosh"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                frosh_week.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/events/mm"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                mountain_madness.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/events/fallhacks"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                fall_hacks.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/events/workshops"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                workshops.py
              </Link>
            </>
          ) : (
            <div></div>
          )}

          <Link
            className="background-400 py-1 px-2 text-md font-300 flex items-center gap-2 text-white navTab"
            to="/elections"
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
                to="/more/software"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                software.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/more/awards"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                awards.py
              </Link>

              <Link
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                to="/more/shoutout"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                clubs_and_unions.py
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
