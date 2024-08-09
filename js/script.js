//              id
output_task_1 = document.getElementById('output-task-1')
guessField = document.getElementById('guessField')
guessResult = document.getElementById('guessResult')
clicks = document.getElementById('clicks')
//              1.
const printHi = () => output_task_1.textContent = 'Hello World'
const buttonClick_task_1 = () => printHi()
//               2.
const checkGuess = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    contentOfInput = Number.parseFloat(guessField.value)

    if(contentOfInput == randomNumber){
        guessResult.textContent = 'Так ви вгадали, загадане число було: ' + randomNumber
    }
    else{
        guessResult.textContent = 'Нажаль але ви не вгадали, загадане число було: ' + randomNumber
    }
}
//         3.
let clicksCounter = 0
const checkClicks = () => {
    clicksCounter++
    clicks.textContent = clicksCounter
}
//                  4.

const applyCallbackToEachElement = (array,callback) =>{
    let arrayFinal = []
    for (elementArray of array){
        arrayFinal.push(callback(elementArray)) 
    }
    return arrayFinal
} 
const squareCallback = (num1) => num1*num1;
const arr = [1,2,3,4,5]
const result = applyCallbackToEachElement(arr,squareCallback)
console.log(result)  
//                    5.
const calculateDiscounredPrice = (price,discount,callback) => callback(price-((price/100)*discount))
const showDiscountedPrice = (finalprice) => console.log(finalprice) 
calculateDiscounredPrice(100,10,showDiscountedPrice) 