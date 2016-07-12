/*Create diner objects which represent a single diner.
Add dishes to a diner's meal
Total up the cost of all of the diners' meals
Add a fixed tax percentage to the total bill
Add a percentage tip to the total bill
Split the bill fairly among the diners
Each diner should pay the tax on their own food
Each diner should pay an equal share of the tip
If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge.
Print out a total bill
Print a breakdown for what each diner owes*/

//Diner class constructor object
function Diner(name,wallet){
    this.name = name;
    this.wallet = wallet;
    this.ate = ['pasta', 'soda'];
}

var space = "************************";

//create Diner instances
var bob = new Diner("Bob",20);
var lisa = new Diner("Lisa",30);
var jim = new Diner("Jim",35);

//method to add dishes to diner's meal
function addItem (diner, item, qty) {
    for (var i = 0; i < qty; i++) {
        diner.ate.push(item) * qty;
    }
}

var mealSum = 0; //defining variable for the table's sum of the food

//method to sum the cost of a meal
function indivMeal (ticket) {
        var sum = 0;
        for (var i = 0; i < ticket.length; i++){
        switch (ticket[i]) {
            case 'pasta':
                sum += 4.99;
                break;
            case 'burger':
                sum += 2.99;
                break;
            case 'pickles':
                sum += .49;
                break;
            case 'soda':
                sum += .99;
                break;
        }
    }
    mealSum += sum;
    return sum; //removes undefined from console
}

function sumMeals(){
    console.log("Total food cost: $" + mealSum);
    return space;
}

var totalCost = 0;

function addTotalTax(mealCost) {
    var tax = mealSum * .08;
    totalCost = mealSum + tax;
    console.log("Total tax cost: $" + Math.round(tax * 100) / 100); //rounds tax to 2 decimals
    console.log("Total check cost: $" + Math.round(totalCost * 100) / 100); //rounds tax to 2 decimals
    return space; //removes undefined from console
}

function addTip(tipPercent) {
    var totalTip = totalCost * tipPercent;
    totalCost += totalTip;
    console.log("Tip w/ " + tipPercent + "% tip: $" + Math.round(totalTip * 100) / 100);
    console.log("Total Check w/ tip cost: $" + Math.round(totalCost * 100) / 100);
    return space;
}

//add some items to their orders - sick addItem() function
addItem(lisa,'pickles',4);
addItem(jim,'soda',1);

//create variables for meal costs
var bobsMealCost = indivMeal(bob.ate);
var lisasMealCost = indivMeal(lisa.ate);
var jimsMealCost = indivMeal(jim.ate);

function addIndivTax(mealCost) {
    var tax = mealCost * .08;
    mealCost += tax;
    console.log(mealCost);
    return mealCost;
}

//execute functions
console.log("Bobs's seat: $" + bobsMealCost.toFixed(2)); // calculating Bob's meals
console.log("Bobs's seat w/ tax: $" + addIndivTax(bobsMealCost).toFixed(2)); // calculating Bob's tax
console.log("Lisa's seat: $" + lisasMealCost.toFixed(2)); // calculating Lisa's meals
console.log("Lisa's seat w/ tax: $" + addIndivTax(lisasMealCost).toFixed(2)); // calculating Lisa's tax
console.log("Jims's seat: $" + jimsMealCost.toFixed(2)); // calculating Jim's meals
console.log("Jim's seat w/ tax: $" + addIndivTax(jimsMealCost).toFixed(2)); // calculating Jim's tax
console.log(sumMeals()); //summing food costs
console.log(addTotalTax(indivMeal(bob.ate))); //summing tax cost and total check cost
console.log(addTip(.15)); //adds tip and prints total w/ tip