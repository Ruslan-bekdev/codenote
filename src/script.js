import allDataPromise from './dataCollector';

const navList = document.getElementById('nav-list');
const mainContent = document.getElementById('main-content');

const createNavigation = (allData) => {
    const navigation = [];
    allData.map((item, index) => {
        navigation.push({id: item.id, title: item.navTitle});
    })

    navigation.forEach((navItem) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${navItem.id}`;
        link.textContent = navItem.title;
        li.appendChild(link);
        navList.appendChild(li);
    });

    document.getElementById('toggle-all').addEventListener('click', () => {
        const allDetails = document.querySelectorAll('sl-details');
        const shouldOpen = Array.from(allDetails).some(details => !details.open);

        allDetails.forEach(details => {
            details.open = shouldOpen;
        });

        document.getElementById('toggle-all').textContent = shouldOpen ? 'Закрыть все' : 'Открыть все';
    });
}

const createSections = (allData) => {
    allData.map((item, index) => {
        const section = document.createElement('section');

        section.id = item.id;
        section.className = 'section';

        const title = document.createElement('h2');
        title.textContent = item.title;
        title.className = 'title';
        section.appendChild(title);

        item.items.forEach((item) => {
            const details = document.createElement('sl-details');

            const summary = document.createElement('div');
            summary.slot = 'summary';
            summary.textContent = item.summary;
            details.appendChild(summary);

            const content = document.createElement('div');
            content.textContent = item.content;
            content.style.whiteSpace = 'pre-wrap';
            details.appendChild(content);

            section.appendChild(details);
        });

        mainContent.appendChild(section);
    })
}

allDataPromise.then((allData) => {
    createNavigation(allData);
    createSections(allData);
});
