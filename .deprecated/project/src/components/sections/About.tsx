import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#55537b] mb-8 text-center">About WESMUN</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-[#57465c] mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            WESMUN is dedicated to fostering diplomatic excellence and global understanding among future
                            leaders.
                            Through immersive committee sessions and expert guidance, we provide delegates with an
                            unparalleled
                            platform for developing crucial skills in negotiation, public speaking, and international
                            relations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#57465c] mb-4">Conference Details</h3>
                        <p className="text-gray-600">
                            Join us at the prestigious Western Conference Center for three days of intensive debate,
                            negotiation, and resolution drafting. Our carefully curated committees cater to delegates
                            of all experience levels, ensuring meaningful participation and growth for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;