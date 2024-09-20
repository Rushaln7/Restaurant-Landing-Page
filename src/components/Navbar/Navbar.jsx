import React, { useState } from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images'
import './Navbar.css';


const Navbar = () => {

const [toggleMenu, settoggleMenu] = useState(false)

  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.Grandéur} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book a Table</a>
      </div>
      <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => settoggleMenu(true) } />
          
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => settoggleMenu(false) } />
              <ul className="app__navbar-smallscreen_links">
                <li className='p__opensans'><a href="#home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#awards">Awards</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
    </nav>
  )
}
export default Navbar;
