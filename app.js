
var num1 = 3;
var num2 = 5;

var sum = num1 + num2;

alert("The sum of " + num1 + " and " + num2 + " is " + sum);


        
        var num1 = 8;
        var num2 = 3;

       
        var difference = num1 - num2;

        
        alert("The difference between " + num1 + " and " + num2 + " is " + difference);


        var num1 = 4;
        var num2 = 6;

        
        var product = num1 * num2;

        console.log("The product of " + num1 + " and " + num2 + " is " + product);

     
          var num1 = 10;
          var num2 = 2;
  
          if (num2 !== 0) {
         
              var quotient = num1 / num2;
              
              
              console.log("The quotient of " + num1 + " divided by " + num2 + " is " + quotient);
          } else {
              
            console.log("Division by zero is not allowed.");
          }





        var num1 = 10;
        var num2 = 3;

        var remainder = num1 % num2;

       
      console.log("The remainder of " + num1 + " divided by " + num2 + " is " + remainder);









        var myVariable;

        
        document.write("Value after variable declaration is: " + myVariable + "<br>");

        
        myVariable = 5;

        
        document.write("Initial value: " + myVariable + "<br>");

        myVariable++;

        document.write("Value after increment is: " + myVariable + "<br>");

        
        myVariable += 7;

        document.write("Value after addition is: " + myVariable + "<br>");

        myVariable--;

      
        document.write("Value after decrement is: " + myVariable + "<br>");

        var remainder = myVariable % 3;

       
        document.write("The remainder is: " + remainder);




  
var ticketPrice = 600;


var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;


console.log("The cost of buying 5 movie tickets is: " + totalCost + " PKR");

// gotted






var celsiusTemp = 25; 

var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");


var fahrenheitTemp2 = 77; 
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");





var priceItem1 = 25;  
var priceItem2 = 30; 
var quantityItem1 = 2; 
var quantityItem2 = 3; 
var shippingCharges = 5; 

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;

var subtotal = totalCostItem1 + totalCostItem2;

var totalCost = subtotal + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<p>Subtotal: $" + subtotal + "</p>");
document.write("<p>Total Cost (including shipping): $" + totalCost + "</p>");



function printMultiplicationTable(number, multiplier) {
  if (multiplier <= 10) {
    var result = number * multiplier;
    console.log(number + " x " + multiplier + " = " + result);
    printMultiplicationTable(number, multiplier + 1);
  }
}

var yourNumber = 4;

console.log("Multiplication table for " + yourNumber + ":");
printMultiplicationTable(yourNumber, 1);





var totalMarks = 500; 
var marksObtained = 420; 

var percentage = (marksObtained / totalMarks) * 100;


document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
