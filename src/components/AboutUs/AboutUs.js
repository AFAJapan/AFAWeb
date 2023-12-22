import React from 'react';
import '../../styles/AboutUs.css';
import { Grid } from '@mui/material';

let aboutTilesContent = [
    {
        image:'/assets/images/TilesAboutUs/FootballJapan.svg',
        title:'Football in japan',
        link:'/footballjapan'
    },
    {
        image:'/assets/images/TilesAboutUs/AFAHistory.svg',
        title:'aFA history',
        link:'/history'
    },
    {
        image:'/assets/images/TilesAboutUs/Vision.svg',
        title:'vision and mission',
        link:'/vision'
    },
    {
        image:'/assets/images/TilesAboutUs/AFAvalues.svg',
        title:'aFA values',
        link:'/values'
    },
    {
        image:'/assets/images/TilesAboutUs/AFAStructure.svg',
        title:'aFA structure and organization chart',
        link:'/structure'
    },
    {
        image:'/assets/images/TilesAboutUs/Membership.svg',
        title:'Membership',
        link:'/membership'
    }
]

export default function AboutUs({isMobile}) {
  return (
    <div>
        <img className='aboutus_banner' style={{width:'100%'}} src='/assets/images/AboutUsBanner.svg' alt='aboutUs' />
        <Grid container spacing={2} sx={{paddingLeft:!isMobile ? '1rem':'0rem',marginBottom:'5rem', marginTop:'2rem', justifyContent:'center'}}>
            {
                aboutTilesContent.map((tiles)=>(
                    <Grid item className='about_tiles_container' lg={6} md={6} sm={11} xs={11}>
                        <a href={tiles.link}>
                            <img style={{width:'100%'}} className='about_tiles_image' src={tiles.image} alt={tiles.title} />
                            <div className='about_tiles_title'>{tiles.title}</div>
                        </a>
                    </Grid>
                ))
            }
        </Grid>
    </div>
  )
}
