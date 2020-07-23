'use strict'
function heathAvg(first,second,third){
    return (first+second+third)/3
}
let a=heathAvg(89,120,103)
console.log(`the average of Heath game ${a}`)

function zaneAvg(first,second,third){
    return (first+second+third)/3
}
let b=zaneAvg(116,94,123)
console.log(`the average of Zane game ${b}`)

function mariahAvg(first,second,third){
    return (first+second+third)/3
}
let c=mariahAvg(97,134,105)
console.log(`the average of Zane game ${b}`)

if(a>b){
    console.log('Heath team is the winner')
}else{
    console.log('Zane team is the winner')
}
 
if(a>b&&a>c){
    console.log('Heath team is the winner')
}if (b>a&&b>c) {
    console.log('Zane team is the winner')
} else {
    console.log('Mariah team is the winner')
}