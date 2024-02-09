import React from 'react';
import '../../../styles/Events.css';
import { Grid } from '@mui/material';

export default function Events({isMobile}) {
  return (
    <div>
        <p className='events_title'>Pink Shirt Cup 2024</p>
        <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Location</div>
                <div><a className='events_location_link' href='https://maps.app.goo.gl/BxXDv3aiG55CA2v37'>Noah Futsal Stage Yokohama </a></div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Date</div>
                <div className='events_Date_time'>2024 February 25</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className='events_header'>Time</div>
                <div className='events_Date_time'>13:00 AM to 15:00 PM</div>
            </Grid>
        </Grid>
        <img style={{marginTop:'2rem',}} className='events_image' src='/assets/images/EventsImage.svg' alt='Events Image' />
    </div>
  )
}
