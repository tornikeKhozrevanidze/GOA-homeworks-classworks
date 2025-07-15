// 5) შექმენით ფუნქცია სახელად sumNumbers რომელსაც გადაეცემა რიცხვების მასივი, for ციკლის გამოყენებიტ შეკრიბეთ ყველა რიცხვი და დააბრუნეთ ფუნქციიდან ჯამი
let listt = [2, 5, 7, 8]
function sumNumbers(list){
    let sum = 0
    for(let i of list){
        sum += i

    }
    return sum
}
console.log(sumNumbers(listt));
