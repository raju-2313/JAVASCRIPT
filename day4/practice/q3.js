// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"


// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


companies.shift();// removes first company
console.log(companies);
companies.splice(2,1,"Ola");// add at 2nd index
console.log(companies);
companies.push("Amazon");// add at the end 
console.log(companies);