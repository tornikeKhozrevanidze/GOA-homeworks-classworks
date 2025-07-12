// 6) შექმენით: 
// ორი პარაგრაფი
// ორი ღილაკი -- Change Text Content, Add innerHTML
// მოიპოვეთ მათზე წვდომა, როდესაც მომხმარებელი დააკლიკებს პირველ ღილაკს ხელს უნდა მოხდეს text - ის შიგთავსის შეცვლა, ხოლო როდესაც მომხმარებელი დააკლიკებს მეორე ღილაკს ხელს innerHTML - ის გამოყენებით უნდა ჩაამატოთ მეორე ელემენტში დამატებით ელემენტი <p><b>Value</b></p>, <p><strong></strong></p>, <p><i>Italic</i></</p> და ასე შემდეგ, კომენტარების სახით ახსენით თუ რა განსხვავებაა:
// div.innerHTML = `<p></p>`, div.innerHTML += `<p></p>` შორის

let p1 = document.querySelector("p")
let p2 = document.getElementById("second-p")

let but1 = document.querySelector("button")
let but2 = document.getElementById('button-2')

but1.addEventListener("click", function(){
    p1.textContent = "changed text content"

})
but2.addEventListener("click", function(){
    p2.innerHTML = "<b>changed text content</b>"
    
})


// innerHTML - აკონტროლებს მთლიან შიგთავსს
// textContent - აკონტროლებს მხოლოდ ტექსტს