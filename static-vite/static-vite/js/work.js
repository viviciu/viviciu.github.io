// Work items data
const workItems = [
    {
        id: 'elysium',
        title: 'Elysium',
        category: 'Web Design',
        image: '/assets/elysium-thumb.jpg',
        description: 'Interactive web experience exploring particle systems'
    },
    {
        id: 'touchdesigner',
        title: 'TouchDesigner Experiments',
        category: 'Creative Coding',
        image: '/assets/touchdesigner-thumb.jpg',
        description: 'Real-time graphics and interactive installations'
    },
    {
        id: 'playful-vs-practical',
        title: 'Playful vs. Practical',
        category: 'Design Research',
        image: '/assets/playful-thumb.jpg',
        description: 'Exploring the balance between fun and functionality'
    },
    {
        id: 'typography-animation',
        title: 'Kinetic Type Animation',
        category: 'Motion Design',
        image: '/assets/typography-thumb.jpg',
        description: 'Dynamic typography and motion graphics'
    },
    {
        id: 'spatula',
        title: 'Spatula',
        category: 'Product Design',
        image: '/assets/spatula-thumb.jpg',
        description: 'Kitchen utensil redesign project'
    },
    {
        id: 'liminal',
        title: 'Lunar Gala: Liminal',
        category: 'Event Design',
        image: '/assets/liminal-thumb.jpg',
        description: 'Fashion show branding and spatial design'
    },
    {
        id: 'bumble',
        title: 'Bumble Sessions',
        category: 'Brand Design',
        image: '/assets/bumble-thumb.jpg',
        description: 'Brand identity and marketing materials'
    },
    {
        id: 'cmini-poster',
        title: 'Dirty Dozen Poster',
        category: 'Print Design',
        image: '/assets/poster-thumb.jpg',
        description: 'Experimental typography poster series'
    }
];

// Populate work grid
function populateWorkGrid() {
    const workGrid = document.getElementById('workGrid');
    
    workItems.forEach(item => {
        const workItem = document.createElement('div');
        workItem.className = 'group cursor-pointer';
        workItem.innerHTML = `
            <a href="/work/${item.id}.html" class="block">
                <div class="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4 group-hover:opacity-80 transition-opacity">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${item.title}</h3>
                <p class="text-sm text-gray-600 mb-1">${item.category}</p>
                <p class="text-sm text-gray-500">${item.description}</p>
            </a>
        `;
        workGrid.appendChild(workItem);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateWorkGrid); 