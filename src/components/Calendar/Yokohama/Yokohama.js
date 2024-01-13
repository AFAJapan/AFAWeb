import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'January': {
      'Academy': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '6-Jan-2024  ', time: '8:00-11:00 ', location: 'Shin-Yokohama park, Touteki-jyou' },
        { date: '13-Jan-2024  ', time: '9:00-11:00', location: 'Grandberry' },
        { date: '20-Jan-2024  ', time: '9:00-11:00', location: 'Grandberry' },
        { date: '21-Jan-2024  ', time: '10:00-12:00', location: 'Kayaba koen Kirigaoka' },
        { date: '27-Jan-2024  ', time: '9:00-11:00', location: 'Grandberry' },
      ],
    },
    'February': {
      'Academy': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
    },
    'March': {
      'Academy': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
    },
  };

  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Yokohama ${teamName}`}</strong></div>
      {teamSchedule.map((session, index) => (
        <div className='table_row' key={`${teamName}-${index}`} style={{ display: 'flex' }}>
          <div className='table_cell' style={{ flex: '1' }}>{session.date}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.time}</div>
          <div className='table_cell' style={{ flex: '1' }}>{session.location}</div>
        </div>
      ))}
    </>
  );

  const renderMonthSection = (month) => (
    <div className='month_section'>
      <div className='table_header'>{month} 2024</div>
      {Object.entries(schedules[month]).map(([teamName, teamSchedule]) => (
        <React.Fragment key={teamName}>
          {renderSchedule(teamName, teamSchedule)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className='table_container'>
      {['January', 'February', 'March'].map(month => renderMonthSection(month))}
    </div>
  );
}
