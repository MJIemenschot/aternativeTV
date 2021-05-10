

// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// 1a
const remainingTv = inventory.map((stock) =>{
  return stock.originalStock - stock.sold;
});
// 1b
//console.log(remainingTv);

function availableForSale (array){
  let total = 0;
  for (let i =0; i < array.length; i++){
    total += array[i];

  }/* array.map((item)=>{ //ALTERNATIEF
    total += item;
  })*/
  return total;
}
//console.log(availableForSale(remainingTv))
//console.log(remainingTv)

const stockContainer = document.getElementById('tvStock');
const message = document.createElement('p');
message.setAttribute('çlass', 'amountForSale')
message.textContent = availableForSale(remainingTv) + ' stuks';
stockContainer.appendChild(message);
// 2a
const tvNames = inventory.map((tv)=>{
  const name = tv.brand + ' ' + tv.type + ' ' +  '- ' + tv.name;
  return name;
});
console.log("nieuwe array: ", tvNames);

//2b
const soldOut = inventory.filter((tv) => {
  const amountSold = tv.originalStock - tv.sold;
  const isSoldOut = amountSold === 0;
  return isSoldOut;
});
console.log(soldOut)


//2c
const withAmbiLigth = inventory.filter((tv) =>{
  return tv.options.ambiLight;
})
console.log(withAmbiLigth);

/*inventory.sort((a, b)=>{
  // a voor b: een negatief getal return
  // b voor a: een positief getal return
  //        159     379
  console.log(a.price, b.price);
 // a 159 moet voor b  379 komen
  // a - b
return a.price - b.price;
});
console.log(inventory);*/
//in een functie
const sortPriceHighToLow = () =>{
  inventory.sort((a, b)=>{
    return b.price - a.price;
  });

};
console.log(inventory);
sortPriceHighToLow();

// 3a
// targetSales (sum all tvs including prices)
const tvRevenue = inventory.map((tv)=>{
  return tv.price * tv.originalStock;

});
function stockRevenue (tvToSell) {
  let stock = 0;
  for(let i =0; i < tvToSell.length; i ++) {
    stock +=  tvToSell[i];
  }
  return stock;
}
console.log("Verwachte opbrengst totaal: ", stockRevenue(tvRevenue));

//3b
// Geef de opbrengst weer van de verkochte tv's
function salesRevenue (){
  const soldTVs = inventory.map((tv)=>{
    return tv.price * tv.sold;
  });
  let sold = 0;
  for(let i = 0; i < soldTVs.length; i ++) {
    sold +=  soldTVs[i];
  }
  return sold;
}
console.log("Opbrengst verkochte TVs: ", salesRevenue());

const stockRevenueContainer = document.getElementById('revenue');
const amount = document.createElement('p');
amount.setAttribute('çlass', 'revenueStock');
amount.textContent = '€ ' + stockRevenue(tvRevenue) + ',-';
stockRevenueContainer.appendChild(amount);

const saleRevenueContainer = document.getElementById('demo');
const amounts = document.createElement('p');
amounts.setAttribute('class', 'revenueSales');
amounts.textContent = '€ ' + salesRevenue() + ',-';
saleRevenueContainer.appendChild(amounts);

// 4

// 5a
const tvVieuw = inventory.map((tv) =>{
  return tv.brand + ' ' + tv.type + ' ' +  '- ' + tv.name;
});
console.log(tvVieuw)

// 5b
//format de prijs van een tv met het  Euroteken ervoor in een functie
const tvPrices = inventory.map((tv) =>{
  return '€' + tv.price;
});
console.log(tvPrices);
// 5c
const tvSizes = inventory.map((tv) => {
  let allSizes =[];
  //log alle beschikbare maten voor per tv model
  const sizesArray = tv.availableSizes;
  //loop daardoorheen
  for (let i=0; i < sizesArray.length; i++){
    //en vang dit op
    if (sizesArray[i] === sizesArray[sizesArray.length -1]) {allSizes += (sizesArray[i] + " inch" + " ("+ sizesArray[i] * 2.54 + " cm)");}
    else {allSizes += (sizesArray[i] + " inch" + " ("+ sizesArray[i] * 2.54 + " cm)" +' | ')};
    //return de nieuwe array
  } return allSizes;
});

function generateTvBox(array){
  let tvInfo = [];
  for (let i = 0; i < array.length; i++) {
    tvInfo += '<div class="box">' + tvNames[i] +'<br>'+ tvPrices[i]+'<br>' + tvSizes[i] + '</div>';
  } return tvInfo;
}
document.getElementById("tvContainer").innerHTML = generateTvBox(inventory);

const sButton = document.getElementById("sort");
sButton.addEventListener("click",() => {
  console.log(inventory);
  sortPriceHighToLow();
});

const xButton = document.getElementById("soldout");
xButton.addEventListener("click",() => {
  console.log(soldOut)

});
const aButton = document.getElementById("ambilight");
aButton.addEventListener("click",() => {
  console.log(withAmbiLigth);

});
