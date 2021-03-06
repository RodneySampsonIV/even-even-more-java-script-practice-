
// Reviewing the big picture!
// For these first few questions, write a few sentences to explain your answers and post those directly in your comment at the bottom of this page (along with the links to your code for the other solutions). It's OK to do some research if you need a refresher -- just be sure to cite your sources!

// 1. What are arrays in JavaScript and why are they useful?
console.log("an array holds multiple elements or variables")
// 2. What are objects in JavaScript and why are they useful?
console.log("an object holds properties and methods ")
// 3. What are a couple of key differences between objects and arrays? (And can you find any good examples or metaphors that illustrate the difference?)
console.log("an object gives you the ability to assoiciate a property name with a value, arrays are typically used for a ordered list of items")

// 4. What is the index of an array? What is it used for?
console.log("the index of an array is the location of a value in it, it is used for locating stuff in a array based off a numerical value, for example 'array[0]' will grab the first value in the array")
// 5. What is a property?
console.log("a property is assoiciation between a key and value")
// 6. What is a method?
console.log("methods are actions you can use on objects")
// Review of arrays

// ✏️ Write and test your answers for this section here: https://repl.it/IlVK/0
// And remember to click "Save" at the top to save your progress and save the URL! When you're done, save it again, copy the links to your solutions, and paste them all into your comment on the bottom of this page.

// 7. Create an array named colors that contains five different names of colors as strings.
let colors = ['blue', 'green', 'yellow', 'orange', 'red',]
// 8. Access the first color in the array and print it to the console using console.log()
console.log(colors[0])
// 9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log(colors[2])
// 10. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors.push("ultraviolet")
console.log(colors)
// 11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = colors[3]
// 12. Add another color to the end of the list.
colors.push("ultrablue")
console.log(colors)
// 13. Add another color to the beginning of the list.
colors.unshift("darkgreen")
console.log(colors)
// 14. Print the length of the array to the console with console.log()
console.log(colors.length)
// 15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
colors.pop()
console.log(colors)
// 16. Write a for loop to iterate through every color in the array and print each color's value to the console.



function forloop() {
    for (let i = 0; i > 7; index++) {
        console.log(color)
        // let index = colors[0];
        colors.forEach(element => console.log(i) );        
    }
}
forloop(colors)
// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
function alsoAForLoop(){
    for (let index = 0; index >= 7; index++){
        let index = index[0]
        console.log(index)
    }
}
// 18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)

// ✔️ SOLUTION for array review problems: https://repl.it/IlVK/2

// Review of objects
// ✏️ Write and test your answers for this section here: https://repl.it/IlV2/1

// For now, we'll just stick with one way to create objects in JavaScript called object literal notation or object initializers. Feel free to use that link as a reference or find other examples online if you need a refresher.

// 📚 For extra review: read MDN's intro to JavaScript objects

// 19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

// 20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

// 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

// 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

// 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!

// 24. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)

// 25. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

// 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

// Hint: Remember to use the very handy this keyword to access the object that your new method is currently attached to!

// 27. Call your penguin's fly() method and make sure it works!

// 28. Change the canFly property to true -- again, without modifying any of your previous code!

// 29. Now call your penguin's fly() method again and make sure it works as expected!

// 30. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

// 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

// ✔️ SOLUTION for object review problems: https://repl.it/IlV2/7

// Arrays inside objects
// ✏️ Write and test your answers for this section here: https://repl.it/IlVj/3

// 32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

// 33. Access your penguin's second favorite food and print it to the console using console.log()

// 34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

// 35. Add another food to the end of the list.

// 36. Print the length of your penguin's favoriteFoods array to the console with console.log()

// 37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

// 38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)

// 39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

// ✔️ SOLUTION for arrays inside objects review problems: https://repl.it/IlVj/4

// Objects inside other objects
// ✏️ Write and test your answers for this section here: https://repl.it/IlVr/4

// It's cold at the South Pole, so let's give this penguin some clothes!

// 40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

// 41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

// 42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

// 43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)

// 44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)

// 45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)

// ✔️ SOLUTION for arrays inside objects review problems: https://repl.it/IlVr/6

// Objects inside arrays
// ✏️ Write and test your answers for this section here: https://repl.it/IlVy/4

// For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end of your code:





// var gunter = {
//   name: "Gunter",
//   origin: "Adventure Time",
//   canFly: false,
//   sayHello: function () {
//     console.log("QUACK!!!");
//   }
// };

// var ramon = {
//   name: "Ramón",
//   origin: "Happy Feet",
//   canFly: true,
//   sayHello: function () {
//     console.log("Estoy encantado de conocerle.");
//   }
// };

// var fred = {
//   name: "Fred",
//   origin: "Sitting Ducks",
//   canFly: false,
//   sayHello: function () {
//     console.log("Hi there!");
//   }
// };





// 46. Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)

// 47. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

// 48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

// 49. Print to the console the name of the last penguin in the list.

// 50. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

// 51. Print the length of the penguins array to the console.

// 52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

// 53. Call the sayHello method of the first penguin in your penguins array!

// 54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

// 55. Write a for loop to call the sayHello method of every penguin in the array!

// 56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

// 57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)