	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Kraft Dinner",
		organic: false,
		lactosefree: false,
		nutfree: false,
		halal: true,
		price: 1.50,
	},

	{
		name: "Organic Bananas",
		organic: true,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 2.00,
	},

	{
		name: "Tomatoes",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 2.00,
	},

	{
		name: "Bread",
		organic: false,
		lactosefree: true,
		nutfree: false,
		halal: true,
		price: 2.35,
	},

	{
		name: "Carrots",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 3.00,
	},

	{
		name: "Peanut Butter",
		organic: true,
		lactosefree: true,
		nutfree: false,
		halal: true,
		price: 3.50,
	},

	{
		name: "Strawberries",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 4.00,
	},

	{
		name: "Eggs (Dozen)",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 4.00,
	},

	{
		name: "Gummy Bears",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: false,
		price: 2.50,
	},


	{
		name: "Organic Carrots",
		organic: true,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 5.00
		
	},

	{
		name: "Swiss Cheese",
		organic: true,
		lactosefree: false,
		nutfree: true,
		halal: true,
		price: 5.49,
	},

	{
		name: "Milk",
		organic: false,
		lactosefree: false,
		nutfree: true,
		halal: true,
		price: 5.95,
	},

	{
		name: "Oreo Cakesters",
		organic: false,
		lactosefree: false,
		nutfree: true,
		halal: true,
		price: 6.95,
	},

	{
		name: "Chicken Breasts",
		organic: true,
		lactosefree: true,
		nutfree: true,
		halal: false,
		price: 12.89,
	},

	{
		name: "Salmon",
		organic: false,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 15.89,
	},

	{
		name: "Organic Salmon",
		organic: true,
		lactosefree: true,
		nutfree: true,
		halal: true,
		price: 17.98,
	},


];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(restrictions) {

	let product_names = [];
	let flag = false;
	for (let i=0; i<products.length; i++) {
		for (let j=0; j<restrictions.length; j++){
			var res  = restrictions[j];

			if ((res == "Nut Free") && (products[i].nutfree == false)){
				flag = true;
			
			}
			else if ((res == "Organic") && (products[i].organic == false)){
				flag = true;
				
			}
			else if ((res == "Lactose Free") && (products[i].lactosefree == false)) {
				flag = true;
				
			}
			else if ((res == "Halal") && (products[i].halal == false)) {
				flag = true;			
			}
			
		}
		if(flag){
			flag = false;
		}else{
		product_names.push(products[i]);
		}
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts, quantity) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice =  totalPrice + products[i].price * quantity[chosenProducts.indexOf(products[i].name)];
		
		}
	}
	
	// roundedPrice = totalPrice.toString();
	// y = roundedPrice.indexOf(".")+3;
	// if (y<roundedPrice.length){
	// 	if(roundedPrice[y] == "9"){
	// 		totalPrice+=1;
	// 		roundedPrice = totalPrice.toString();

	// 	}
	// 	roundedPrice = roundedPrice.slice(0,y);
	// }
	return totalPrice;


}

function getPrice(id){
	for (let i=0; i<products.length; i+=1)
		if (id == products[i].name){
		return products[i].price;
	}
}
