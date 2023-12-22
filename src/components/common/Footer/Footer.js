import { Grid } from '@mui/material'
import React from 'react';
import '../../../styles/Footer.css';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Footer({isMobile}) {
    return (
        <div className='footer_container'>
            {!isMobile ? (
                 <Grid container spacing={5}>
            <Grid item lg={4}>
                    <div className='footer_page'><a className='footer_link' href='/aboutus'>About AFA</a></div>
                    <div className='footer_page'><a className='footer_link' href='/vision'>Vision and Mission</a></div>
                    <div className='footer_page'><a className='footer_link' href='/contact'>Contact Us</a></div>
                </Grid>
                <Grid item lg={4}>
                    <div className='footer_page'><a className='footer_link' href='/membership'>Membership</a></div>
                    <div className='footer_page'><a className='footer_link' href='/kidsacademy'>AFA  Academy </a></div>
                    <div className='footer_page'><a className='footer_link' href='/asl'>Aalthara Super League</a></div>
                </Grid>
                <Grid item lg={4}>
                    <div>Follow Us</div>
                    <div className='footer_contact'>
                        <a target='_blank' href='https://www.facebook.com/aaltharafootballacademy'>
                            <FacebookRoundedIcon className='social_media_icon_fb'  />   
                        </a>
                        <a target='_blank' href='https://instagram.com/aaltharafootball?igshid=MWQ1ZGUxMzBkMA=='>
                            <img className='social_media_icon_insta' src='/assets/icons/Instagram.svg' alt='inta' />
                        </a>
                    </div>
                </Grid>
            </Grid>)
            :(
                <>
                     <div className='footer_page'><a className='footer_link' href='/aboutus'>About AFA</a></div>
                    <div className='footer_page'><a className='footer_link' href='/vision'>Vision and Mission</a></div>
                    <div className='footer_page'><a className='footer_link' href='/contact'>Contact Us</a></div>
                    <div className='footer_page'><a className='footer_link' href='/membership'>Membership</a></div>
                    <div className='footer_page'><a className='footer_link' href='/kidsacademy'>AFA  Academy </a></div>
                    <div className='footer_page'><a className='footer_link' href='/asl'>Aalthara Super League</a></div>
                    <div>Follow Us</div>
                    <div className='footer_contact'>
                        <a target='_blank' href='https://www.facebook.com/aaltharafootballacademy'>
                            <FacebookRoundedIcon className='social_media_icon_fb'  />   
                        </a>
                        <a target='_blank' href='https://instagram.com/aaltharafootball?igshid=MWQ1ZGUxMzBkMA=='>
                            <img className='social_media_icon_insta' src='/assets/icons/Instagram.svg' alt='inta' />
                        </a>
                    </div>
                </>
            )}
           
            <div className='footer_copyright'>&#169; 2023 Aalthara Football Association. All Rights Reserved.</div>
            <div style={{float:'right'}}>
                <img className='footer_dt_logo' src='/assets/logo/datatemplate.svg' alt='dt_logo' />
            </div>
        </div>
    )
}
