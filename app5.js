let cars = ['Mustang', 'Porsche', 'Mercedes'];
let title = 'Awesome Cars';


// shows the index list of array in console debugger
console.log (cars);
console.log (title);

// 3
console.log(cars.length);

// add function
console.log (typeof title.toUpperCase);

// Loop over an Array: this lists the cars items in order AND lists indexes
    cars.forEach(function(item, index, array) {
    console.log(item, index);
    
});

// Add to the end of an array - adds Chevy to end of list, length changes from 3 to 4
let newLength = cars.push('Chevy');

// SHIFT - removes 'Mustang' from the front of an array
cars.shift();

// UNSHIFT - 