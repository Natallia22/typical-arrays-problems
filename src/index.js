
exports.min = function min (array) {
  if (array == "" || array == undefined) {
    return 0; 
  }
    var minim = array[0]
  for (var i = 1; i < array.length; i++) {
    if (array[i] < minim) {
      minim = array[i]
    }
     } 
     return minim;
  }


exports.max = function max (array) {
  if (array == "" || array == undefined) {
    return 0; 
  }
    var maxim = array[0]
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxim) {
      maxim = array[i]
    }
     } 
     return maxim;
  }

  exports.avg = function avg (array) {
    if (array == '' || array == undefined) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum/array.length;
  }
