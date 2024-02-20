import bear_logo from '../assets/images/bear.png';
import React from 'react';
import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";

const darkTheme = "dracula";
const defaultTheme = 'bear'; // Default theme if none is stored


export default function NavBar({ onThemeChange }) {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || defaultTheme);


  function toggleTheme(){
    const newTheme = theme === darkTheme ? defaultTheme : darkTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
  };

  function handleBearClick() {
    console.log('clicked bear');
  }

  function handleMoonClick() {
    toggleTheme();
  }


  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    if (onThemeChange) onThemeChange(theme);
  }, [theme, onThemeChange]);

  return (
    <div className="">
      <div className="">
        <div className='flex justify-between items-baseline'>
          <img className='w-[60px] h-[75px] relative top-2 drop-shadow-xl object-cover' src={bear_logo} alt='bear logo' />
          <a className="btn btn-ghost text-4xl font-Pacifico" onClick={handleBearClick}>Bear</a>
          <ul className="menu menu-horizontal px-1 w-screen flex items-baseline">
            <li><a className='hidden sm:block'>About</a></li>
            <li><a className='hidden  sm:block'>Blog</a></li>

            <li className='sm:hidden'>
              <details className='self-baseline'>
                <summary className=''>
                  More
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none w-[190px]">
                  <li><a>About</a></li>
                  <li><a>Blog</a></li>
                </ul>
              </details>
            </li>
            <li className=' justify-end'>
            </li>
          </ul>
          {/* <button className='btn relative '> */}
          <div className='cursor-pointer hover:bg-base-200 px-[10px] py-[5px] rounded-lg' onClick={handleMoonClick} tabIndex="0">
            <FaMoon className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
}
