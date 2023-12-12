
// 1

const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"];

const kabachokWords = words.filter(item => item.charAt(0) === 'a');
console.log(kabachokWords);
console.log(words.sort());

// не получилось самое длинное слово с массива найти

console.log(kabachokWords); 
console.log(words.length );

const newname = prompt("введи слово кабачок");
words.push(newname);

console.log(words);










//2

let num1 = [6, 18, 23, 3, 2, [22, 59]].flat()
let num2 = [101, 4, 59, 89, 0, 7, 31, 12,]



let num = num1.concat(num2);
console.log(num); 

let sum = num.reduce(( acc, num ) => acc + num) 
console.log(sum); 











// 3
let numbers = [42, 'Alex', 'John', 18, 23, 100, 1]
let names = ['Tyler', 'Stark', 'Jake', 'Igor']


let remove = numbers.splice(1, 2);
console.log(numbers);


names = names.concat(remove);
console.log(names);


if (!names.includes('Constantin')) {
  names.push('Constantin');
} else{

}

console.log(names); 