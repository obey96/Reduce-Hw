// example 
const ages = [

{name: 'JIMBO', age: 15},
{name: 'ALLISON', age: 16},
{name: 'JUAN', age: 15},
{name: 'BERTHA', age: 17},
{name: 'MONTY', age: 16},
{name: 'SIMONE', age:15},
{name: 'JESS', age:14},
]

const pepAges = ages.reduce(function(peopleAges,currentPerson){
const age = currentPerson.age;
if(peopleAges[age] == null) {
    peopleAges[age] = 1;
} else {
    peopleAges[age] += 1;
}

return peopleAges;

}, {});

console.log(pepAges);

// reduce

// extracValue
const nameGone = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function gone(arr,name) {

return arr.reduce((accumulator,currentObject) => {


    accumulator.push(currentObject[name]);
    return accumulator;
}, []);


}

const bye = gone(nameGone,'name');

console.log(bye);

// vowelCount

const vowelCount = ('I Am awesome and so are you') 

function count(str){

const vowels = 'aeiou'
return str.split('').reduce(function(acc,next){

const lower = next.toLowerCase()
if(vowels.indexOf(lower) !== -1){
    if(acc[lower]){
        acc[lower]++;
    } else {
        acc[lower] = 1;
    }
}

return acc;
}, {});

}

const plzWork = count(vowelCount);
console.log(plzWork);

//addKeyValue
// failure code
// const addKey = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// function addTitle(arr){

//     arr.reduce(person => {
//         person.title= 'intructor';
//     });
// }
// const addThis = addTitle(addKey);
// console.log(addThis);

const addKey = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addTitle (arr) {

    return arr.reduce((acc, person) => {

        acc.push({...person, title: 'instructor'});
        return acc;
    }, []);
}

const addThis = addTitle(addKey);
console.log(addThis);

// partition.

const numBer = [1,2,3,4,5,6,7,8];


// Using reduce!!!
function partition1(array, callback){
  
    return array.reduce((acc, cur) => {
      
      if(callback(cur)){
        acc[0].push(cur)
      }else{
        acc[1].push(cur)
      }
      return acc;
    }, [[],[]]);

}

const isEven = number => number % 2  === 0;
const party = partition1(numBer, isEven);

console.log(party);


// This was done using for loop!
// function partition2(array, callback){
//   const array1=[]
//   const array2= []

//   for(let i=0; i<array.length; i++){
//     const item = array[i];
//     if(callback(item)){
//       array1.push(item)
//     }else{
//       array2.push(item)
//     }
//   }
  
//   return [array1, array2]
// }