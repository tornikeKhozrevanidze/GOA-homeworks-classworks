let div1 = document.getElementById("div1")
div1.style.width = "100px"
div1.style.height = "100px"
div1.style.backgroundColor = "green"
// დააბრუნებს ერთ ელემენტს

let div2 = document.getElementsByClassName("div2")
div2 = div2[0]
div2.style.width = "100px"
div2.style.height = "100px"
div2.style.backgroundColor = "blue"
// დააბრუნებს ლიოსტს

let p = document.getElementsByTagName("p")
p = p[0]
p.style.width = "100px"
p.style.height = "100px"
p.style.backgroundColor = "yellow"
// დააბრუნებს ლიოსტს



div1.innerHTML += "<p>tornike</p>"
div1.innerHTML += "<p>khozrevanidze</p>"
div1.innerHTML += "<p>18</p>"

// innerHTML - მთლიან შიგთავსს მოიცავს, TEXTcontent - მხოლოდ ტექსტს