// Function to append clicked value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression in the display
function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key; // The key pressed by the user

    // Handle numbers
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    // Handle operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    // Handle Enter (for equals)
    else if (key === 'Enter') {
        calculate();
    }
    // Handle Backspace (clear display)
    else if (key === 'Backspace') {
        clearDisplay();
    }
    // Handle decimal point
    else if (key === '.') {
        appendToDisplay(key);
    }
    // Handle Escape (clear display)
    else if (key === 'Escape') {
        clearDisplay();
    }
});
