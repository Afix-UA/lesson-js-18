//  Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується
//  таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і
//  знаходить середнє значення.
function createGradesTable(count) {
    const taskСontainer = document.querySelector('.task__container'); 
    taskСontainer.innerHTML = ""; 
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (let i = 0; i < count; i++) {
        const tr = document.createElement("tr");

        const tdLabel = document.createElement("td");
        tdLabel.textContent = `Оцінка ${i + 1}:`;

        const tdInput = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.min = 1;
        input.max = 12;
        input.dataset.grade = "true"; 
        tdInput.appendChild(input);

        tr.appendChild(tdLabel);
        tr.appendChild(tdInput);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    taskСontainer.appendChild(table);
    const btn = document.createElement("button");
    btn.textContent = "get sum";
    const result = document.createElement("p");
    result.textContent = "Середнє: -";
    btn.addEventListener("click", () => {
        const inputs = taskСontainer.querySelectorAll("input[data-grade]");
        let sum = 0;
        let filled = 0;
        inputs.forEach(input => {
            const val = Number(input.value);
            if (!isNaN(val) && val > 0) {
                sum += val;
                filled++;
            }
        });
        if (filled > 0) {
            result.textContent = `Середнє: ${(sum / filled).toFixed()}`;
        } else {
            result.textContent = "Введіть хоча б одну оцінку!";
        }
    });
    taskСontainer.appendChild(btn);
    taskСontainer.appendChild(result);
}
function init() {
    const dataInput = document.querySelector('[data-input="grades"]');
    dataInput.addEventListener("change", function () {
        createGradesTable(dataInput.value);
    });
}
if (confirm("почати")) {
	init();
}
