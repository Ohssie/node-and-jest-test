/** Task nr 1: "Write a function that determines the area of a circle given the radius." 
 * 
 * formula for finding the area of a circle is: A = πr2 (π is the value of PI and r is the radius given)
*/

const area = radius => (Math.PI * Math.pow(radius, 2)).toFixed(4);
// console.log(area(5));
module.exports = area

