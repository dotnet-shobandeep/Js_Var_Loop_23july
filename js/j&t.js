'use strict'
let jHeight=1.65
let jMass=62
let tHeight=1.75
let tMass=55
let bool
let jBmi=jMass/(jHeight*jHeight)
let tBmi=tMass/(tHeight*tHeight)
if( bool=jBmi>tBmi){
    console.log(`jeff BMI is higher than todd so the bool value is ${bool} `)
}else{
    console.log(`todd BMI is heighr than jeff so the bool value is ${bool}`)
}
