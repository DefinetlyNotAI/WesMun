import React from 'react';
import CommitteeCard from '../committees/CommitteeCard.tsx';
import {committees} from '../../data/committees.ts';

const Committees = () => {
    return (
        <section id="committees" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#55537b] mb-12 text-center">Our Committees</h2>

                {Object.entries(committees).map(([level, committeeList]) => (
                    <div key={level} className="mb-16">
                        <h3 className="text-2xl font-semibold text-[#57465c] mb-6 capitalize">
                            {level} Committees
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {committeeList.map((committee) => (
                                <CommitteeCard key={committee.name} {...committee} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Committees;