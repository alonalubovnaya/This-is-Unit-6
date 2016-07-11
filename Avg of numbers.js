/**
 * Created by expresscoin on 7/10/16.
 */

var sum;
sum = times.reduce(function (a, b) {
    return a + b;
});
var avg = sum / times.length;

document.write("The sum is: " + sum + ". The average is: " + avg + "<br/>");
