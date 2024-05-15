import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { NavFolder } from './NavFolder';
import { NavItem } from './NavItem';
import { HamburgerIcon } from './HamburgerIcon';
import { CloseIcon } from './CloseIcon';

import SFUcsssLogo from '../images/SFUcsssLogoWhite.png';
import sideBar from '../images/sideBar.png';
import python from '../images/python.png';

import downArrow from '../images/downArrow.svg';

export const NavBar = ({ children }) => {
  const location = useLocation();

  // for mobile nav bars
  const [isOpen, setIsOpen] = useState(false);

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
    // you can use the location value to determine which nav item is selected
    console.log('new location: ' + location);
  }, [location]);

  return (
    <>
      {/*
        NOTE: There are two nav bars inside this component. It would be
        easier to work with and easier to read if they were separate
        components, used in a central "NavBar" component.

        NOTE 2: We should aim to display the navbar and page using a grid.
        That is, we should prefer to have the navbar fill whatever space it
        is given, and not be "fixed" to the viewport.
      */}

      {/* BEGIN WHAT COULD BE NavBarMobile */}
      {/* TODO: Separate components for NavBarMobile */}
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
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
      {/* END WHAT COULD BE NavBarMobile */}

      {/* BEGIN WHAT SHOULD BE NavBarDesktop */}
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
          {/*
            The following components can simply be replaced with:
          {children}
            To allow for customizable navbars, regardless of application.
          */}
          <NavItem text="home.py" to="/" />
          <NavFolder text="about">
            <NavItem text="about.py" to="/about" isInFolder={true} />
            <NavItem text="officers.py" to="/officers" isInFolder={true} />
            <NavItem
              text="past_officers.py"
              to="/officers/past"
              isInFolder={true}
            />
          </NavFolder>
          <NavFolder text="Documents">
            <NavItem
              text="constitution.py"
              to="/documents/constitution"
              isInFolder={true}
            />
            <NavItem
              text="policies.py"
              to="/documents/policies"
              isInFolder={true}
            />
            <NavItem
              text="council_minutes.py"
              to="/documents/council_minutes"
              isInFolder={true}
            />
            <NavItem
              text="gallery.py"
              to="/documents/gallery"
              isInFolder={true}
            />
            <NavItem
              text="upload_media.py"
              to="/documents/upload_media"
              isInFolder={true}
            />
          </NavFolder>
          <NavFolder text="Events">
            <NavItem
              text="frequent_events.py"
              to="/events/frequent_events"
              isInFolder={true}
            />
            <NavItem
              text="tech_fair.py"
              to="/events/tech_fair"
              isInFolder={true}
            />
            <NavItem text="frosh.py" to="/events/frosh" isInFolder={true} />
            <NavItem
              text="mountain_madness.py"
              to="/events/mountain_madness"
              isInFolder={true}
            />
            <NavItem
              text="fall_hacks.py"
              to="/events/fall_hacks"
              isInFolder={true}
            />
            <NavItem
              text="workshops.py"
              to="/events/workshops"
              isInFolder={true}
            />
          </NavFolder>
          <NavItem text="elections.py" to="/elections" />
          <NavFolder text="More">
            <NavItem text="software.py" to="/more/software" isInFolder={true} />
            <NavItem text="awards.py" to="/more/awards" isInFolder={true} />
            <NavItem
              text="clubs_and_unions.py"
              to="/more/clubs_and_unions"
              isInFolder={true}
            />
          </NavFolder>
        </div>

        {isOpen && <div className="fixed inset-0 bg-white bg-opacity-95"></div>}
      </div>
      {/* END WHAT SHOULD BE NavBarDesktop */}
    </>
  );
};
