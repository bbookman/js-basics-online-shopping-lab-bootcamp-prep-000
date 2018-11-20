cart = [{itemName: "bananas", itemPrice: 10},{itemName: "chocolate", itemPrice: 20}]
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
    var min=1; 
    var max=101;  
    var price =Math.floor(Math.random() * (max - min)) + min;
    cart.push({itemName: item, itemPrice: price})
    return item + " has been added to your cart.";
}


function viewCart() {
  // write your code here
  var returnString = "In your cart, you have "
  if (cart.length == 0){
    return "Your shopping cart is empty."
  }
  
  if (cart.length == 1){
    var item = cart[0]
    returnString += item.itemName + " at $" + item.itemPrice + "."
    return returnString
  }
  for (var i = 0; i < cart.length; i++){
    var item = cart[i]
    
    if ((i + 1) == cart.length){
      returnString += "and " + item.itemName + " at $" + item.itemPrice + "."
    } else {
       returnString += item.itemName + " at $" + item.itemPrice + ", "
    }
  }
  return returnString
}

function total() {
  var total = 0
  for (var i=0; i < cart.length; i++){
    var item = cart[i]
    console.log("Item " + item.itemName + " Cost $" + item.itemPrice)
    total += item.itemPrice
  }
  return total
}


function removeFromCart(item) {
  for (var i=0; i < cart.length; i++){
    var thing = cart[i];
    if (thing.itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
   if (cardNumber !== undefined){
     cart = []
     
     return "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "." 
   } else {
     return "Sorry, we don't have a credit card on file for you."
   }
}

console.log(placeOrder(5678))