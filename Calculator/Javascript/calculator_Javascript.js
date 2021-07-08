//create an object to keep track of values
const Calculator = {
    //this displays 0 on the screen
    Display_Value: '0',
    // this will hold the first operand for any expressions we set in to null or now
    first_Operand: null,
    // this checks wether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, we set it to null for now
    operator: null,
};

function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we are checking to see if wait_second_operand is true and set
    // display_value to the key was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrites display value if the current value is 0
        // otherwise it adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}
// this section handles decimal pointss
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// section handles operators
function Handle_Operator(Next_Operator) {
    const { first_Operand, Display_Value, operator } = Calculator
    // when an operator key is pressed we convert the current num
    // displayed on screen to a number n then store the result in
    // calculator first operand if it doesnt alrdy exist
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists and if wait_second_operand is true
    //then updates the operator and exists from the function
    if (operator && Calculator.Wait_Second_Operand) { 
        Calculator.operator = Next_Operator;
        return;
    }
    if (first_Operand == null) {
        Calculator.first_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = first_Operand || 0;
        // if operator exists, property lookup is performed for the operator 
        // in the perform_calculation object and the function tht matches the
        // operator us executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // this will remove any trailings 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.first_Operand - parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (first_Operand, Second_Operand) => first_Operand / Second_Operand,
    '*': (first_Operand, Second_Operand) => first_Operand * Second_Operand,
    '+': (first_Operand, Second_Operand) => first_Operand + Second_Operand,
    '-': (first_Operand, Second_Operand) => first_Operand - Second_Operand,
    '=': (first_Operand, Second_Operand) => Second_Operand
    
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.first_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the screen with contents of display_value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// this section monitors button clicks 
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element
    // that was clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }  
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
            return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})