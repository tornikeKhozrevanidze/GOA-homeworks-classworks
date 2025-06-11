let header_heart = document.getElementById("header-heart")
let heart_page = document.getElementById("heart-page")

header_heart.addEventListener("click", function(){
    heart_page.style.display = "flex"
})

let heart_page_x = document.getElementById("heart-page-x")

heart_page_x.addEventListener("click", function(){
    heart_page.style.display = "none"
})


let bag_heart = document.getElementById("header-bag")
let bag_page = document.getElementById("bag-page")

bag_heart.addEventListener("click", function(){
    bag_page.style.display = "flex"
})

let bag_page_x = document.getElementById("bag-page-x")

bag_page_x.addEventListener("click", function(){
    bag_page.style.display = "none"
})




let profile_heart = document.getElementById("header-profile")
let profile_page = document.getElementById("profile-page")

profile_heart.addEventListener("click", function(){
    profile_page.style.display = "flex"
})

let profile_page_x = document.getElementById("profile-page-x")

profile_page_x.addEventListener("click", function(){
    profile_page.style.display = "none"
})