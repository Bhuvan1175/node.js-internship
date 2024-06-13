/**
 *
 *  @file Question 07
 *  @description
 *   Perform an invalid arithmetic operation (subtracting a
 *   string from a number) to produce NaN.
 *   Use isNaN() to check if the result is NaN and print the result
 */

let result = 1 - "bhuvi";
console.log(result);
if (isNaN(result)) {
  console.log(`The result is ${result}`);
} else {
  console.log(`The Result is Number`);
}
