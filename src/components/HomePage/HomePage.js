import React from 'react'
import Banner from './Bannner/Banner';
import '../../styles/HomePage.css';
import Tiles from './Tiles/Tiles';
import Collaborations from './Collaborations/Collaborations';
import Events from './Events/Events';

export default function HomePage({isMobile}) {
  return (
    <div>
      <Banner />
      <div className='homepage_content'>
        <p className='homepage_afa'>At Aalthara Football Association (also known as AFA), we are on a mission to bring the exhilaration of football and futsal to kids and adults across Japan. We are determined to take football to newer heights in this land of the rising sun, creating a vibrant community where sportsmanship, skill development, and fun reign supreme.</p>
        <p className='homepage_vision'>Our vision is to provide wide-ranging opportunities and nurture football enthusiasts of all ages, from children to adults. We firmly believe that football is more than just a game; it is a gateway to personal growth, teamwork, and cultural exchange. Drawing inspiration from the banyan tree, symbolising strength and growth, Aalthara aims to empower individuals and communities through the traditions and culture of football.</p>
      <Tiles isMobile={isMobile} />
      <p className='homepage_objective'>At the heart of our endeavour lies a non-profit objective. We strive to organize regular football and futsal activities, backed by professional training facilitation, to create a platform where players can thrive. Whether you are a budding talent seeking to hone your skills or an adult looking to reignite your passion for the sport,
        AFA is here to support you on your journey.</p>
        <Events isMobile={isMobile} />
        <Collaborations />
      </div>
    </div>
  )
}
