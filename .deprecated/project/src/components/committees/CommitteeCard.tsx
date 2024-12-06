import React from 'react';
import {FileDown, ArrowRight} from 'lucide-react';

interface CommitteeCardProps {
    name: string;
    description: string;
    image: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    guideUrl: string;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({
                                                         name,
                                                         description,
                                                         image,
                                                         level,
                                                         guideUrl,
                                                     }) => {
    const levelColors = {
        Beginner: 'bg-green-100 text-green-800',
        Intermediate: 'bg-blue-100 text-blue-800',
        Advanced: 'bg-purple-100 text-purple-800',
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${levelColors[level]} mb-4`}>
          {level}
        </span>
                <h3 className="text-xl font-bold text-[#55537b] mb-2">{name}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <a
                        href={`/committee/${name.toLowerCase()}`}
                        className="inline-flex items-center text-[#57465c] hover:text-[#55537b] transition-colors duration-200"
                    >
                        Learn More <ArrowRight size={16} className="ml-2"/>
                    </a>
                    <a
                        href={guideUrl}
                        className="inline-flex items-center text-[#57465c] hover:text-[#55537b] transition-colors duration-200"
                    >
                        Background Guide <FileDown size={16} className="ml-2"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CommitteeCard;