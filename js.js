function sea(up,down) {
  return(Math.floor(Math.random() * (up - down)) + down);
}

sea(23, 65);
console.log(sea(23,65));