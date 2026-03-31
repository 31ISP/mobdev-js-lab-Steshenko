const nums = [4,5,3,5,2,4,5,3]
const sum = nums.reduce((acc, n) => acc + n / 8, 0 ).toFixed (2)
console.log(sum)
const evens = nums.filter(n => n>3)
console.log(evens)
const squared = evens.map(n => n = "Оценка: 5" )
console.log(squared)
const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const Papa = fruits.sort().join(",")
console.log(Papa)
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const p = products.filter(p => p.price < 10000)
const par = products.map(p => p.name)
const rar = products.reduce((acc,p) => acc + p.price,0)
console.log(p)
console.log(par)
console.log(rar)
const mas = [12, 45, 7, 33, 18]
const x = mas.some(m => 40)
const y = mas.every(m => 5)
console.log(x)
console.log(y)
