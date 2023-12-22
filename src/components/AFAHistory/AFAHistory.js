import React from 'react';
import '../../styles/AFAHistory.css';

export default function AFAHistory() {
  return (
    <div>
        <div style={{position:'relative'}}>
      <img className='history_banner' style={{width:'100%'}} src='/assets/images/AFAHistory.svg' alt='aboutUs' />
        <p className='history_title'>AFA History</p>
        </div>
      <div className='history_container'>
        <p className='history_desc'>AFA has its roots from the football loving Indian community in Japan. A group of enthusiastic Indian footballers residing in Japan have made it their mission to promote the sport, engulf into local culture and inspire the younger generation to pursue their childhood aspirations.  </p>
        <p className='history_paragraph'>Through the provision of better opportunities, they aim to encourage the pursuit of dreams and create a brighter future for football in Japan and thereby developing an inclusive football world with no borders.</p>
        <p className='history_paragraph'>Aalthara : Aalthara is the word for the foundation seating of a banyan tree in the Indian Language of Malayalam, where the life in a village is being empowered through traditions and cultural exchanges.</p>
        <div className='history_events_conatiner'>
          <div className='date_container'>
            <div className='date'>2020 November 3</div>
            <div className='history_events'>AFA Foundation Day</div>
          </div>
          <div className='date_container'>
            <div className='date'>2021 October 10</div>
            <div className='history_events'>AFA Academy Launching</div>
          </div>
          <div className='date_container'>
            <div className='date'>2021 November 27</div>
            <div className='history_events'>Japan Football Association Registration
(JFA ID：JFA212216053884 )</div>
          </div>
          <div className='date_container'>
            <div className='date'>2023 April 14</div>
            <div className='history_events'>U12 Team Registration in Tokyo</div>
          </div>
          <div className='date_container_last'>
            <div className='date'>2023 April 17</div>
            <div className='history_events'>U15 Team Registration in Tokyo</div>
          </div>
        </div> 
      </div>
    </div>
  )
}
