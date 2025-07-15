// 3) შექმენით ერთი მასივი შეინახეთ მასში ხილის სახეობები მაგალითად [apple, cherry, strawberry, apple, orange], თქვენი დავალებაა გადაუაროთ მოცემულ სიას და დაითვალოთ თუ რამდენჯერ გხვდებათ (მაგალითად: 'Apple') ხოლი სიაში

let arr = ["apple", "cherry", "strawberry", "apple", "orange"];
let count = 0
for(let i of arr){
    if(i == "apple"){
        count += 1
    }
}
console.log(count);
