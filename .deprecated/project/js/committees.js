const committees = {
    beginner: [
        {
            name: 'UNICEF',
            description: 'United Nations Children\'s Fund - Focusing on children\'s rights and well-being',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        },
        {
            name: 'WHO',
            description: 'World Health Organization - Addressing global health challenges',
            image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        },
        {
            name: 'UNHCR',
            description: 'UN Refugee Agency - Protecting refugees worldwide',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        },
        {
            name: 'UNSC jr',
            description: 'UN Security Council Junior - Introduction to international security',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        },
        {
            name: 'UNHRC',
            description: 'UN Human Rights Council - Promoting human rights globally',
            image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        },
        {
            name: 'UNW',
            description: 'UN Women - Gender equality and women\'s empowerment',
            image: 'https://images.unsplash.com/photo-1621352404112-58e2468a1c87?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#'
        }
    ],
    intermediate: [
        {
            name: 'UNODC',
            description: 'United Nations Office on Drugs and Crime - Addressing transnational crime',
            image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        },
        {
            name: 'GA1',
            description: 'General Assembly First Committee - Disarmament and International Security',
            image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        },
        {
            name: 'Arab League (Arabic)',
            description: 'League of Arab States - Regional cooperation in Arabic',
            image: 'https://images.unsplash.com/photo-1577019961424-a669grounds?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        },
        {
            name: 'Arab League (English)',
            description: 'League of Arab States - Regional cooperation in English',
            image: 'https://images.unsplash.com/photo-1577019961424-a669grounds?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        },
        {
            name: 'GA4',
            description: 'Special Political and Decolonization Committee',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        },
        {
            name: 'ECOSOC',
            description: 'Economic and Social Council - Sustainable development coordination',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#'
        }
    ],
    advanced: [
        {
            name: 'NATO',
            description: 'North Atlantic Treaty Organization - Military alliance and security',
            image: 'https://images.unsplash.com/photo-1569409003595-f7279be21c72?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#'
        },
        {
            name: 'UNSC',
            description: 'United Nations Security Council - International peace and security',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#'
        },
        {
            name: 'HSC',
            description: 'Historical Security Council - Past international crises',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#'
        },
        {
            name: 'HCC',
            description: 'Historical Crisis Committee - Complex historical scenarios',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#'
        }
    ]
};

function createCommitteeCard(committee) {
    return `
        <div class="committee-card">
            <img src="${committee.image}" alt="${committee.name}" class="committee-image">
            <div class="committee-content">
                <span class="committee-level-badge level-${committee.level.toLowerCase()}">${committee.level}</span>
                <h3 class="committee-title">${committee.name}</h3>
                <p class="committee-description">${committee.description}</p>
                <div class="committee-links">
                    <a href="/committees/${committee.name.toLowerCase().replace(/\s+/g, '-')}">
                        Learn More
                        <i data-lucide="arrow-right"></i>
                    </a>
                    <a href="${committee.guideUrl}" class="download-guide">
                        Background Guide
                        <i data-lucide="file-down"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Populate committees
    Object.entries(committees).forEach(([level, committeeList]) => {
        const container = document.getElementById(`${level}-committees`);
        if (container) {
            container.innerHTML = committeeList.map(committee => createCommitteeCard(committee)).join('');
        }
    });

    // Initialize Lucide icons
    lucide.createIcons();
});