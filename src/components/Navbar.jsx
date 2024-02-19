import bear_logo from '../assets/images/bear.png';
import React from 'react';
import { useState } from 'react';
import { FaMoon } from "react-icons/fa";

const darkTheme = "dracula";

export default function NavBar({ onThemeChange }) {
  const [theme, setTheme] = React.useState('bear');
  
  
  const toggleTheme = () => {
    setTheme(theme === darkTheme ? 'bear' : darkTheme);
  };

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className=" ">
      <div className="">
        <div className='flex justify-between items-baseline'>
          <img className='w-[60px] h-[75px] relative top-2 drop-shadow-xl object-cover'  src={bear_logo} alt='bear logo' />
          <a className="btn btn-ghost text-4xl font-Pacifico">Bear</a>
          <ul className="menu menu-horizontal px-1 w-screen flex ">
            <li><a className=''>About</a></li>
            <li><a className=''>Blog</a></li>

            <li>
              <details>
                <summary>
                  More
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none w-[190px]">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li className=' justify-end'>
            </li>
          </ul>
              <FaMoon className='text-3xl text-auto ' onClick={toggleTheme} />
        </div>
      </div>
    </div>
  );
}
