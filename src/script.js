import detailsData from './detailsData.json';

const navList = document.getElementById('nav-list');
const mainContent = document.getElementById('main-content');

const createNavigation = (navigation) => {
    navigation.forEach((navItem) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${navItem.id}`;
        link.textContent = navItem.title;
        li.appendChild(link);
        navList.appendChild(li);
    });
}

const createSections = (sections) => {
    for (const [id, sectionData] of Object.entries(sections)) {
        const section = document.createElement('section');
        section.id = id;

        const title = document.createElement('h2');
        title.textContent = sectionData.title;
        section.appendChild(title);

        sectionData.items.forEach((item) => {
            const details = document.createElement('sl-details');

            const summary = document.createElement('div');
            summary.slot = 'summary';
            summary.textContent = item.summary;
            details.appendChild(summary);

            const content = document.createElement('div');
            content.textContent = item.content;
            details.appendChild(content);

            section.appendChild(details);
        });

        mainContent.appendChild(section);
    }
}

createNavigation(detailsData.navigation);
createSections(detailsData.sections);