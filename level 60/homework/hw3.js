// 3) მოიძიეთ დამატებითი მეთოდები მასივებზე და გააკეთეთ თითოეულზე 3 მაგალითი (მოიძიეთ ინფორმაცია მასივის შემდეგ მეთოდებზე slice, splice, shift, unshift, IndexOf)


// splice მეთოდი ამოშლის კონკრეტულ ნაწილს და შეუძლია ჩაამატოს ახალი ელემენტები
let a = [1, 2, 3, 4]
a.splice(1,2)
console.log(a);


a.splice(1,0, 2, 3)
console.log(a);

a.splice(1,2)
console.log(a);

// slice მეთოდი ამოჭრის კონკრეტულ ნაწილს სიიდან და აქცევს ახალ ლიად
let b = [1, 2, 3, 4, 5, 6]
let c = b.slice(1, 6)
console.log(c)


let d = b.slice(0, 3)
console.log(d)

let e = b.slice(3, 6)
console.log(e)


//shipt მეთოდი შლის პირველ ელემენტს
let array = [1, 3, 5, 7]
console.log(array.shift())
console.log(array)


let sh = array.shift()
console.log(sh)

let sh2 = array.shift()
console.log(sh2)



// unshipt - თავში ამატებს ელემენტებს
array.unshift(3, 4)
console.log(array)

array.unshift(1, 2)
console.log(array)


array.unshift(-1, 0)
console.log(array)



// indexOf აბრუნებს ელემენტის ინდექსს

console.log(array.indexOf(7))
console.log(array.indexOf(0))
console.log(array.indexOf(4))

