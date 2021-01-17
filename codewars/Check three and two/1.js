function checkThreeAndTwo(array) {
    var item1 = 0, item2 = 0, item3 = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'a') {
        item1++;
      } else if (array[i] === 'b') {
        item2++;
      } else if (array[i] === 'c') {
        item3++;
      }
    }
    return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item3 == 3);
  }
  console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))