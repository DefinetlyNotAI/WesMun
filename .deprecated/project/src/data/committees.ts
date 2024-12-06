export interface Committee {
    name: string;
    description: string;
    image: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    guideUrl: string;
}

export const committees = {
    beginner: [
        {
            name: 'UNICEF',
            description: 'United Nations Children\'s Fund - Focusing on children\'s rights and well-being',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#',
        },
        {
            name: 'WHO',
            description: 'World Health Organization - Addressing global health challenges',
            image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#',
        },
        {
            name: 'UNHCR',
            description: 'UN Refugee Agency - Protecting refugees worldwide',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800',
            level: 'Beginner',
            guideUrl: '#',
        },
    ],
    intermediate: [
        {
            name: 'UNODC',
            description: 'United Nations Office on Drugs and Crime - Addressing transnational crime',
            image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#',
        },
        {
            name: 'GA1',
            description: 'General Assembly First Committee - Disarmament and International Security',
            image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#',
        },
        {
            name: 'ECOSOC',
            description: 'Economic and Social Council - Sustainable development coordination',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
            level: 'Intermediate',
            guideUrl: '#',
        },
    ],
    advanced: [
        {
            name: 'NATO',
            description: 'North Atlantic Treaty Organization - Military alliance and security',
            image: 'https://images.unsplash.com/photo-1569409003595-f7279be21c72?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#',
        },
        {
            name: 'UNSC',
            description: 'United Nations Security Council - Maintaining international peace and security',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#',
        },
        {
            name: 'HSC',
            description: 'Historical Security Council - Past international crises',
            image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800',
            level: 'Advanced',
            guideUrl: '#',
        },
    ],
};