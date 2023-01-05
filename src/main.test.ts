import { Calculator } from "./calculator";
import { test, describe, expect, assert } from "vitest";
import { data } from "autoprefixer";

describe("check basic operations", () => {
	test("pressButton('1') changes currentValue to '1'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		expect(calc.currentValue).toEqual("1");
	});

	test("1 + 1 = 2", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("2");
	});

	test("7 - 4 = 3", () => {
		const calc = new Calculator();
		calc.pressButton("7");
		calc.pressButton("-");
		calc.pressButton("4");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("3");
	});

	test("2 * 2 = 4", () => {
		const calc = new Calculator();
		calc.pressButton("2");
		calc.pressButton("*");
		calc.pressButton("2");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("4");
	});

	test("12 / 3 = 4", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("/");
		calc.pressButton("3");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("4");
	});
});

describe("test digit button + operator interactions effect on display", () => {
	test("pressing '1', '1', '+' changes display value to '11'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		expect(calc.display).toEqual("11");
	});

	test("pressing '1', '1', '+', '1' changes display value to '1'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		expect(calc.display).toEqual("1");
	});

	test("pressing '1', '1', '+', '1', '1', '=' changes display value to '22'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.display).toEqual("22");
	});

	test("pressing '1', '1', '+', '1', '1', '+' changes display value to '22'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		expect(calc.display).toEqual("22");
	});

	test("pressing '1', '+', '1', '+', '1', '=' changes display value to '3'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.display).toEqual("3");
	});
});

function randomWithinRange(n: number, m: number) {
	return Math.random() * (m - n) + n;
}

describe("random tests, nothing to do with the calculator", () => {
	test("add something to my fakeDB", () => {
		const fakeDB: any[] = [];
		// add something
		fakeDB.push({ random: "example" });
		// check if it was added to DB by querying the thing and seeing if it exists
		expect(fakeDB[0]).toBeDefined();
	});

	test("randomWithinRange(0,20) < 20 and > 0", () => {
		const result = randomWithinRange(0, 20);
		expect(result).toBeLessThanOrEqual(20);
		expect(result).toBeGreaterThanOrEqual(0);
	});

	test("randomWithinRange(7, 23) < 23 and > 7", () => {
		const result = randomWithinRange(7, 23);
		console.log(result);
		expect(result).toBeLessThanOrEqual(23);
		expect(result).toBeGreaterThanOrEqual(7);
	});

	test("check if fakeDB connects", () => {
		// fake database query to check for connection
		const databaseConnects = new Promise((resolve, reject) => {
			resolve(true);
		});

		expect(databaseConnects).resolves.toEqual(true);
	});

	test("check if coffee pot is turned off after 8pm", async () => {
		// fake database query to check for connection
		const coffeePotTurnedOn = new Promise((resolve, reject) => {
			resolve(false);
		});

		const response = await coffeePotTurnedOn;

		expect(response).toEqual(false);
	});
});
