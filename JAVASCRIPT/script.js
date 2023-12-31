// 1 - var, let e const

var x = 10
var y = 15

console.log(x)

let a = 12
let b = 15

if (a > 10) {
    let b = 20
    console.log(b)
}

console.log(b)

function logName(){
    const name = 'João'
    console.log(name)
}

const name = "Rogério"

logName()

console.log(name)

// 2 arrow function

const sum = function sum(a, b){
    return a+ b
}

const arrowSum = (a, b) =>  a + b


console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if (name){
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting("Rogério"))
console.log(greeting())


const testeArrown = () => console.log('Testou!')

testeArrown()

const user = {
    name: 'Theo',
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }
}

//user.sayUserNameArrow()

// 3 - Filter

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [{name: 'Matheus', available: false},
               {name: 'Rogério', available: true},
               {name: 'Yuri', available: true},
               {name: 'Chupeta', available: false},]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)               

console.log(availableUsers)
console.log(notAvailableUsers)

// 4 - Map

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Eletrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400.99, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Eletro'){
        product.onSale = true
    }
})

console.log(products)

//5 - Template Literals

const userName = 'Matheus'
const age = 30

console.log(`O nome do rapaz é ${userName}, e ele tem ${age} anos de idade.`)

//6 - Destructuring

const fruits = ['Maçã', 'Laranja', 'Mamão']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)


const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory}, e a cor é ${color} `)

//7 - Spread operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)

//8 Classes

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) /100)
    }
}


const shirt = new Product ('Camisa gola V', 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis Verde', 120)

console.log(tenis.productWithDiscount(20))

//9 Herança

class ProductWithAtributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('A cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAtributes('Chapéu', 29.99,['Preto', 'Azul', 'Verde'])

console.log(hat.name)

console.log(hat.productWithDiscount(50))

hat.showColors()