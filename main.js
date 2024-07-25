let operator = ""
let previousValue = ""
let currentValue = ""

document.addEventListener("DOMContentLoaded", function () {
    let clearBtn = document.querySelector(".clear-button")
    let equalBtn = document.querySelector(".equal-button")
    let decimalBtn = document.querySelector(".decimal-button")

    let numbersBtn = document.querySelectorAll(".number-button")
    let operatorsBtn = document.querySelectorAll(".operator-button")

    let previousScreen = document.querySelector(".previous")
    let currentScreen = document.querySelector(".current")

    numbersBtn.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operatorsBtn.forEach((op) => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator
        currentScreen.textContent = currentValue
    }))

    clearBtn.addEventListener("click", function () {
        previousValue = ""
        currentValue = ""
        operator = ""
        previousScreen.textContent = currentValue
        currentScreen.textContent = currentValue
    })

    equalBtn.addEventListener("click", function () {
        if (currentValue != "" && previousValue != "") {
            calculate()
            previousScreen.textContent = ""
            currentScreen.textContent = previousValue
        }
    })
})

function handleNumber (num) {
    if (currentValue.length <= 5) {
        currentValue += num
    }
}

function handleOperator (op) {
    operator = op
    previousValue = currentValue
    currentValue = ""
}

function calculate () {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
    
    if (operator === "+") {
        previousValue += currentValue
    } else if (operator === "-") {
        previousValue -= currentValue
    } else if (operator === "x" ) {
        previousValue *= currentValue
    } else {
        previousValue /= currentValue
    }

    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
}