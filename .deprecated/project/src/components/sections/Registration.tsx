import React from 'react';
import RegistrationForm from '../registration/RegistrationForm.tsx';

const Registration = () => {
    return (
        <section id="registration" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#55537b] mb-8 text-center">Register Now</h2>
                <RegistrationForm/>
            </div>
        </section>
    );
};

export default Registration;