	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [

	{
		name: "Kraft Dinner",
		organic: false,
		lactosefree: false,
		nutfree: false,
		price: 1.50,
	},

	{
		name: "Organic Bananas",
		organic: true,
		lactosefree: true,
		nutfree: true,
		price: 2.00,
	},

	{
		name: "Tomatoes",
		organic: false,
		lactosefree: true,
		nutfree: true,
		price: 2.00,
	},

	{
		name: "bread",
		organic: false,
		lactosefree: true,
		nutfree: false,
		price: 2.35,
	},

	{
		name: "Carrots",
		organic: false,
		lactosefree: true,
		nutfree: true,
		price: 3.00,
	},

	{
		name: "Peanut Butter",
		organic: true,
		lactosefree: true,
		nutfree: false,
		price: 3.50,
	},

	{
		name: "Strawberries",
		organic: false,
		lactosefree: true,
		nutfree: true,
		price: 4.00,
	},

	{
		name: "Eggs (Dozen)",
		organic: false,
		lactosefree: true,
		nutfree: true,
		price: 4.00,
	},

	{
		name: "Organic Gummy Bears",
		organic: true,
		lactosefree: true,
		nutfree: true,
		price: 4.50,
	},


	{
		name: "Organic Carrots",
		organic: true,
		lactosefree: true,
		nutfree: true,
		price: 5.00
	},

	{
		name: "Swiss Cheese",
		organic: true,
		lactosefree: false,
		nutfree: true,
		price: 5.50,
	},

	{
		name: "Milk",
		organic: false,
		lactosefree: false,
		nutfree: true,
		price: 6.00,
	},

	{
		name: "Oreo Cakesters",
		organic: false,
		lactosefree: false,
		nutfree: true,
		price: 7.00,
	},

	{
		name: "Salmon",
		organic: false,
		lactosefree: true,
		nutfree: true,
		price: 15.00,
	},

	{
		name: "Organic Salmon",
		organic: true,
		lactosefree: true,
		nutfree: true,
		price: 18.00,
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
			console.log(res);
			if ((res == "Nut Free") && (products[i].nutfree == false)){
				flag = true;
			
			}
			else if ((res == "Organic") && (products[i].organic == false)){
				flag = true;
				
			}
			else if ((res == "Lactose Free") && (products[i].lactosefree == false)) {
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
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}