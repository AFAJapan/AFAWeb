import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import AboutUs from '../components/AboutUs/AboutUs';
import Vision from '../components/Vision/Vision';
import AFAValues from '../components/AFAValues/AFAValues';
import AFAHistory from '../components/AFAHistory/AFAHistory';
import FootballJapan from '../components/FootballJapan/FootballJapan';
import AFAStructure from '../components/AFAStructure/AFAStructure';
import Calendar from '../components/Calendar/Calendar';
import ContactUs from '../components/ContactUs/ContactUs';
import ASL from '../components/ASL/ASL';
import Membership from '../components/Membership/Membership';
import AFAKidsAcademy from '../components/AFAKidsAcademy/AFAKidsAcademy';


export default function Routing({isMobile}) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage isMobile={isMobile} />} />
        <Route path='/aboutus' element={<AboutUs isMobile={isMobile} />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/values' element={<AFAValues isMobile={isMobile} />} />
        <Route path='/history' element={<AFAHistory />} />
        <Route path='/footballjapan' element={<FootballJapan />} />
        <Route path='/structure' element={<AFAStructure />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/asl' element={<ASL />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/kidsacademy' element={<AFAKidsAcademy />} />
    </Routes>
</BrowserRouter>
  )
}
