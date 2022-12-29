let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function generateRandomNumber(arrLength){
return Math.floor(Math.random()* arrLength)
}
let whoRandomNumber=(generateRandomNumber(who.length))
let actionRandomNumber=(generateRandomNumber(action.length))
let whatRandomNumber=(generateRandomNumber(what.length))
let whenRandomNumber=(generateRandomNumber(when.length))

let excuse = (who[whoRandomNumber])+ ' ' + (action[actionRandomNumber]) +' ' + (what[whatRandomNumber]) + ' ' + (when[whenRandomNumber]);
console.log(excuse)