import { Calculator } from "./calculator";

const calc = new Calculator();

const buttonContent = [
	"7",
	"8",
	"9",
	"/",
	"4",
	"5",
	"6",
	"*",
	"1",
	"2",
	"3",
	"-",
	"0",
	".",
	"+",
	"="
];

const screenElem = document.getElementById("screen") as HTMLElement;
const buttonsElem = document.getElementById("buttons") as HTMLElement;

for (const buttonText of buttonContent) {
	const button = document.createElement("button");
	button.classList.add(
		"flex",
		"justify-center",
		"items-center",
		"bg-orange-400"
	);
	button.style.width = "99px";
	button.style.height = "99px";
	button.innerText = buttonText;

	button.addEventListener("click", () => {
		calc.pressButton(buttonText);
		screenElem.innerText = calc.display;
	});

	buttonsElem.appendChild(button);
}
