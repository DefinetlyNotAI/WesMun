import React from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Hero from './components/home/Hero.tsx';
import About from './components/sections/About.tsx';
import Committees from './components/sections/Committees.tsx';
import Registration from './components/sections/Registration.tsx';
import Payment from './components/sections/Payment.tsx';

function App() {
    return (
        <div className="min-h-screen bg-[#ebdcd0]">
            <Navbar/>
            <Hero/>
            <About/>
            <Committees/>
            <Registration/>
            <Payment/>
        </div>
    );
}

export default App;