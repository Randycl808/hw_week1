const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];



//***MAP***
//1. Get array of all names-----------------------------------------------------

// let returnValueMap= characters.map ((c)=> {
//   return {name: c.name}
// })

// console.log(returnValueMap)

//2. Get array of all heights----------------------------------------------------

// let returnValueMap= characters.map ((c)=> {
//   return {height: c.height}
// })

// console.log(returnValueMap)

//3. Get array of objects with just name and height properties--------------------

//  let returnValueMap= characters.map ((c)=> {
//    return {height: c.height , name: c.name}
//  })

//  console.log(returnValueMap)

//4. Get array of all first names--------------------------------------------

  // let returnValueMap= characters.map ((c)=> {
  //   return {name: c.name.split(' ')[0]}
  // })

  // console.log(returnValueMap)

//***REDUCE***
//1. Get total mass of all characters-------------------------------------------

  // let sum = characters.reduce((accum, characterWeight)=>{
  //     console.log('accum:', accum)
  //     console.log('num:', characterWeight.mass)
  //     return accum + characterWeight.mass
  // },0)
  // console.log('return of reduce')
  // console.log(sum)

//2. Get total height of all characters--------------------------------------------

  // let sum = characters.reduce((accum, characterHeight)=>{
  //     console.log('accum:', accum)
  //     console.log('num:', characterHeight.height)
  //     return accum + characterHeight.height
  // },0)
  // console.log('return of reduce')
  // console.log(sum)

//3. Get total number of characters by eye color-------------------------------------

let sum = characters.reduce((accum, characterEye)=>{
       console.log('eyeColor:', characterEye.eye_color)
       return accum + characterEye.eye_color
   },0)
   console.log('return of reduce')
   console.log(sum)

//4. Get total number of characters in all the character names----------------------------------------

// let sum = characters.reduce((accum, characterCount)=>{
//   console.log('nameTotal:', characterCount.name)
//   return accum + characterCount.name
// },0)
// console.log('return of reduce')
// console.log(sum)



//***FILTER***
//1. Get characters with mass greater than 100--------------------------------------

// let allOver100 = characters.filter((c)=>{
//   return c.mass >= 100
// })
// console.log('return of filter')
// console.log(allOver100)

//2. Get characters with height less than 200----------------------------------------

// let allUnder200 = characters.filter((c)=>{
//   return c.mass <= 200
// })
// console.log('return of filter')
// console.log(allUnder200)

//3. Get all male characters------------------------------------------------------

// let genderChar = characters.filter((c)=>{
//   return c.gender = 'male'
// })
// console.log('return of filter')
// console.log(genderChar)

//4. Get all female characters---------------------------------------------------------

//***SORT***
//1. Sort by mass---------------------------------------------------------



//2. Sort by height---------------------------------------------------------



//3. Sort by name---------------------------------------------------------



//4. Sort by gender---------------------------------------------------------



//***Bonus***/



//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own