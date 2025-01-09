const detailsData2 = [
    { summary: "Toggle Issue 1", content: "This is description for issue 1." },
    { summary: "Toggle Issue 2", content: "This is description for issue 2." },
    { summary: "Toggle Issue 3", content: "This is description for issue 3." }
];

function createDetails2() {
    const container = document.getElementById("details-container2");

    detailsData2.forEach(data => {
        const details = document.createElement("sl-details");
        details.setAttribute("summary", data.summary);
        details.innerHTML = data.content;
        container.appendChild(details);
    });
}

document.title = "Ошибки 2";
createDetails2();
