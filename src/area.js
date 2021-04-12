/** Task nr 1: "Write a function that determines the area of a circle given the radius." 
 * 
 * formula for finding the area of a circle is: A = πr2 (π is the value of PI and r is the radius given)
*/
"use strict"
const area = radius => {
  try {
    // console.log(typeof radius)
    if (typeof radius === 'undefined') {
      throw "Please supply an argument";
    }

    if(typeof radius !== 'number' || isNaN(radius)) {
      throw "Please supply a number as radius";
    }

    if (radius <= 0) {
      throw "A circle cannot have a radius less than 0";
    }

    return (Math.PI * Math.pow(radius, 2)).toFixed(4);

  } catch (err) {
    // console.log(`Error: ${err}`);
    throw err;
  }
}

module.exports = area;

