import React from 'react';
import {Globe} from 'lucide-react';

const Hero = () => {
    return (
        <div className="min-h-screen bg-[#ebdcd0] flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <Globe className="mx-auto h-16 w-16 text-[#57465c]"/>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#55537b] sm:text-5xl md:text-6xl">
                        WESMUN 2024
                    </h1>
                    <p className="mt-4 text-xl text-[#57465c]">
                        Shaping Tomorrow's Leaders Today
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="#registration"
                            className="rounded-md bg-[#57465c] px-6 py-3 text-white hover:bg-opacity-90 transition-colors duration-200"
                        >
                            Register Now
                        </a>
                        <a
                            href="#about"
                            className="rounded-md border-2 border-[#57465c] px-6 py-3 text-[#57465c] hover:bg-[#57465c] hover:text-white transition-colors duration-200"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;