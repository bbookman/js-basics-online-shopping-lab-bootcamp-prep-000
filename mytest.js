cart = []
function addToCart(item) {
 // write your code here
    var min=1; 
    var max=101;  
    var price =Math.floor(Math.random() * (max - min)) + min;
    cart.push({itemName: item, itemPrice: price})
    console.log(viewCart())
    return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  var returnString = "In your cart, you have "
  for (var i = 0; i < cart.length; i++){
    var item = cart[i]
    
    if ((i + 1) == cart.length){
      returnString += item.itemName + " at $" + item.itemPrice
    } else {
       returnString += item.itemName + " at $" + item.itemPrice + ", "
    }
  }
  return returnString
}


console.log(addToCart("bananas"))
console.log(addToCart("chocolate"))
