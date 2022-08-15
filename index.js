const itemsContainer = document.getElementById("itemsContainer");
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
    for (let item of itemObj) { 
        itemsHTML += `
        <div class="itemsElement">
            <p >${item.name} <span>${item.price}</span></p>
            <button class="addButton">+</button>
        </div>
        `;
    }
    itemsContainer.innerHTML = itemsHTML;
}
render();
// add to basket function - item appears in the basket with a remove button
// remove from basket function - item disappears from the basket
// total price function - total price of all items in the basket