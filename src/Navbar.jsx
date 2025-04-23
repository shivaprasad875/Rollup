import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaMastodon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {

  function toggleTheame(){
    document.body.classList.toggle('dark-mode');
  }
  return (
    <div>
      <div id='navbar'>
        <div id='right-nav'>
        
            <span><img src="https://rollupjs.org/rollup-logo.svg" alt="" />
    
              </span>
              <ul>
                <li id='tittle'>Rollup</li>
                <li>
                  <input type="text" placeholder='search' class="input-text"   />
                  <FaSearch  id='icon'/>
                </li>
              </ul>
        </div>
          <div id='left-nav'>
            <ol id='hover'>
                <li>guide</li>
                <li>repl</li>
                <li>chat</li>
                <li>opencollective</li>
                <li>|</li>
                <li>icon</li>
                <li>|</li>
                <li><button onClick={toggleTheame}> <MdDarkMode /></button></li>
                <li>|</li>
                <li><FaGithub /></li>
                <li><FaMastodon /></li>
            </ol>

          </div>
      </div>
    </div>
  )
}

export default Navbar
