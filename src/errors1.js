import detailsData from './detailsData.json';

console.log(detailsData.details1.title); // Output: "Error Toggles Group 1"
console.log(detailsData.details1.items); // Output: массив с объектами


const detailsData1 = [
    { summary: "Toggle Error 1", content: "This is description for error 1." },
    { summary: "Toggle Error 2", content: "This is description for error 2." },
    { summary: "Toggle Error 3", content: "This is description for error 3." }
];

function createDetails1() {
    const container = document.getElementById("details-container1");

    detailsData1.forEach(data => {
        // Создаем элемент <sl-details>
        const details = document.createElement("sl-details");
        details.setAttribute("summary", data.summary);
        details.innerHTML = data.content;

        // Добавляем элемент в контейнер
        container.appendChild(details);
    });
}

document.title = "Ошибки 1";
createDetails1();
