// 6) შექმენით ფუნქცია სახელად realFriends რომელსაც გადაეცემა სახელების მასივი, თქვენი დავალებააა შექმნათ ერთი ცარიელი მასივი სახელად myFriends რომელშიც მხოლოდ იმ სახელებს ჩაამატებთ რომლის ზომაც (სიმბოლოების რაოდენობაც) >= 4 შემდეგ კი დააბრუნეთ ეს მასივი
let list2 = ['name1', 'name2', 'Ana', 'Gia'];

function realFriends(friends) {
    let myFriend = [];
    for (let i of friends) {
        i = String(i)
        if (i.length >= 4) {
            myFriend.push(i);
        }
    }
    return myFriend;
}

console.log(realFriends(list2));
