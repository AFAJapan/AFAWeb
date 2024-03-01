import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
  'February': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '3-Feb-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby Sportspark' },
        { date: '10-Feb-2024  ', time: '17:00-19:00  ', location: 'Rinkai Futsal A' },
        { date: '17-Feb-2024  ', time: '14:00-16:00  ', location: 'Mizube Futsal B' },
        { date: '25-Feb-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal A' },
       
      ],
      'Junior Kids J1(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '3-Feb-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby Sportspark' },
        { date: '4-Feb-2024 (Compensation session) ', time: '13:00-15:00  ', location: 'Tatsumi Forest Seaside Park' },
        { date: '10-Feb-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '17-Feb-2024  ', time: '15:00-17:00  ', location: 'Rinkai Futsal B' },
        { date: '25-Feb-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal B' },
       
      ],
      'Junior Kids J2(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '3-Feb-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby Sportspark' },
        { date: '4-Feb-2024 (Compensation session) ', time: '13:00-15:00  ', location: 'Tatsumi Forest Seaside Park' },
        { date: '10-Feb-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '17-Feb-2024  ', time: '15:00-17:00  ', location: 'Rinkai Futsal B' },
        { date: '25-Feb-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal B' },
        
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '3-Feb-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby Sportspark' },
        { date: '10-Feb-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer (Small)/大島小松川公園Ａ' },
        { date: '18-Feb-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer (Small)/大島小松川公園Ａ' },
        { date: '25-Feb-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal B' },
        
      ],
    },
    'March': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '2-Mar-2024  ', time: '12:00-14:00  ', location: 'Mizue Multipurpose' },
        { date: '10-mar-2024  ', time: '9:00-11:00  ', location: 'Rinkai Futsal B' },
        { date: '16-Mar-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '23-Mar-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '30-Mar-2024  ', time: '11:00-13:00  ', location: 'Rinkai Futsal A' },
      ],
      'Junior Kids J1 and J2(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '3-Mar-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '09-Mar-2024  ', time: '12:00-14:00  ', location: 'Mizue Multipurpose' },
        { date: '16-Mar-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '31-Mar-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
      ],
      'Sub Junior Kids(4 to 7 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '3-Mar-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
        { date: '16-Mar-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '31-Jan-2024  ', time: '17:00-19:00  ', location: 'Ojima Komatsugawa Park A, Soccer' },
      ],
    }
  };

  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Tokyo ${teamName}`}</strong></div>
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
      {['February', 'March'].map(month => renderMonthSection(month))}
    </div>
  );
}
