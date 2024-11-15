// Event Listener that runs when DOM content is loaded (This is from materializecss)
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    const languageEl = document.getElementById("language-button");
    // Scans for document with any element with .sidenav, render it on the right side.
    // Create an array of instances, this is created by the .init method from materializecss
    var instances = M.Sidenav.init(elems, { edge: "right" }); 
});

fetch("products.json")
.then(response => response.json())
.then(data => {
    const productGrid = document.getElementById("productGrid");
    data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img id="product-IMG" src="${product.image}" alt="${product.name}">
        <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-description"<p>${product.description}</p></div>
        <button id="atc-btn">Add to cart</button>
        </div> 
        `;
        productGrid.appendChild(card);
    });
})
.catch(error => console.error("Error loading products", error));