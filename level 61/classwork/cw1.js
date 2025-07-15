// 1) შექმენით ღილაკი, რომლის დაკლკიკების შემთხვევაში რიგრიგობით გამოჩნდება 2 prompt ორივეში მომხმარებელმა უნდა შეიტანოს რიცხვები, პირველრიოგში შეკრიბეთ ეს რიცხვები და შეინახეთ ცვლადში, შემდეგ შეამოწმეთ ორივე რიცხვი ლუწია თუ კენტი, საბოლოოდ ყოველ გაშვებაზე უნდა გამოცნდეს მხოლოდ 3 პარაგრაფი, პირველი რიცვხების ჯამი და დანარჩენი ორ პარაგრაფში იქნება ჩასმული შემოტანილი რიცხვი დეფისი და ლუწია/კენტია

// მაგ

// 5 10

// sum = 15
// 5 - odd
// 10 - even


let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
button.addEventListener("click", function(){
    let num1 = Number(prompt("enter first number"))
    let num2 = Number(prompt("enter first number"))
    h1.textContent = String(num1 + num2)
    if(num1 % 2 == 0){
        h2.textContent = `${num1} - even`
    }else{
        h2.textContent = `${num1} - Odd`
    }
    if(num2 % 2 == 0){
        h3.textContent = `${num2} - even`
    }else{
        h3.textContent = `${num2} - Odd`
    }
});

