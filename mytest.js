var cart = [{itemName: "bananas", itemPrice: 10},{itemName: "chocolate", itemPrice: 20}]

function total() {
  var total = 0
  for (var i=0; i < cart.length; i++){
    var item = cart[i]
    total += item.itemPrice
  }
  return total
}

function placeOrder(cardNumber) {
  console.log("Total is " + total())
   if (cardNumber !== undefined){
     cart = []
     
     return "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "." 
   } else {
     return "Sorry, we don't have a credit card on file for you."
   }
}


console.log(total())
console.log(placeOrder(9943883))