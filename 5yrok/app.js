// for(let i = 2; i<11; i+=2){
//     console.log(i)
// }

// const user = {
//     name: 'John',
//     age: 35,
//     addresse: 'Ukraine'
// }

// for (const propName in user){
//     console.log(propName + ':' + user[propName])
// }

//--------------------1----------------------//
// for(let i = 10; i<21; i++){
//     console.log(i)
// }

const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let res = ''
for (let i = 0; i<arr.length; i++){
   const el = arr[i]
   if( i === arr.length - 1){
      res += el
   }else{
      res += el + ","
   }
}
alert(res)
//--------------------2----------------------//
// for(let i = 10; i<21; i++){
//     console.log(i*i)
// }

let k = 10 
let res1 =''
let el
while( k < 21 ) {
   el = k*k
   
   res1 += el + " "
   i++

}
alert(res1)
// --------------------3----------------------//
let num =''
for(let i = 1; i<11; i++){
   num=num+`${i} \u00D7 7 \u003d ${i*7} \n `
}

alert(num)

// --------------------4----------------------//

// const res1 = (15*(15+1))/2
//  alert ('Сума всіх цілих чисел від 1 до 15:' +' '+ res1)


let res4 =0

for(let i = 1; i<16; i++){
 res4 +=  i

}
alert ('Сума всіх цілих чисел від 1 до 15:' +' '+ res4)

// --------------------5----------------------//

let res5 

for(let i = 15; i<36; i++){
 res5=i*i
}

alert(res5)
// --------------------6----------------------//
// const res6 = (1+500)/2
// alert ('Середнє арифметичне всіх цілих чисел від 1 до 500:' +' '+ res6)

let res6 = 0

for(let i = 1; i<501; i++){
 res6 +=  i

}
alert (res6/500)


// --------------------7----------------------//
let res7 =0
for(let i = 30; i<81; i+=2){
   res7 +=i  
   }
   
alert (res7)

// --------------------8----------------------//

let i = 100 
let res8 =''
while( i < 201 ) {
   
   res8 += i + " "
   i+=3

}
alert(res8)

// --------------------12----------------------//
const mult = [[0,1,2,3,4,5,6,7,8,9,10], [1,1,2,3,4,5,6,7,8,9,10],[2,2,4,6,8,10,12,14,16,18,20],[4,4,8,12,16,20,24,28,32,36,40],[5,5,10,15,20,25,30,35,40,45,50],[6,6,12,18,24,30,36,42,48,54,60],[7,7,14,21,28,35,42,49,56,63,70],[8,8,16,24,32,40,48,56,64,72,81,90],[10,10,20,30,40,50,60,70,80,90,100]]

let result = ''


for (let i = 0; i<mult.length; i++){
   const el = mult[i]
   for(let j = 0; j<el.length; j++) {
       
      const subEl = el[j] 
      result += subEl + ' '
   }
   result += '\n'
}


alert(result)