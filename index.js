function pizzaPartyFunction(numberOfPeople) {
    // let numberOfPeople = document.getElementById("user_input").value;
    const SLICES_PER_PERSON = 2;
    const SLICES_PER_PIZZA = 12;
    const COST_PER_PIZZA = 18.75;
    let cost = ((numberOfPeople * SLICES_PER_PERSON) / SLICES_PER_PIZZA) * COST_PER_PIZZA;
    let msg = `The number of people at your party is ${numberOfPeople}: and the cost is $${cost}`;
    const el = document.getElementById("total");
    el.textContent = msg;
    console.log(msg);
}

function calculateCostPerPerson(numberOfPeople) {
    // let numberOfPeople = document.getElementById("user_input").value;
    const SLICES_PER_PERSON = 2;
    const SLICES_PER_PIZZA = 12;
    const COST_PER_PIZZA = 18.75;
    let cost = ((numberOfPeople * SLICES_PER_PERSON) / SLICES_PER_PIZZA) * COST_PER_PIZZA;
    let costPerPerson = (cost / numberOfPeople);
    let msg = `The cost per person is $${costPerPerson}`;
    const cost_for_each_person = document.getElementById("costPerPerson");
    cost_for_each_person.textContent = msg;

}
function allCalculations(){
    let numberOfPeople = document.getElementById("user_input").value;
    calculateCostPerPerson(numberOfPeople);
    pizzaPartyFunction(numberOfPeople);
}
const calcbtn = document.getElementById("CalcButton");
calcbtn.addEventListener("click", allCalculations);