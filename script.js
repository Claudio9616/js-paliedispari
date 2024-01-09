// PARI E DISPARI
// 1 recupero gli elementi dal DOM
// 2 creo la funzione per il numero randomico della CPU
// 3 creo la funzione per recuperare il valore numerico fornito dall'user
// 4 recupero gli argomenti da dare nei parametri della funziona 5
// 5 creo la funzione per verificare se la somma dei miei numeri è pari o dispari
// 6 apro la lista degli eventi e recupero tutto ciò che ho dichiarato fuori
// 7 verifico cosa ha scelto l'utente tra pari e dispari e contollo se corrisponde al risultato
//  della somma nel punto numero 5
// 8 stampo sul DOM

// 1
const button = document.getElementById('button')
const victory = document.getElementById('vincitore')
const number = document.querySelector('input')
const pR = document.querySelector('select')
// 2
function getResultCpu() {
    const resultCpu = Math.floor(Math.random() * 5) + 1
    return resultCpu
}
// 3
function getUserNumber() {
    const userNumber = parseInt(number.value)
    if (userNumber < 1 || userNumber > 5){
        alert('DEVI INSERIRE UN NUMERO COMPRESO TRA 1 E 5')
        return
    }
    if (isNaN(userNumber)){
        alert('DEVI INSERIRE UN NUMERO')
        return
    }
    return userNumber
}
// 4
const result = isEven(getResultCpu, getUserNumber)
// 5
function isEven(num1, num2){
    const sum = num1 + num2
    let resultNumber = ''
    if (sum % 2 === 0){
        resultNumber = 'PARI'
    } else{
        resultNumber = 'DISPARI'
    }
    return resultNumber
}
// 6
button.addEventListener('click', function(){
    const resultCpu = getResultCpu();
    console.log(resultCpu, ' resultCpu')
    const userNumber = getUserNumber()
    console.log(userNumber, ' userNumber')
    const resultNumber = isEven(resultCpu, userNumber)
    console.log(resultNumber, 'resultNumber')
    const paDi = pR.value
    console.log(paDi, ' PaDi')
    // 7
    let message = 'HO VINTO IO'
    let win = false
    if (resultNumber === paDi){
        message = 'HAI VINTO TU'
        win = true
    }
    // 8
    victory.innerText = `${message} ${resultNumber}`
})
//  PAROLA PALINDROMA
// 1 - faccio la domanda all'utente tramite un prompt dichiarandola in una variabile.
// 2 - inserisco come argomento, la variabile legata alla risposta dell'utente associandola ad una nuova variabile "resultWord".
// 3 - Costruisco la funzione.
// 4 - trasformo le lettere in minuscole
// 5 - Creo la condizionale per verificare che la parola inserita dall'utente sia palindroma o meno.

// - 1
let userWord = prompt("Inserisci una parola:");

// - 2
const resultWord = isPalindrome(userWord);

console.log(resultWord);

// - 3
function isPalindrome(userWord) {

    // - 4
    userWord = userWord.toLowerCase();

    // - 5
    if (userWord === userWord.split('').reverse().join('')) {
        return "La parola è palindroma!";
    } else {
        return "La parola non è palindroma.";
    }
}