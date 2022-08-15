const itemsContainer = document.getElementById("itemsContainer");
const shoppingCart = document.getElementById("shoppingCart");
const itemObj = [
    {
        name: "Finish coding challenge", price: 1
    },
    { name: "get serious with amazon", price: 100 },
    {
        name: "Get to work", price: 3
    }
];
// render the items we have for sale with an add item button
function render() {
    let itemsHTML = "";
     itemObj.forEach(function (item, index) {
       itemsHTML += `
        <div class="itemsElement">
            <p >${item.name} <span>${item.price}</span></p>
            <button class="addButton" id="${index}">+</button>
        </div>
        `;
     });
    itemsContainer.innerHTML = itemsHTML;
}
render();
// add to basket function - item appears in the basket with a remove button
const addButton = document.getElementsByClassName('addButton')
const cartItems = [];
function addItemToCart () {
    cartItems.push(itemObj[this.id]);
   
    renderToCart();
}
for (let btn of addButton) {
    btn.addEventListener('click',addItemToCart)
}
function renderToCart () {
     let itemsHTML = "";
     cartItems.forEach(function (item, index) {
       itemsHTML += `
        <div class="itemsElement">
            <p >${item.name} <span>${item.price}</span></p>
            <button class="removeButton" id="${index}">-</button>
        </div>
        `;
     });
     shoppingCart.innerHTML = itemsHTML;
}
// remove from basket function - item disappears from the basket
// total price function - total price of all items in the basket