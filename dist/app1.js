//  Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус,
//  літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати -
//  radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function createInputs(
	obgs,
	classNameContainer = "createInputs",
	type = "checkbox",
	nameRatio = "sss",
) {
	const containerCheckbox = document.createElement("div");
	containerCheckbox.classList.add(classNameContainer);

	obgs.forEach((obg) => {
		const label = document.createElement("label");
		const input = document.createElement("input");
		if (type === "checkbox") {
			input.type = "checkbox";
			input.name = obg.name;
			input.value = obg.price;
		} else {
			input.type = "radio";
			input.name = nameRatio;
			input.value = obg.price;
		}

		label.appendChild(input);
		label.appendChild(document.createTextNode(" " + obg.name));
		containerCheckbox.append(label);
	});

	return containerCheckbox;
}

function createTransport(cars) {
	const containerTransport = document.createElement("div");
	const transportLabel = document.createElement("label");

	transportLabel.setAttribute("for", "transport");
	transportLabel.textContent = "Оберіть транспорт:";
	containerTransport.className = "container__transport";

	const transportSelect = document.createElement("select");
	transportSelect.id = "transport";

	cars.forEach((item) => {
		const option = document.createElement("option");
		option.value = item.price; 
		option.textContent = item.name;
		transportSelect.appendChild(option);
	});

	containerTransport.append(transportLabel);
	containerTransport.append(transportSelect); 
	return containerTransport;
}

function createTravel(guides, transports, meals) {
	
	const travel = document.querySelector(".travel");
	const travelRes = document.querySelector(".travel--res");

	const transportInput = createTransport(transports);
	const mealInput = createInputs(meals, "meals");
	const gidInput = createInputs(guides, "guides", "radio", "gid");

	
	travel.append(transportInput);
	travel.append(mealInput);
	travel.append(gidInput);

	
	travel.addEventListener("change", function () {
		const total = calculateTotal(travel);
		travelRes.textContent = `Загальна вартість: ${total} грн`;
	});
}

function calculateTotal(container) {
	let sum = 0;

	
	const transport = container.querySelector("#transport");
	if (transport) {
		sum += Number(transport.value);
	}

	
	const meals = container.querySelectorAll(".meals input:checked");
	meals.forEach((meal) => {
		sum += Number(meal.value);
	});

	// гід (radio)
	const guide = container.querySelector(".guides input:checked");
	if (guide) {
		sum += Number(guide.value);
	}

	return sum;
}

function initTravel() {
	const transports = [
		{ name: "Авто", price: 1000 },
		{ name: "Автобус", price: 500 },
		{ name: "Літак", price: 3000 },
	];
	const meals = [
		{ name: "Сніданок", price: 100 },
		{ name: "Обід", price: 200 },
		{ name: "Вечеря", price: 150 },
	];
	const guides = [
		{ name: "Anna", price: 500 },
		{ name: "Piter", price: 700 },
		{ name: "Ket", price: 600 },
	];
	createTravel(guides, transports, meals);
}
initTravel(); // далі реалізувати уже не зміг 
