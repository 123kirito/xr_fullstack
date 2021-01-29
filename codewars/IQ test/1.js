function iqTest(numbers){
    numbers = numbers.split(' ')
    
    var evens = []
    var odds = []
    
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] & 1) {
        odds.push(i + 1)
      } else {
        evens.push(i + 1)
      }
    }
    
    return evens.length === 1 ? evens[0] : odds[0]
  }
  console.log(iqTest("1 1 2 1 1"))