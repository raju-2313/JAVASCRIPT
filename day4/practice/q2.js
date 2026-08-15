//  for a given array with the prices of 5 items ->>
//  [250,645,300,900,50]
//  All items have an offer of 10% OFF on them .
// Change the array to store final price after applying the offer 


let price = [250,645,300,900,50];

for(let i=0;i<price.length;i++)
{
    let offer = price[i]/10;
    price[i] = price[i] - offer;
}

console.log(price);