import React from 'react';
import '../../styles/ContactUs.css';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function ContactUs() {
    
    const handleEmailClick = () => {
        window.location.href = 'mailto:aaltharasuperleague@gmail.com';
      };

  return (
    <div className='contatuspage_container'>
        <p className='contactus_title'>Contact Us</p>
        <div className='contactus_container'>
            <div>
                <div className='contact_phone' style={{display:'inline-flex'}}>
                    <PhoneInTalkIcon className='contact_icons'/>
                    <div>+81 8034141007 (Ajay),  +81 7043946625 (Vinay) </div>
                </div>
            </div>
            <div className='contact_whatsapp'>
                <div style={{display:'inline-flex'}}>
                    <WhatsAppIcon className='contact_icons' />
                    <div>+81 8012149301(Binu),  +81 7083322102(Deepak)</div>
                </div>
            </div>
            <div className='contact_mail'  onClick={handleEmailClick}>
                <div style={{display:'inline-flex'}}>
                    <DraftsIcon className='contact_icons' />
                    <div>aaltharasuperleague@gmail.com</div>
                </div>
            </div>
            <div className='contact_socialmedia'>Follow Us on Social Media </div>
            <a target='_blank' style={{textDecoration:'none', color:'black'}} href='https://www.facebook.com/aaltharafootballacademy'><FacebookRoundedIcon /></a>
            <a target='_blank' href='https://www.instagram.com/aaltharafootball/?igshid=MWQ1ZGUxMzBkMA%3D%3D'>
                <img className='insta_contact' src='/assets/icons/InstaContact.svg' alt='instagram' />
            </a>
        </div>
    </div>
  )
}
