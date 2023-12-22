import React from 'react';
import '../../styles/ASL.css';
import { Grid } from '@mui/material';

export default function ASL() {
  return (
    <div>
        <div style={{position:'relative'}}>
      <img className='ASL_banner' style={{width:'100%'}} src='/assets/images/ASLBanner.svg' alt='aboutUs' />
        <p className='ASL_title'>Aalthara Super League</p>
      </div>
      <div className='ASL_container'>
        <p className='ASL_desc'>ASL (Aalthara Super League) is an annual competitive Futsal League conducted both for adults and kids in a highly  spirited and vibrant competitive football environment. We welcome all teams to participate and experience ASL.</p>
      </div>
      <p className='tournament_title'>AFA 4th International Kids Futsal Cup 2023</p>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <p className='tournament_fixtures_title'>Location</p>
          <p style={{textAlign:'center'}}><a className='tournament_location_link' href='https://www.google.com/maps/place/%E6%B1%9F%E6%88%B8%E5%B7%9D%E5%8C%BA%E8%91%9B%E8%A5%BF%E3%83%A9%E3%82%B0%E3%83%93%E3%83%BC%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%83%91%E3%83%BC%E3%82%AF/@35.6530272,139.8632554,17z/data=!4m6!3m5!1s0x601887994283999d:0x4a3b89b5e0331a9!8m2!3d35.6534111!4d139.866027!16s%2Fg%2F11sqknk912?entry=ttu'>Kasai Rugby Sports Park </a></p>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <p className='tournament_fixtures_title'>Date</p>
          <p className='tournament_date_time'>2023 November 18</p>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <p className='tournament_fixtures_title'>Time</p>
          <p className='tournament_date_time'>9:00 AM to 1:00 PM</p>
        </Grid>
      </Grid>
      <img className='events_asl_image' src='/assets/images/EventsImage.svg' alt='Events Image' />
          <p className='league_category_title'>AFA Kids League</p>
      <div className='result_container'>
          <p className='result_year'>2022</p>
          <div>
            <p className='category_desc'>Number of Teams:14</p>
            <p className='category_desc'>Winner:Cotton Pickers FC(U15)</p>
            <p className='category_desc'>Runner Ups:Okachimachi Riders(U15)</p>
            <p className='category_desc'>Winner:Athena FC(U10)</p>
            <p className='category_desc'>Runner Ups:Shonan FC Cheetahs(U10)</p>
          </div>
        </div>
        <div className='result_container'>
          <p className='result_year'>2021</p>
          {/* <div>
            <p className='category_title'>Adults</p>
            <p className='category_desc'>Number of Teams:16</p>
            <p className='category_desc'>Winner:IVCV</p>
            <p className='category_desc'>Runner Ups:Unishop</p>
          </div> */}
          <div>
            {/* <p className='category_title'>Kids</p> */}
            <p className='category_desc'>Number of Teams:8</p>
            <p className='category_desc'>Winner:Young Tigers and Shonan FC Kids(Junior Kids)</p>
            <p className='category_desc'>Winner:FC Barcelona 2.0(Senior Kids)</p>
            <p className='category_desc'>Runner Ups:All Stars United(Senior Kids)</p>
          </div>
        </div>
        <div className='result_container'>
          <p className='result_year'>2020</p>
          {/* <div>
            <p className='category_title'>Adults</p>
            <p className='category_desc'>Number of teams:12</p>
            <p className='category_desc'>Winner:Gladiators FC</p>
            <p className='category_desc'>Runner Ups:CKV</p>
          </div> */}
          <div>
            {/* <p className='category_title'>Kids</p> */}
            <p className='category_desc'>Number of teams:4</p>
            <p className='category_desc'>Winner:FC Royals</p>
            <p className='category_desc'>Runner Ups:FC Youngstars</p>
          </div>
        </div>
        <p className='league_category_title'>AFA Adults League</p>
        <div className='result_container'>
        <p className='result_year'>2022</p>
          <div>
            <p className='category_desc'>Number of teams:16</p>
            <p className='category_desc'>Winner:FC ISC</p>
            <p className='category_desc'>Runner Ups:Shonan FC</p>
          </div>
        </div>
        <div className='result_container'>
          <p className='result_year'>2021</p>
          <div>
            <p className='category_desc'>Number of Teams:16</p>
            <p className='category_desc'>Winner:IVCV</p>
            <p className='category_desc'>Runner Ups:Unishop</p>
          </div>
        </div>
        <div className='result_container'>
          <p className='result_year'>2020</p>
          <div>
            <p className='category_desc'>Number of teams:12</p>
            <p className='category_desc'>Winner:Gladiators FC</p>
            <p className='category_desc'>Runner Ups:CKV</p>
          </div>
        </div>
    </div>
  )
}
