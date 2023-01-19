
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let cities = []; 
let bodyEl = document.getElementById('salesdata');
let footerEl = document.getElementById('footrow');


function StoreLocation(locationName, minCust, maxCust, averageSales) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  this.cookieSales = [];
  this.dailySalesTotal = 0;
  cities.push(this); 
}

StoreLocation.prototype.genSalesData = function () {

  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = Math.round((Math.random() * (this.maxCust - this.minCust) + this.minCust));

    let cookieSales = Math.round(randomCustomersPerHour * this.averageSales);


    this.cookieSales.push(cookieSales);
    this.dailySalesTotal += cookieSales;
  }
};

StoreLocation.prototype.render = function() {

  let row = document.createElement('tr');
  bodyEl.appendChild(row);

  let cell = document.createElement('th');
  cell.textContent = this.locationName;
  row.appendChild(cell);

  for (let i =0; i < this.cookieSales.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = this.cookieSales[i];
    row.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = this.dailySalesTotal;
  row.appendChild(cell);
};

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 32, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 2, 16, 4.6);

console.log(cities);

for (let city of cities) {
  city.genSalesData();
  city.render();
}
renderFooter(cities);

function renderFooter(cityArray) {
  let totalsEl = document.createElement('th');
  footerEl.appendChild(totalsEl);
  totalsEl.textContent = 'Totals';


  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalAtHour = 0;
    let cell = document.createElement('td');
    footerEl.appendChild(cell);

    for (let j = 0; j < cityArray.length; j++) {
      totalAtHour += cityArray[j].cookieSales[i];
      grandTotal += cityArray[j].cookieSales[i];
    }
    cell.textContent = totalAtHour;
  }
  let grandTotalEl = document.createElement('td');
  footerEl.appendChild(grandTotalEl);
  grandTotalEl.textContent = grandTotal;
}

