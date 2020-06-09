let image = document.getElementById(`image`)
let moneyParagraph = document.getElementById(`moneyParagraph`)
let incomeParagraph = document.getElementById(`incomeParagraph`)
let incomeButton = document.getElementById(`incomeButton`)

let money = 0
let income = 1
let cost = 10

image.addEventListener(`click`, addMoney)
incomeButton.addEventListener(`click`, addIncome)

function addMoney() {
  money = money + income
  moneyParagraph.innerHTML = `Money: $${money}`
}

function addIncome() {
  if (money >= cost) {
    income = income + 1
    incomeParagraph.innerHTML = `Income: $${income}`

    money = money - cost
    moneyParagraph.innerHTML = `Money: $${money}`

    cost = cost * 2
    incomeButton.innerHTML = `Increase income (cost $${cost})`
  }
}