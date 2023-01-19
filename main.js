const person = { 
     name: "John",
     age: 25 ,
     place: "Israel"
   };

//1
const objectkeys = (object) => Object.keys(object);
console.log(objectkeys(person));

//2 
const keysToUpper = (myObject) => {
    let newObject = {}
    for ([key,value] of Object.entries(myObject)) {
        newObject[key.toUpperCase()] = value
    }
    return newObject
}
console.log(keysToUpper(person));
//3
const objectValue = (object) => Object.values(object)
console.log(objectValue(person));
//4 a new object
const ages = { 
    yael: 11,
    sapir: 25,
    noam: 2
};

const newObject = (object) => {
    let newValues =  {}
    for ([k,v] of Object.entries(object)){
        newValues[k] = v*2
    }
    return newValues
   
}
console.log(ages, "ages:");
console.log(newObject(ages), "newAge:");
//5
const ObjectReverse = (object) => {
    let reverseValue =  {}
    for ([k,v] of Object.entries(object)){
        reverseValue[v] = k
    }
    return reverseValue
}
console.log(ObjectReverse(person) , "reverse:");
console.log(person, "person:");
//6
const sum = (object) => {
  let arr = Object.values(object)
  let add = arr.reduce((acc,current) => acc + current); 
  return add
}
console.log(sum(ages));
//7
const average = (object) => {
    let arrOfNum = Object.values(object)
    let average = arrOfNum.reduce((acc,current) => acc + current)/arrOfNum.length
    return average
}
console.log(average(ages));
//8
const sort = (object) => {
    let arrOfNum = Object.keys(object)
    arrOfNum.sort()
    return arrOfNum
}
console.log(sort(person));
//9
const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "Sara", age: 28 },
   };

const ifThereIs = (object, nameInsert) => {
    let x = Object.values(object)
    x.forEach(person => {
        if (person.name === nameInsert) {
            console.log(person.name);
        }})
}
ifThereIs(people, "Sara");

//19
const words = [
    "happy",
    "good",
    "happy",
    "nice",
    "like",
    "happy",
    "good",
    "like",
    "good",
]
const wordFrequency = (arr) => {
    let wordCount = {}
    for (x of arr) {
        if (wordCount[x] = 0) {
            wordCount[x] = 1
        }
        else if (wordCount.hasOwnProperty(x)){
            wordCount[x]++;
        }
    }
    return wordCount
}

console.log(wordFrequency(words));