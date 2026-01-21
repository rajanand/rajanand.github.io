document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Projects
    const container = document.getElementById('projects-container');

    if (typeof projects !== 'undefined' && Array.isArray(projects)) {
        projects.filter(p => p.visible).forEach(project => {
            const card = document.createElement('a');
            card.href = project.link;
            card.className = 'card';
            // Open external links in new tab, internal in same
            if (project.link.startsWith('http')) {
                card.target = '_blank';
                card.rel = 'noopener noreferrer';
            }

            const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                <div class="card-content">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                </div>
                <div class="tags">
                    ${tagsHtml}
                </div>
            `;

            container.appendChild(card);
        });
    } else {
        container.innerHTML = '<p style="color: grey; text-align: center; grid-column: 1/-1;">No projects found. Check projects.js</p>';
    }

    // 2. Set Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
