const input = document.querySelector('.display');
const buttons = document.querySelectorAll('.calculator-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'C':   input.value = ''; break;
            case '<':   input.value = input.value.slice(0, -1); break;
            case '+/-': input.value = String(-parseFloat(input.value)); break;
            case '=':   input.value = eval(input.value); break;
            case '%':   input.value = eval(input.value) / 100; break;
            default:    input.value += value; break;
        }
    });
});