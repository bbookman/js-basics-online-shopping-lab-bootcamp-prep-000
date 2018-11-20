cart = [{itemName: "bananas", itemPrice: 10},{itemName: "chocolate", itemPrice: 20}]
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


function removeFromCart(item) {
  for (var i=0; i < cart.length; i++){
    var thing = cart[i]
    if (thing.itemName == item) {
      cart.splice(i, 1)
      return cart
      
    } else {
      return "That item is not in your cart."
      
    }
  }
}

log.console(viewCart())