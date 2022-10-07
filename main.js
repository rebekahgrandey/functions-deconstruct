// //HOW TO CLEAN ROLLER SKATE WHEELS
// //remove wheels, wheel nuts and washers
// //remove all hair and other large debris
// //fill up container with rubbing alcohol
// //submerge metal pieces in alcohol-filled container
// //cover container with lid
// //shake for 30 seconds
// //let set for 30 minutes
// //while waiting, clean inside of wheels with cotton swab
// //place a paper towel on surface
// //remove pieces from container
// //lay on towel and wait 24 hours to dry
// //next day, reassemble metal pieces and wheels

// const removeParts= () => {
// 	console.log("Remove wheels, wheel nuts and washers")
// }
// const removeDebris= () => {
// 	console.log("Remove all hair and other large debris")
// }
// const fillContainer= () => {
// 	console.log("Fill up container with rubbing alcohol")
// }
// const submergeMetal= () => {
// 	console.log("Submerge metal pieces in alcohol-filled container")
// }
// const coverContainer= () => {
// 	console.log("Cover container with lid")
// }

// removeParts()
// removeDebris()
// fillContainer()
// submergeMetal()
// coverContainer()








const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let result = add(17, 9)
console.log(result)
> 26

result = add(-13, -7)
console.log(result)
> -20

result = add(4, 58)
console.log(result)
> 62

const subtract = (firstNumber, secondNumber) => {
    const minus = firstNumber - secondNumber
    return minus
}

result = subtract(200, 50)
console.log(result)

const multiply = (firstNumber, secondNumber) => {
    const mult = firstNumber * secondNumber
    return mult
}
result = multiply(7, 6)
console.log(result)

const division = (firstNumber, secondNumber) => {
    const divide = firstNumber / secondNumber
    return divide
}
result = division(42, 7)
console.log(result)

const square = (oneNumber) => {
    const sq = oneNumber * oneNumber
    return sq
}
result = square(7)
console.log(result)





















// // No parameters defined because function needs nothing to do its job
// // Produce a car chassis (no input, outputs new chassis object)
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

// Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
    
}


const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = 4

	return chassisObject
}

const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.engine = "4.8L"

	return chassisObject
}

const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheel = "Tilting"

	return chassisObject
}

const addDriveTrain = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.driveTrain = "Two Wheel Drive"

	return chassisObject
}

const chassis = createChassis()
console.log(chassis)
const chassisWithBody = addBody(chassis)
console.log(chassisWithBody)
const chassisWithWheels = addWheels(chassisWithBody)
console.log(chassisWithWheels)
const chassisWithEngine = addEngine(chassisWithWheels)
console.log(chassisWithEngine)
const chassisWithWheel = addSteeringWheel(chassisWithEngine)
console.log(chassisWithWheel)
const chassisWithTrain = (chassisWithWheel)
console.log(chassisWithTrain)

console.log("************************")

// Define a function named buyChocolate. The function needs no parameters. It should return an object with a type property whose value is "Milk chocolate".

const buyChocolate = () => {
    const chocolate = {type: "Milk chocolate"}
    return chocolate
}
// Define a function named addFlavoring. The function needs one parameter to accept an object as input. It should add a new flavor property to the object with a value of "Mint".
const addFlavoring = (chocolate) => {
    chocolate.newFlavor = "Mint"
    return chocolate
}
// Define a function named makeBarkMixture. It should have one parameter for an incoming object to be stored for use in the function.
const makeBarkMixture = (chocolate) => {
// Time for another if block. This time, you will also need a corresponding else block.
if (newFlavor === "Mint") {
    chocolate.mixed === true
} else {
    chocolate.mixed === false
}
// The function must verify that the right flavor is being used to make the mixture. If the flavor property on the object is equal to "Mint", then you should add a new mixed property to the object with a value of true. If the flavor is not "Mint" then the property value should be false.
    return chocolate
}
// Define a function named bakeCandy. It should have one parameter for an incoming object to be stored for use in the function.
const bakeCandy = (chocolate) => {
// Time for another if block. This time, you will also need a corresponding else block.
if (chocolate.mixed === true) {
    chocolate.baked === true
// The function should check if the mixed property on the incoming object has a value of true. If it does, then add a baked property to the object with a value of true.
} else {
    chocolate.baked === false
// If the mixed property is not true, then add a baked property with a value of false.
}
    return chocolate
}
// Define a function named breakBark. It should have one parameter for an incoming object to be stored for use in the function.
const breakBark = (chocolate) => {
// Time for another if block. No else block needed this time.
if (chocolate.baked === true) {
const mintArray = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
// If the incoming object's baked property is true, the function should return a new array with 6 strings in it. Each string should be "Mint Chocolate Bark Piece".
return [mintArray]
}
// If the baked property value is false, the function should not return anything. This means that the return statement should be inside the if block instead of outside of it.
}

// console.log("*****************************")

// // Object representing Ringer
// const dog = {
// 	name: "Ringer",
// 	age: 4,
// 	breed: "Cocker Spaniel"
// }

// // Define a function to convert the object to a string
// const dogHTMLMaker = (dogObject) => {
// 	// Make some HTML to represent the dog
// 	const dogHTMLSection = `<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old/section>`

// 	// Return the HTML
// 	return dogHTMLSection
// }

// // Invoke the function and give the minion what it needs to do its job.
// const stringReturnedFromFunction = dogHTMLMaker(dog)

// console.log(stringReturnedFromFunction)

// > "<section>Ringer the Cocker Spaniel is 4 years old/section>"


/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

// 1. Paste the object into console for variable

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//2. Define a function to convert the object to a string
    const stringMaker = (computerObject) => {
//3. Interpolate string using parameter & dot notation
    const stringSection= `<section id="computer--${computerObject.id}">\n 
    <h1>${computerObject.manufacturer}</h1>\n
    <div>Model: ${computerObject.model}</div>\n
    <div>Memory: ${computerObject.specs.memory} GB</div>\n
    <div>Hard drive space: ${computerObject.specs.hardDrive} GB</div>\n
    <div>Processor speed: ${computerObject.specs.processor} Ghz</div>\n
    </section>`
//4. Return the parameter so it will actually execute   when invoked
    return stringSection
    }
//5. Pass in computer variable as parameter
    const sectionResults = stringMaker(computer)
//6. Check results of function
    console.log(sectionResults)


////QUESTION: How to insert value AND key in these instead of having to type out key as a string


// const sectionResult = makeSection(computer)
// console.log(sectionResult)




