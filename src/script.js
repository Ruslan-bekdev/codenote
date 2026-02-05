import allDataPromise from './dataCollector';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navList = document.querySelector('#navList');
const mainContent = document.querySelector('#mainContent');

const formatter = {
    raw: {
        pattern: '!!!!',
        startMark: '[RAW_BLOCK_START]',
        endMark: '[RAW_BLOCK_END]',
        markerPattern: /\[RAW_BLOCK_START\]([\s\S]*?)\[RAW_BLOCK_END\]/g,
        template: (content) => `<pre style="white-space: pre; font-family: inherit; margin: 10px 0; display: block; width: 100%; overflow-x: auto; background: #2a2a2a; padding: 10px; border-radius: 4px;">${content}</pre>`,
    },
    auto: [
        {
            pattern: /\{\{([\s\S]*?)\}\}/g,
            startMark: '[COPY_BLOCK_START]',
            endMark: '[COPY_BLOCK_END]',
            mark(content) {
                return this.startMark + content + this.endMark;
            },
            markerPattern: /\[COPY_BLOCK_START\]([\s\S]*?)\[COPY_BLOCK_END\]/g,
            template: (content) => `<div class="copy-wrapper" style="display: flex; align-items: center; gap: 15px; background: #2d2d2d; color: #fff; padding: 12px 15px; border-radius: 8px; margin: 12px 0; border: 1px solid #444;">
                    <div class="copy-content" style="flex: 1; white-space: pre; font-family: monospace; overflow-x: auto;">${content}</div>
                    <div style="flex-shrink: 0;"><sl-button size="small" variant="neutral" outline onclick="copyToClipboard(this)" style="min-width: 100px;">Копировать</sl-button></div>
                </div>`,
        },
        {
            pattern: /^([^~].+:)$/gm,
            mark: (content) => `~~${content}~~`,
            markerPattern: /(?<!~)~~(?!~)/g,
            template: (content) => '<hr/>',
        },
        {
            pattern: /(?<!~~)\n(?!~~)/g,
            mark: (content) => '[BR_MARKER]',
            markerPattern: /\[BR_MARKER\]/g,
            template: (content) => '<br/><br/>',
        },
    ]
};

nav.classList.add('closed');

const createNavigation = (allData) => {
    const navigation = allData.map(item => ({
        id: item.id,
        title: item.navTitle
    }));
    const toggleAllFunc = () => {
        const allDetails = document.querySelectorAll('sl-details');
        const shouldOpen = Array.from(allDetails).some(details => !details.open);

        allDetails.forEach(details => {
            details.open = shouldOpen;
        });

        document.querySelector('#toggleAll').textContent = shouldOpen
            ? 'Закрыть всё'
            : 'Открыть всё';
    }

    navigation.forEach((navItem) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${navItem.id}`;
        link.textContent = navItem.title;
        li.appendChild(link);
        navList.appendChild(li);
    });

    const toggleAll = document.createElement('sl-button');
    toggleAll.id = 'toggleAll';
    toggleAll.variant = 'text';
    toggleAll.size = 'medium';
    toggleAll.innerText = 'Открыть всё';
    nav.appendChild(toggleAll)
    toggleAll.addEventListener('click', () => {
        toggleAllFunc();
    });

    const toggleMenu = document.createElement('sl-button');
    toggleMenu.id = 'toggle-menu';
    toggleMenu.variant = 'text';
    toggleMenu.size = 'medium';
    toggleMenu.innerText = '=';
    header.prepend(toggleMenu);
    toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('closed');
    });

    const onKeyDown = (event) => {
        const prevHash = () => {
            const nowHash = window.location.hash
            navigation.forEach((navItem, index) => {
                if (nowHash === '#' + navItem.id)
                    index === 0
                        ?window.location.hash = '#' + navigation[navigation.length - 1].id
                        :window.location.hash = '#' + navigation[index-1].id
            })
        };
        const nextHash = () => {
            const nowHash = window.location.hash
            navigation.forEach((navItem, index) => {
                if (nowHash === '#' + navItem.id)
                    index === navigation.length - 1
                        ?window.location.hash = '#' + navigation[0].id
                        :window.location.hash = '#' + navigation[index+1].id
            })
        };

        const key = event.key.toLowerCase();
        switch (key) {
            case ',':
            case 'б':
                prevHash()
                break;
            case '.':
            case 'ю':
                nextHash()
                break;
            case 'ь':
            case 'm':
                toggleAllFunc();
                break;
        }
    };

    window.addEventListener('keydown', onKeyDown);
}

const createSections = (allData) => {
    allData.forEach((item) => {
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
            const parts = item.content.split(formatter.raw.pattern);

            for (let i = 0; i < parts.length; i++) {
                if (i % 2 !== 0 && parts[i].length > 0) {
                    parts[i] = formatter.raw.startMark + parts[i] + formatter.raw.endMark;
                } else {
                    parts[i] = formatter.auto.reduce((text, rule) =>
                            text.replace(rule.pattern, (match, content) => rule.mark(content))
                        , parts[i]);
                }
            }

            const processed = parts.join('');

            const tempDiv = document.createElement('div');
            tempDiv.textContent = processed;
            let safeHtml = tempDiv.innerHTML;

            safeHtml = formatter.auto.reduce((text, rule) =>
                    text.replace(rule.markerPattern, (match, content) => rule.template(content))
                , safeHtml)
                .replace(formatter.raw.markerPattern, (match, raw) => formatter.raw.template(raw));

            // не допускаем более двух отступов
            content.innerHTML = safeHtml.replace(/(<br\s*\/?>){3,}/gi, '<br/><br/>');
            content.style.whiteSpace = 'normal';
            details.appendChild(content);
            section.appendChild(details);
        });

        mainContent.appendChild(section);
    });
};

window.copyToClipboard = (btn) => {
    const wrapper = btn.closest('.copy-wrapper');
    const text = wrapper.querySelector('.copy-content').innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Готово!';
        btn.variant = 'success';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.variant = 'neutral';
        }, 2000);
    });
};

allDataPromise.then((allData) => {
    createNavigation(allData);
    createSections(allData);
});
