export class Calculator {
	display: string = "0";
	prevValue: string = "";
	currentValue: string = "";
	operator: string | null = null;
	moveValue: boolean = false;

	constructor() {}

	updateDisplay() {
		this.display = this.currentValue;
	}

	clear() {
		this.display = "0";
		this.currentValue = "";
	}

	// checks if value given is exactly one character; that character can only be 0-9
	isDigit(value: string) {
		const pattern = /[0-9]/;
		return pattern.test(value);
	}

	pressButton(value: string) {
		const operatorIsSet = this.operator != null;
		const isDigit = this.isDigit(value);

		if (operatorIsSet) {
			if (this.moveValue) {
				this.prevValue = this.currentValue;
				this.currentValue = "";
				this.moveValue = false;
			}

			if (isDigit) {
				this.currentValue += value;
				this.updateDisplay();
			} else {
				this.calculate();
				this.updateDisplay();

				if (value != "=") {
					this.operator = value;
					this.moveValue = true;
				} else {
					this.operator = null;
				}
			}
		}

		if (!operatorIsSet) {
			if (isDigit) {
				this.currentValue += value;
				this.updateDisplay();
			} else {
				if (value != "=") {
					this.operator = value;
					this.moveValue = true;
				}
			}
		}
	}

	calculate() {
		if (this.operator == "+") {
			this.currentValue = String(
				Number(this.prevValue) + Number(this.currentValue)
			);
		} else if (this.operator == "-") {
			this.currentValue = String(
				Number(this.prevValue) - Number(this.currentValue)
			);
		} else if (this.operator == "*") {
			this.currentValue = String(
				Number(this.prevValue) * Number(this.currentValue)
			);
		} else if (this.operator == "/") {
			this.currentValue = String(
				Number(this.prevValue) / Number(this.currentValue)
			);
		} else {
			console.log("don't know how to calculate");
		}
	}
}
