// საკლასო დავალება:

// html-ში დაამატეთ ერთი ღილაკი, რომლის id იქნება button-main.

// ეს ღილაკი id-ის გამოყენებით წამოიღეთ js-ში და მისი ტექსტკონტენტი გაუტოლეთ თქვენს სახელს.

let button = document.getElementById("button-main")
button.addEventListener('click', function(){
    button.innerHTML = "text-clicked"
})








// საკლასო დავალება:

// html-ში დაამატეთ პირველი დონის სათაური, რომლის id იქნება h1-1.

// ეს ელემენტი წამოიღეთ js-ში და მას შეუცვალეთ: ფერი, ფონის ფერი, font weight, font size, border radius
let h1 = document.getElementById("h1-1")
h1.style.color = "green"
h1.style.backgroundColor = "black"
h1.style.fontWeight = "100"
h1.style.fontSize = '20px'
h1.style.borderRadius = "5px"








// საკლასო დავალება:

// html-ის დოკუმენტში დაამატეთ ერთი ღილაკი, რომლის ID იქნება button-main და ერთი პარაგრაფი, რომლის ID იქნება p-main.

// js-ში წამოიღეთ ორივე ელემენტი ID-ის გამოყენებით.

// ღილაკს შეუცვალეთ ფონი და ტექსტის ფერი, ხოლო პარაგრაფს შეუცვალეთ ფონტის ზომა და ტექსტ კონტენტი

let button2 = document.getElementById("button-main2")
button2.style.color = "blue"
button2.style.backgroundColor = "brown"

let p = document.getElementById("p-main")
p.style.fontSize = '20px'
p.innerHTML = 'changed-content'