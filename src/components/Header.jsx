import React from "react";
import hamza from "../assets/hamza.jpg";

const Header = () => {
  return (
    <div className='header-section'>
      <div className='brand'>
        <img src={hamza} alt='hamza' />
        <div>
          <h1>Bouhadjila Hamza</h1>
          <small>hamzabouhadjila@gmail.com</small>
        </div>
      </div>
      <ul className='socials'>
        <li>
          <a
            href='https://www.facebook.com/bouhadjila.hamza'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/hamza_bouhadjila_the_second/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-instagram'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/bouhadjila-hamza-486155ba/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Yupher'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-github'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
