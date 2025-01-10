const data = import.meta.glob('./dataBase/*.js');

const allData = (async () => {
    const collectedData = [];

    for (const path in data) {
        const module = await data[path]();
        collectedData.push(module.default);
    }

    return collectedData;
})();

export default allData;
