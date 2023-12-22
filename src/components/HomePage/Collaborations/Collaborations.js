import React from 'react';
import '../../../styles/Collaborations.css';

export default function Collaborations() {
  return (
    <div>
        <p className='collaborations_title'>
            Collaborations
        </p>
        <img className='waseda_logo' src='/assets/logo/wasedaLogo.svg' alt='waseda' />
        <p className='colloboration_partner'>AFA has signed a coaching partnership agreement with one of the well known Japanese football club and football academy named Waseda United. Highly skilled coaches from Waseda are training AFA Academy kids.</p>
        <p className='collaboration_more'>Know More About <a className='waseda_link' target='_blank' href='https://waseda-united.co.jp/'>Waseda United</a></p>
    </div>
  )
}
