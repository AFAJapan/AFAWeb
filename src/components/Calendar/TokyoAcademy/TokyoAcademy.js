import React from 'react';
import '../../../styles/TokyoAcademy.css';
import { Grid } from '@mui/material';

export default function TokyoAcademy() {
  // Schedules based on the provided table
  const schedules = {
    'January': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '6-Jan-2024  ', time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '7-Jan-2024  ', time: '16:00-18:00  ', location: 'Mizue Multipurpose' },
        { date: '14-Jan-2024  ', time: '18:00-20:00  ', location: 'Rinkai Futsal B' },
        { date: '20-Jan-2024  ', time: '10:00-12:00  ', location: 'Rinkai Futsal A' },
        { date: '20-Jan-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '28-Jan-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal B' },
      ],
      'Junior Kids J1(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location  ' },
        { date: '6-Jan-2024  ', time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '14-Jan-2024  ', time: '18:00-20:00  ', location: 'Rinkai Futsal A' },
        { date: '20-Jan-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '28-Jan-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal A' },
      ],
      'Junior Kids J2(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '6-Jan-2024  ', time: '17:00-19:00  ', location: 'Mizue Multipurpose' },
        { date: '14-Jan-2024  ', time: '18:00-20:00  ', location: 'Rinkai Futsal A' },
        { date: '20-Jan-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '28-Jan-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal A' },
      ],
      'Sub Junior Kids(4 to 8 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        { date: '14-Jan-2024  ', time: '18:00-20:00  ', location: 'Rinkai Futsal A' },
        { date: '20-Jan-2024  ', time: '17:00-19:00  ', location: 'Kasai Rugby' },
        { date: '28-Jan-2024  ', time: '16:00-18:00  ', location: 'Rinkai Futsal A' },
      ],
    },
    'February': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
      'Junior Kids J1(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
      'Junior Kids J2(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        
      ],
      'Sub Junior Kids(4 to 8 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        
      ],
    },
    'March': {
      'Senior Kids(12 to 16 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
      'Junior Kids J1(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
       
      ],
      'Junior Kids J2(8 to 12 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        
      ],
      'Sub Junior Kids(4 to 8 Years)': [
        { date: 'Date  ', time: 'Time  ', location: 'Location' },
        
      ],
    },
  };

  // Function to render the schedule for each team
  const renderSchedule = (teamName, teamSchedule) => (
    <>
      <div className='team_name' style={{ fontSize: '20px' }}><strong>{`AFA Tokyo ${teamName}`}</strong></div>
      {teamSchedule.map((session, index) => (
        <Grid container key={`${teamName}-${index}`} className='table_row' style={{ paddingLeft: '1rem' }}>
          <Grid item lg={3}>{session.date}</Grid>
          <Grid item lg={3}>{session.time}</Grid>
          <Grid item lg={3}>{session.location}</Grid>
        </Grid>
      ))}
    </>
  );

  const renderMonthSection = (month) => (
    <div className='month_section'>
      <div className='table_header' style={{ paddingLeft: '2rem' }}>{month} 2024</div>
      {Object.entries(schedules[month]).map(([teamName, teamSchedule]) => (
        <React.Fragment key={teamName}>
          {renderSchedule(teamName, teamSchedule)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className='table_container'>
      {['January', 'February','March'].map(month => renderMonthSection(month))}
    </div>
  );
}
