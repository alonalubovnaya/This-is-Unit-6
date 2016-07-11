/**
 * Created by expresscoin on 7/10/16.
 */
function numberOfZeros(array) {
    var zeros = [];
    for(var i = 0; i < array.length; i ++){
        if(array[i] === 0) {
            zeros.push(array[i]);
        }
    }
    console.log(zeros.length);
}

numberOfZeros([4, 0, false, 5, 0]);

