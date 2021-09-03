// exercise 1:  Use ```.map``` to take the code from the array below, and 
//place the results in a new array where each value is 5 more than it was in the the original array. Print the new array.
let arr = [1, 2, 3, 4];
let plus5 = [];

plus5 = arr.map
(
    (el) =>
    {
        return (el + 5);
    }
);
//print the new array
console.log(plus5);


//exercise 2: Use ```.map``` to create a new array of objects
//where each object has a property for ```index``` and ```value``` based on the elements in the array.
//Print the new array of objects.
let arr2 = [1, 2, 3, 4];
let num_objects = []; // new array to hold objects

num_objects = arr2.map
(
    (el, idx) =>
    {
        return(
        {
          index: idx, 
          value: el
        }
        )
    }
);
//print array of mapped objects
console.log (num_objects);


//exercise 3: Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

let arr3 = [1, 2, 3, 4];
sumOfNumbersTimesTwo = arr3.reduce
(
    (runningTotal, nextValueEl) =>
    {
        return (runningTotal = runningTotal + (nextValueEl*2));
    }

);
console.log(sumOfNumbersTimesTwo);



//exercise 4:  Use ```.filter``` to return a new array that contains only the even numbers. Print the new array.

// let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
// let even_vals = []; // new array to hold result

let arr4 = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
let even_vals = [];

even_vals = arr4.filter
(
    (el) =>
    {
        //check to see if even
        return (el % 2 === 0)
    }
);
console.log(even_vals);

//exercise 5: Use ```map``` to take an array of names and return a new array that contains instances of objects you instantiated from the class below
// Iterate through the array returned using ```forEach``` and print the name property from each object instance in the array.
class Student
{
        constructor(name)
        {
                this.name = name;
        }
};

const namesArray = ['bob','mark','kevin', 'judy','melissa'];
let studentInstances = namesArray.map 
(
    (el) =>
    {
        return
        {
            new Student (el)
        }
    }
);
// new array of objects,print the names
studentInstances.forEach
(
    (el) =>
    {
        console.log(el.name)
    }
);