let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm']

function sea(up,down) {
  return(Math.floor(Math.random() * (up - down)) + down);
}

sea(23, 65);
console.log(sea(23,65));