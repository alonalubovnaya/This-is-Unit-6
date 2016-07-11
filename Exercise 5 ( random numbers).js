/**
 * Created by expresscoin on 7/10/16.
 */

function randomInt(min,max) {

    var min = prompt( "Enter a number." );
    var max = prompt( "Enter another number." );
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;

}