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

 }


var bigger = false ;
function toggleFontSize() {
	var newtext;
		if(bigger){
			newtext = "2vw";
			document.getElementsByClassName("fontsize")[0].innerHTML = "+ BIGGER TEXT +"
		}else{
			newtext = "3vw";
			document.getElementsByClassName("fontsize")[0].innerHTML = "- smaller text -"
			
		}
		alltexts = document.getElementsByClassName("text");
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
			
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(restrictions);

	// The product list should be recalculated everytime the way we are implementing the website so we erase the product list and repopulate it
    var product_list = document.getElementById("displayProduct");
    product_list.innerHTML = "";
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "productDisplayed";
		checkbox.value = productName;
		product_list.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		product_list.appendChild(label);
		var p = product_list.appendChild(document.createElement("p"));
		p.htmlFor = productName;
		p.appendChild(document.createTextNode(" PRICE - " + productPrice + " $"));
		
		// create a breakline node and add in HTML DOM
		product_list.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var allProducts = document.getElementsByName("productDisplayed");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < allProducts.length; i++) { 
		if (allProducts[i].checked) {
			para.appendChild(document.createTextNode(allProducts[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(allProducts[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}