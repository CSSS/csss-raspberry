import React, { useState, useEffect } from 'react';

import SFUcsssLogo from '../images/SFUcsssLogoWhite.png';
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

  return (
    <>
      <div className="lg:hidden fixed w-screen background-400 z-40">
        <div className="flex justify-between items-center">
          <a
            className="z-10 px-4 py-5 text-lg font-400 text-red-200 lg:text-xl"
            href="/"
          >
            <img className="w-12" src={SFUcsssLogo}></img>
          </a>
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
              <a
                className="text-xl mr-6 lg:mr-0 transition duration-300 ease-in-out  font-300 text-black lg:text-opacity-30 lg:hover:text-red-600 lg:text-lg"
                href="/?view=projects"
              >
                (TODO)
              </a>
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
          <a className="z-30 lg:w-max px-2 py-3" href="/">
            <img className="w-8 opacity-30" src={SFUcsssLogo}></img>
          </a>
        </div>
        <div className="h-max gap-1.5 items-center flex text-md w-full px-14 ml-1 py-3">
          <img className="w-3 pt-0.5" src={downArrow}></img>
          <h2 className="font-300 text-white">computing-science-sfu</h2>
        </div>
        <div
          className={`z-10  w-full left-12 pl-1 absolute h-screen top-10 flex justify-start lg:flex flex text-left lg:flex-col ${isOpen ? 'block' : 'hidden'}`}
        >
          <a
            className="background-400 py-1 px-2 text-md font-400 flex items-center gap-2 text-white navTab"
            href="/"
          >
            <img className="w-4 opacity-80 h-4" src={python}></img>
            home.py
          </a>

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
              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=about/whoweare"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                WhoWeAre.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=about/listofcurrentofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                ListOfCurrentOfficers.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=about/listofpastofficers"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                ListOfPastOfficers.py
              </a>
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
              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=documents/csssconstitution"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSConstitution.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=documents/cssspolicies"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSPolicies.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=documents/sfsscouncilminutes"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                SFSSCouncilMinutes.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=documents/csssgallery"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSGallery.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=documents/csssmediafromevents"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                UploadMedia.py
              </a>
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
              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/regularevents"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                RegularEvents.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/techfairs"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                TechFairs.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/csssfroshweek"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                CSSSFroshWeek.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/mountainmadness"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                MountainMadness.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/fallhacks"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                FallHacks.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=events/workshops"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                Workshops.py
              </a>
            </>
          ) : (
            <div></div>
          )}

          <a
            className="background-400 py-1 px-2 text-md font-300 flex items-center gap-2 text-white navTab"
            href="/"
          >
            <img className="w-4 opacity-80 h-4" src={python}></img>
            elections.py
          </a>

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
              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=more/softwareguides"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                SoftwareGuides.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=more/bursariesandawards"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                BursariesAndAwards.py
              </a>

              <a
                className="background-400 py-1 px-10 text-md font-300 flex items-center gap-2 text-100 navTab"
                href="/?view=more/associatedclubsanddsu"
              >
                <img className="w-4 opacity-80 h-4" src={python}></img>
                AssociatedClubs.py
              </a>
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
