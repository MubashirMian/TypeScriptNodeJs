export function divide(num1, num2) {
    if (num2 != 0) {
        const result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
    }
    else {
        console.log(`Cannot be divided by zero`);
    }
}
