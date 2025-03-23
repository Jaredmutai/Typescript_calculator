function calculate(): void {
    let num1 = document.getElementById("num1") as HTMLInputElement;
    let num2 = document.getElementById("num2") as HTMLInputElement;
    let result = document.getElementById("result") as HTMLParagraphElement;

    let sum = add(Number(num1.value), Number(num2.value));
    result.innerText = `Result: ${sum}`;
}
