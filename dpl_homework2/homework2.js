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

 //Name,height & weight
 
//  let returnHeiMassNam= characters.map ((c)=> {
//   return {height: c.height , name: c.name, mass: c.mass}
// })

// console.log(returnHeiMassNam)

//4. Get array of all first names--------------------------------------------

  // let returnValueMap= characters.map ((c)=> {
  //   return {name: c.name.split(' ')[0]}
  // })

  // console.log(returnValueMap)

  // //lastname

  // let returnLastName= characters.map ((c)=> {
  //   return {name: c.name.split(' ')[1]}
  // })

  // console.log(returnLastName)

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

// let sum = characters.reduce((accum, characterEye)=>{
//        if(characterEye.eye_color === 'brown'){
//          accum.brown +=1
//          return accum
//        }
//        else if(characterEye.eye_color === 'blue'){
//         accum.blue +=1
//         return accum
//       }
//       else if(characterEye.eye_color === 'yellow'){
//         accum.yellow +=1
//         return accum
//       }
//     }, {brown:0, blue:0, yellow:0})
//     console.log (sum)

//4. Get total number of characters in all the character names----------------------------------------

// let characterNumber = characters.reduce((accum, c)=>{
//   let numberChara = c.name.length-1
//   return accum + numberChara
// },0)

// console.log(characterNumber)



//***FILTER***
//1. Get characters with mass greater than 100--------------------------------------

// let allOver100 = characters.filter((c)=>{
//   return c.mass >= 100
// })
// console.log('return of filter')
// console.log(allOver100)



// //Under 100
// let allUnder100 = characters.filter((c)=>{
//   return c.mass <= 100
// })
// console.log('return of filter')
// console.log(allUnder100)


//2. Get characters with height less than 200----------------------------------------

// let allUnder200 = characters.filter((c)=>{
//   return c.height <= 200
// })
// console.log('return of filter')
// console.log(allUnder200)

// //Over200
// let allOver200 = characters.filter((c)=>{
//   return c.height >= 200
// })
// console.log('return of filter')
// console.log(allOver200)


//3. Get all male characters------------------------------------------------------

// let genderChar = characters.filter((c)=>{
//   return c.gender === 'male'
// })
// console.log('return of filter')
// console.log(genderChar)

//4. Get all female characters---------------------------------------------------------

// let genderChar = characters.filter((c)=>{
//   return c.gender === 'female'
// })
// console.log('return of filter')
// console.log(genderChar)

// //Male sort @ same time

// let genderChar1 = characters.filter((c)=>{
//   return c.gender === 'male'
// })
// console.log('return of filter male')
// console.log(genderChar1)

//***SORT***
//1. Sort by mass---------------------------------------------------------

// characters.sort((a,b)=>{
//   if(a.mass > b.mass){
//       return 1
//   }
//   if(a.mass < b.mass){
//       return -1
//   }
//   return 0
// })

// console.log(characters)


//2. Sort by height---------------------------------------------------------

// characters.sort((a,b)=>{
//   if(a.height < b.height){
//       return 1
//   }
//   if(a.height > b.height){
//       return -1
//   }
//   return 0
// })

// console.log(characters)

//3. Sort by name---------------------------------------------------------

// characters.sort((a,b)=>{
//   if(a.name > b.name){
//       return 1
//   }
//   if(a.name < b.name){
//       return -1
//   }
//   return 0
// })
// console.log(characters)

//4. Sort by gender---------------------------------------------------------

// characters.sort((a,b)=>{
//   if(a.gender > b.gender){
//       return 1
//   }
//   if(a.gender < b.gender){
//       return -1
//   }
//   return 0
// })

// console.log(characters)


//***Bonus***/



//***EVERY***
//1. Does every character have blue eyes?

// const c = characters.every((c)=>{
//   c.eye_color === 'blue'
// }
// )
// console.log(c)

//2. Does every character have mass more than 40?
const f = characters.every((f)=>{
  f.massOver40 >= 40
})
console.log(f)

// //3. Is every character shorter than 200?
// const d = characters.every((d)=>{
//   d.shorter_than200 <= 200
// })
// console.log(d)
// console.log(d)
//4. Is every character male?
// const cMales = characters.every((cMales)=>{
//   cMales.genderM === 'male'
// })
// console.log (cMales)
// ***SOME***
// 1. Is there at least one male character?
// 2. Is there at least one character with blue eyes?


// 3. Is there at least one character taller than 210?
// 4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own