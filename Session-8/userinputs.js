var readline= require('readline-sync');
var name= readline.question("What is your name?");
var age= readline.question('What is your age?');
var email= readline.question('What is your Email Id?');
var message= readline.question('Enter Your feedback');



console.log("Hi.. "+name+" you have successfully signed in");
console.log("Your age "+age+" used here for the Verification process");
console.log('Your Registered Email Address is '+email);
console.log('Check your provided feedback '+message);

var choice= readline.question("We will submit your feedback.. Are you sure?");
if(choice=='y' || choice=='Y')
    
console.log("Your message sent successfully..")
else if(choice=='n' || choice == 'N')
    console.log('Your Message is terminated');
else
    console.log('Ooops.. Please try again');