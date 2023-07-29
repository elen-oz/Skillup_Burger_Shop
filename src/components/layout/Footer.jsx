import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer_container'>
          <div>
            <div className='footer_text'>
              <p>All rights reserved by @burgershop &#9400; {new Date().getFullYear()}</p>
            </div>
          </div>

          <aside>
            <p>Follow Us</p>
            <div className='aside-links'>
              <a href='./'>
                <AiFillYoutube />
              </a>
              <a href='./'>
                <AiFillInstagram />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
