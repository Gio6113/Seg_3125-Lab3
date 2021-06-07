// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp


function openProducts(){
 	document.getElementsByClassName("product")[0].style.display = "block";
	document.getElementsByClassName("cart")[0].style.display = "none";
	document.getElementsByClassName("selection")[0].style.display = "none";
	showProductsAndRestrictions()
}

function openSelections(){
   document.getElementsByClassName("product")[0].style.display = "none";
   document.getElementsByClassName("cart")[0].style.display = "none";
   document.getElementsByClassName("selection")[0].style.display = "block";
}

function openCart(){
	document.getElementsByClassName("product")[0].style.display = "none";
	document.getElementsByClassName("cart")[0].style.display = "block";
	document.getElementsByClassName("selection")[0].style.display = "none";
	selectedItems();

 }


var bigger = false ;
function toggleFontSize() {
	var newtext;
		if(bigger){
			newtext = "1.7vw";
			document.getElementsByClassName("t1")[0].innerHTML = "<b><u>aa</u> </b> AA"
			document.getElementsByClassName("fonticon")[0].src = "images/zoom-in.png"
		}else{
			newtext = "3vw";
			document.getElementsByClassName("t1")[0].innerHTML = "aa<b> <u> AA</u></b>"
			document.getElementsByClassName("fonticon")[0].src = "images/zoom-out.svg"
			
		}
		alltexts = document.getElementsByClassName("text");
		for(i = 0; i<alltexts.length; i++ ){
			alltexts[i].style.fontSize = newtext;
		}	
		btntexts = document.getElementsByClassName("ttt");
		for(i = 0; i<alltexts.length; i++ ){
			alltexts[i].style.fontSize = newtext;
		}		
		bigger = !bigger;
	}

//IMPORTANT , this code was adapted from Caroline Barriere Script for Lab 2 - SEG3125 - 2021
//https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery-->
//Tab links, each one with an onclick event associated with it -->

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function showProductsAndRestrictions(){
   	
	let restrictions = [];
	if(document.getElementById("checkbox1").checked){
		var restriction = "Organic";
		restrictions.push(restriction);
	}
	if(document.getElementById("checkbox2").checked){
		var restriction = "Nut Free";
		restrictions.push(restriction);
	}
	if(document.getElementById("checkbox3").checked){
		var restriction = "Lactose Free";
		restrictions.push(restriction);
	}
	if(document.getElementById("checkbox4").checked){
		var restriction = "Halal";
		restrictions.push(restriction);
	}
			
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(restrictions);

	// The product list should be recalculated everytime the way we are implementing the website so we erase the product list and repopulate it
    var product_list = document.getElementById("displayProduct");
    product_list.innerHTML = "";
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create a custom div 
		var prod = document.createElement("div");
		var newContent = document.createElement("h3");
		newContent.innerHTML = productName;
		var pricetag = document.createElement("p");
		pricetag.innerHTML = "PRICE - " + productPrice+" $";
		var text = document.createElement("input");
		text.type = "text";
		text.classList.add("text-input");
		text.placeholder= "0";
		text.name = "productDisplayed";
		text.id = productName;

	
		
		prod.appendChild(newContent);
		prod.appendChild(pricetag);
		prod.appendChild(text);
		prod.classList.add("prod-container");
		product_list.appendChild(prod);
		 
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var allProducts = document.getElementsByName("productDisplayed");
	var chosenProducts = [];
	var chosenQuantities = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < allProducts.length; i++) { 
		var thisprod = allProducts[i]
		if (!(thisprod.value == 0  || thisprod.value == null )) {
			console.log(thisprod.value);
			para.appendChild(document.createTextNode(thisprod.id + " : " + getPrice(thisprod.id) + " X " + thisprod.value + " = " + getPrice(thisprod.id)*thisprod.value + " $"));
			// para.appendChild(document.createTextNode(thisprod.id));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(thisprod.id);
			chosenQuantities.push(thisprod.value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	totalPrice = getTotalPrice(chosenProducts, chosenQuantities)
	c.appendChild(document.createTextNode("Total Price: " + totalPrice + "$$"));
		
}