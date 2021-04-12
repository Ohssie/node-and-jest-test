/** Task nr 1: "Write a function that determines the area of a circle given the radius." 
 * 
 * formula for finding the area of a circle is: A = πr2 (π is the value of PI and r is the radius given)
*/
"use strict"
const area = radius => {
  try {
    if (typeof radius === 'undefined') {
        return "Please supply an argument";
    }

    if(typeof radius !== 'number' || isNaN(radius)) {
      return "Please supply a number as radius";
    }

    if (radius <= 0) {
        return "A circle cannot have a radius less than 0";
    }

    return (Math.PI * Math.pow(radius, 2)).toFixed(4);
  } catch (err) {
    if(err instanceof ReferenceError) {
      console.error(`Error: ${err}`);
      throw err
    } else {
      console.error(`Error: ${err}`, false);
      throw err
    }
    
  }
}

module.exports = area;

