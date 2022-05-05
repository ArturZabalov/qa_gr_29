let i = 1
while (i <= 10) {
    let stepen = 2**i
    console.log(stepen)
    i++
}

function stepen2(i) {
    return 2**i 
}
console.log(stepen2(2))


let j = ''
let s = 0
while (s <= 5) {
    console.log(j)
    s++
    j = j + ':)'
}



function printSmile(stroka, numberOfRows) {
    let p = 1
    while (p <= numberOfRows) {
        console.log(stroka)
        p++
        stroka = stroka + ':(('
    }
}
printSmile(':((', 5)


function getWordStructure(word) {
    let countS = 0
    let countG = 0
    const soglasnbie = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    const glasbie  = ['a', 'e', 'i', 'o', 'u', 'y']
    for (let char of word.toLowerCase()) {
        if (glasbie.includes(char)) countG++
        if (soglasnbie.includes(char)) countS++ 
    }
    console.log(`Слово ${word} состоит из ${countS} согласных и ${countG} гласных`)
    
}
getWordStructure('Waasrtpsdsss')

function isPalindrome(word1) {
    let newStroka = ''
    for (i=word1.length - 1; i>=0; i --) {
        newStroka = newStroka + word1[i]
    }
    if (word1.toLowerCase() == newStroka.toLowerCase()) {
        console.log('Это палиндром')
    } else {
        console.log('Это не палиндром')
    }
}
isPalindrome('Abba')