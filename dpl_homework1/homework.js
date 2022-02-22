// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
//------------------------------------------------------------------------------------


// for (var x=0; x<=10; x++) {
//     if (x ===0) {console.log (x + 'is even')
//     }
//     else if (x % 2 ===0) {
//         console.log (x + 'is even')
//     }
// }


// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
//-------------------------------------------------------------------------------


// console.log('count from 10')
// for(let i =10; i >=0; i--) {
//   console.log(i)
// }

// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
//let nums = [1,2,3,4,5,6,7,8,9,10]
//--------------------------------------------------------------------------------------


// for (var x=0; x<=10; x++) {
//      if (x % 2 ==0) {
//         console.log (x + ' is even')
//     }
//     else {
//         console.log(x + ' is odd')
//     }
// }

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
//------------------------------------------------------------------------------------


// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count +=1;
// }


// 5. Look closely at the code below
//----------------------------------------------------------------------

const isOdd = (num) =>{
    return num % 2 === 0
}

if(isOdd(6)){
    console.log('is Odd')
} else {
    console.log('is Even')
} 




// 6. what will this log?
//-------------------------------------------------------------------------

//is odd


// 7. what is the value of isOdd(2) 
//-----------------------------------------------------------------------------

//true


// 8. Fix the isOdd function to make this work
//-----------------------------------------------------------------------------

//return num % 2 === 1 



// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number

// const count = (num)=>{
//   for(let i = 0; i<= num; i++){
//       if(i %2 == 0){
//       console.log(i)
//       }
//   }
// }
// count(24)
// count(500)

// 2. Write a function that takes an array and returns the sum of all the numbers

// const array = [1, 5, 10, 20, 40];
// const array2 = [1, 5, 10, 20, 40, 1000000,]
// let sum = 0;
// let sum2 = 0

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// for (let x = 0; x < array2.length; x++) {
//     sum2 += array2[x]
// }
// console.log(sum);
// console.log(sum2)

// 3. Write a function that returns the number of vowels in string
//------------------------------------------------------------------------------


// function numOfVowels(string) {
//     let count = 0;
  
//     for (let i = 0; i < string.length; i++) {
//       if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
//         count+= 1;
//       }
//     }
//     return count
//   }
// console.log(numOfVowels('DevPointLabs'))
// console.log(numOfVowels('HowManyVowelsDoYouThinkIsInThisCRAZYLongSentence'))

// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
//------------------------------------------------------------------------------

const calculator = (opp, num1, num2) =>{
    if (opp ==='+') {
        return num1 + num2
    }
    else if (opp ==='-') {
        return num1 - num2
    }
    else if (opp ==='*') {
        return num1 * num2
    }
    else if (opp ==='/') {
        return num1 / num2
    }
    else if (opp ==='%') {           //BONUS :)
        return num1 % num2
    }
}
console.log(calculator('+', 25, 5))
console.log(calculator('-', 1028373, 10000))
console.log(calculator('*', 25, 5))
console.log(calculator('/', 100, 10))
console.log(calculator('%', 25, 5))
console.log(calculator('+', 1028373, 10000))

// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
//------------------------------------------------------------------------------



// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
//------------------------------------------------------------------------------
// const person= {firstname:'randy', lastname:'clements', age:'23'}

// const formattedString = (info) =>{
//     return `${info.firstname} ${info.lastname} is ${info.age} years old`
// }
// console.log (formattedString(person))

// const mom= {firstname:'tami', lastname:'clements', age:'64'}
// console.log (formattedString(mom))

// 7. write a function that takes an array that removes the first and last items and return that new array
//------------------------------------------------------------------------------

// let remove1 = (arr)=>{
//     const cloneArr = [...arr]
//     shift(cloneArr)
//     return cloneArr
// }

// let remove2 = (arr)=>{
//     const cloneArr = [...arr]
//     pop (cloneArr)
//     return cloneArr
// }

// let nums = [1,2,3,4,5,6]
// let swapedNums = swap1(nums)
// console.log ('nums:', nums)
// console.log ('swapedNums:' , swapedNums)

// 8. write a function that swaps the last and first items of an array 
//------------------------------------------------------------------------------
// let myData = ['a','b','c','d','e'] 
//     moreData = ['green', 'yellow', 'orange' , 'red']
//     function swap(input, index_A, index_B) {
//     let temp = input [index_A];
//     input [index_A] = input [index_B];
//     input [index_B] = temp;
//     return input
// }
// // swap(myData, 2, 4); //2='c' 4='e'
// console.log(swap(myData, 2, 4))

// console.log(swap(myData, 0, 3))

// console.log(swap(moreData, 1, 3))

// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
//------------------------------------------------------------------------------
// let myData = ['a','b','c','d','e'] 
//     function find(input, index_A) {
//         input.indexOf(index_A)
//         return input.indexOf(index_A)
//     }
//     console.log(find(myData, 'c')) //#2 in the mydata array
    
//     console.log(find(myData,'a')) //#0 in the mydata array

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
//------------------------------------------------------------------------------

// const falseOrTrue = (anyNumber) =>{
//     return anyNumber + 5 === 100 ? 'does equal 100':'does not equal 100'
// }
// console.log(falseOrTrue(95))
// console.log(falseOrTrue(25))
// 11. Write a function that prints all  numbers from 0 – 10
//-----------------------------------------------------------------------------

// const upTo10 = (num)=>{
//     for(let x = 0; x<= num; x++){
//         console.log(x)
//         }
//     }
  
//   upTo10(10)
  
// const upTo100 = (num)=>{
//     for(let x = 0; x<= num; x++){
//         console.log(x)
//         }
//     }
  
//   upTo100(100)