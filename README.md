# In Class: JavaScript Higher Order Functions and forEach

1. Use ```.map``` to take the code from the array below, and place the results in a new array where each value is 5 more than it was in the old array. Print the new array.

```
let arr = [1, 2, 3, 4];
let plus5 = []; // new array to hold result
```

2. Use ```.map``` to create a new array of objects where each object has a property for ```index``` and ```value``` based on the elements in the array. Print the new array of objects.

```
let arr = [1, 2, 3, 4];
let num_objects = []; // new array to hold objects
```

Example Object to Return:
```
{
  index: 1,
  value: 2
}

```

3. Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

```
let arr = [1, 2, 3, 4];
let nums_doubled_sum = []; // new variable assign the final sum
```


4. Use ```.filter``` to return a new array that contains only the even numbers. Print the new array.

```
let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
let even_vals = []; // new array to hold result
```

5. Use ```map``` to take an array of names and return a new array that contains instances of objects you instantiated from the class below

```
class Student{
        constructor(name){
                this.name = name;
        }
}
```

Iterate through the array returned using ```forEach``` and print the name property from each object instance in the array.

