// Imports
import { calculateDeltaV } from "./functions.js";

// Selectors
const inputs = document.querySelectorAll('input');
const selections = document.querySelectorAll('select');
const buttons = document.querySelectorAll('button');

// Arrays
const inputArray = [...inputs];
const selectArray = [...selections];
const buttonArray = [...buttons];

const [calcButton, resetButton] = buttonArray;

// Classes
class InputSelect {
    constructor(input, select) {
        this.input = input;
        this.select = select;
    }
    
    update() {
        this.inputValue = this.input.value;
        this.selectValue = this.select.value;
    }

    display() {
        console.log([this.select, this.input]);
    }
}

// statements
const objects = inputArray.map((input, index) => new InputSelect(input, selectArray[index]));

const [isp_obj, g0_obj, m0_obj, mF_obj, deltaV_obj] = objects;

const standardGravity = 9.807;

// Events
calcButton.addEventListener('click', () => {
    objects.forEach(object => {
        object.update();
    }); 

    deltaV_obj.input.value = calculateDeltaV(isp_obj.inputValue, g0_obj.inputValue, m0_obj.inputValue, mF_obj.inputValue);
});

resetButton.addEventListener('click', () => {
    objects.forEach(object => {
        object.input.value = ''
    });
    g0_obj.input.value = standardGravity;
})



