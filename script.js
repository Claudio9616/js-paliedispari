const button = document.getElementById('button')
const victory = document.getElementById('vincitore')
const number = document.querySelector('input')
const pR = document.querySelector('select')
function getResultCpu() {
    const resultCpu = Math.floor(Math.random() * 5) + 1
    return resultCpu
}
function getUserNumber() {
    const userNumber = parseInt(number.value)
    return userNumber
}
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
const result = isEven(getResultCpu, getUserNumber)

button.addEventListener('click', function(){
    const resultCpu = getResultCpu();
    console.log(resultCpu, ' resultCpu')    
    const userNumber = getUserNumber()
    console.log(userNumber, ' userNumber')
    const resultNumber = isEven(resultCpu, userNumber)
    console.log(resultNumber, 'byhbhbh')
    const paDi = pR.value
    console.log(paDi, ' PaDi')
       
})