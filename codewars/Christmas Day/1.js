function findOutChristmasWeekday(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
  }
  console.log(findOutChristmasWeekday(2013,12,24))