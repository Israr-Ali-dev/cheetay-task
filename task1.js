function swap(arr) {
  var s = 0;
  var f = 0;
  var flag = false;

  var arr1 = arr.filter((item, i) => {
    return arr.indexOf(item) == i;
  });

  console.log(arr1);

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 1; j <= arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        f = arr1[i];
        s = arr1[j];
      }
      break;
    }

    break;
  }

  for (let p = 0; p < arr.length; p++) {
    if (arr[p] == s) {
      arr[p] = f;
    } else if (arr[p] == f) {
      arr[p] = s;
    }
  }

  console.log(arr);
}

var str = 'abba';
var arr = str.split('');
swap(arr);
