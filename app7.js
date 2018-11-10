//Write a function named tellFortune that: takes 4 arguments: number of children, partner's name, geographic location, job title. outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." Call that function 3 times with 3 different values for the arguments.

function tellFortune(jobTitle, geoLocation, partnerName, numberChildren) {
    var future = 'You will be a ' + jobTitle  + ' in ' + geoLocation + ' and married to ' + partnerName + '' + ' with ' + numberChildren + ' kids.';
    console.log(future);
}

tellFortune('astronaut' , 'Australia' , 'Oprah', 4);

//----------------------------------------------------------------
//Write a function named calculateDogAge that: takes 1 argument: your puppy's age. calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. outputs the result to the screen like so: "Your doggie is NN years old in dog years!" Call the function three times with different sets of values. Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculatedSupply  (age, numPerDay) {
    var maxAge=80; 
    var totalNeeded=( numPerDay * 365) * (maxAge - age);
    var statement = ' You will need ' + totalNeeded + ' reese cups to last you until the ripe ole age of ' + maxAge;
    console.log(statement);
}

calculatedSupply (20, 10);

//----------------------------------------------------------------
//You know how old your dog is in human years, but what about dog years? Calculate it! Write a function named calculateDogAge that: takes 1 argument: your puppy's age. calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. outputs the result to the screen like so: "Your doggie is NN years old in dog years!" Call the function three times with different sets of values. Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function NewAge (dogAge) {
    var dogToHuman=(1 * 7) * (dogAge);
    var statement= ' Your doggie is ' + dogToHuman + ' years old in human years!';
    console.log(statement);
}

NewAge (3);
// -------------------------------------------------------

