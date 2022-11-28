//First Attempt by my self but it wasn't working properly


var removeItem = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeItem.length; i++) {
        var button = removeItem[i]
        button.addEventListener('click', function(event){
        var buttonClick = event.target
        buttonClick.parentElement.parentElement.remove()
        })
}

function AddItem(){
    var AddItem = document.getElementsByClassName('shop-item-button')[1]
    for(let i = 0; i < AddItem.length; i++){
        var button = AddItem[i]
        button.addEventListener('click',addItemClick)
        }
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanges)
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            return
        }
    }

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addItemClick(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updated()
}

function quantityChanges(event){
    var input = event.target
    if(isNaN(inputvalue) ||  input.value <= 0){
        input.value = 1 
    }
    updated()
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanges)
}

function updated() {
        var cartItem = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItem.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
        }
}
total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}



