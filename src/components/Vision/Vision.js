import React from 'react';
import '../../styles/Vision.css';

export default function Vision() {
  return (
    <div>
      <div style={{position:'relative', height:'max-content'}}>
        <img className='vision_banner' style={{width:'100%'}} src='/assets/images/visionBanner.svg' alt='aboutUs' />
        <p className='vision_title'>Vision and Mission</p>
      </div>
      <div className='vision_container'>
        <p className='vision_desc'>Vision Our vision is to be a football club in Japan playing and competing in all levels and through the medium of football unite people of different ethnicities by spreading happiness and sportsmanship. </p>
        <div className='vision_points'>
          <p>Our objectives reflect our commitment to excellence and inclusivity:</p>
          <ul>
            <li>
              Build young football talents: We believe in nurturing the potential of young athletes, providing them with the guidance and resources to flourish both on and off the field.
            </li>
            <li>
              League competitions: By being an excellent football team, compete against diverse teams and showcase your abilities in various league competitions, where the spirit of healthy rivalry fuels growth and development.
            </li>
            <li>
              Giving coaching platform: We are dedicated to building a network of qualified coaches who can impart their knowledge and passion, shaping the next generation of football enthusiasts.
            </li>
            <li>
              Spreading football culture: Together, we will weave the tapestry of football culture throughout Japan, engaging different communities and fostering a deep appreciation for the beautiful game.
            </li>
            <li>
              Collaborate with clubs: We actively seek partnerships with other football clubs in Japan and beyond, fostering collaborations that broaden horizons and create more opportunities for players and coaches.
            </li>
            <li>
              Cultivate leaders: From grassroots to glory, we strive to identify and nurture exceptional talent, moulding future leaders and captains who will guide the Aalthara club to success.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
