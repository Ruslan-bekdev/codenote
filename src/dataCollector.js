const data = import.meta.glob('./dataBase/*.js');

const allData = (async () => {
    const collectedData = []; // Инициализируем пустой массив

    for (const path in data) {
        const module = await data[path]();
        collectedData.push(module.default); // Добавляем каждый экспортированный объект в массив
    }

    return collectedData; // Возвращаем массив
})();

export default allData;
