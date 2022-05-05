let item_1 = 5 
console.log(item_1)
let item_2 = 3
console.log(item_2)
let item_3 = item_1 + item_2
console.log(item_3)
let item_4 = 'Yolochka'
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
let item_5 = item_3
let item_6 = 15
let item_6_type = typeof(item_6)
console.log(typeof(item_6), typeof(item_6_type))
let item_7 = 'item_6'
let item_7_type = typeof(item_7)
console.log(typeof(item_7), typeof(item_7_type))

let age_1 = 120
let age_2 = 18
let age_3 = 60
 if (age_1 < age_2) {
     console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then')
 } else if (age_1 >= age_2 && age_1 < age_3) {
     console.log('Welcome  !')
 } else if (age_1 > age_3) {
     console.log('Keep calm and look Culture channel')
 } else {
     console.log('Technical work')
 }

 const checkAge1 = function(age) {
    if (age < age_2) {
        console.log('You don’t have access cause your age is ' + age + ' It’s less then')
    } else if (age >= age_2 && age < age_3) {
        console.log('Welcome  !')
    } else if (age > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    } 
 }


checkAge1(17)
checkAge1(18)
checkAge1(61)


const checkAge2 = function(age_4) {
    if (typeof age_4 !== "number") { 
        console.log('Type not')
    } else if (age_4 < age_2) {
        console.log('You don’t have access cause your age is ' + age_4 + ' It’s less then')
    } else if (age_4 >= age_2 && age_4 < age_3) {
        console.log('Welcome  !')
    } else if (age_4 > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    } 
 }

checkAge2(17)
checkAge2(18)
checkAge2(61)
checkAge2("hello world")

const filterInt = function(value) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value)
    return NaN
}
console.log(filterInt('777'))


const checkAge3 = function(age_5) {
    age = Number(age_5)
    if (!isNaN(age_5)) {

    if (age_5 < age_2) {
        console.log('You don’t have access cause your age is ' + age_5 + ' It’s less then')
    } else if (age_5 >= age_2 && age_5 < age_3) {
        console.log('Welcome  !')
    } else if (age_5 > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    } 
 } else {console.log('Not integer value')}
}

checkAge3(17)
checkAge3(18)
checkAge3(61)
checkAge3("hello world")
checkAge3("2")

let agePromt = prompt('Insert your age')
checkAge3(agePromt)

