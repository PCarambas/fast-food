const rawIngredients = ["beef patty", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredients of rawIngredients) {
    if (ingredients === "egg") {
        finishedFood.push("biscuit")
    }
    else if (ingredients === "beef patty") {
		finishedFood.push("burger")
    }
    else if (ingredients === "potato") {
        finishedFood.push("fries")
    }

}

console.log(finishedFood)