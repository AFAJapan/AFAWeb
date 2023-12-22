import React from 'react';
import '../../../../styles/SubHeader.css';

export default function SubHeader({isMobile}) {
  return (
    <>
      {
        !isMobile ? (
          <div className='subheader_container'>
            <a className='header_link_first' href='/'>Home</a>
            <a className='header_link' href='/aboutus'>About Us</a>
            <a className='header_link' href='/membership'>Membership</a>
            <a className='header_link' href='/kidsacademy'>AFA Kids Academy</a>
            <a className='header_link' href='/kidsacademy#teamsection'>Teams</a>
            <a className='header_link' href='/asl'>Aalthara Super League</a>
            <a className='header_link' href='/contact'>Contact us</a>
          </div>
        ) : (
          <div className='subheader_container_mobile'>
             <div className='subheader_menu'>
              <a className='header_link_mobile' href='/'>Home</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/aboutus'>About Us</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/membership'>Membership</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/kidsacademy'>AFA Kids Academy</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/kidsacademy#teamsection'>Teams</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/asl'>Aalthara Super League</a>
            </div>
            <div className='subheader_menu'>
              <a className='header_link_mobile' href='/contact'>Contact us</a>
            </div>
          </div>
        )
      }
    </>
  )
}
