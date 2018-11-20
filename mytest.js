var cart = [{itemName: "bananas", itemPrice: 10},{itemName: "chocolate", itemPrice: 20}]


function total() {
  var total = 0
  for (var i=0; i < cart.length; i++){
    var item = cart[i]
    console.log("Item " + item.itemName + " Cost $" + item.itemPrice)
    total += item.itemPrice
  }
  return total
}



console.log(total())