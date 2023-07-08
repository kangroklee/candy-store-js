function Candy(name, desc, inStock, imgURL) {
    this.name = name;
    this.desc = desc;
    this.inStock = inStock;
    this.imgURL = imgURL;
}

export function showCupboard() {
    const candyList = [];
    //candy object is added to candyList with obj constructors
    candyList.push( new Candy("Gummy Bears", "Loved all 'round the world.", true, "https://upload.wikimedia.org/wikipedia/commons/a/a6/Oursons_gélatine_marché_Rouffignac.jpg") );
    candyList.push( new Candy("Reese's Peanut Butter Cups", "Kids and adults alike LOVE peanut butter.", false, "https://cdn.shopify.com/s/files/1/0258/7626/7092/products/Reese_s-Peanut-Butter-Cups-Unwrapped_1200x1200.jpg?v=1591997880") );
    candyList.forEach(element => candyToDOM(element));
}

function candyToDOM(obj) {
    const candyContainer = document.createElement('div');
    const candyElementName = document.createElement('h2');
    const candyElementDescription = document.createElement('p');
    const candyElementAvailable = document.createElement('strong');
    const candyElementImg = document.createElement('img');
    const childElements = [candyElementName, candyElementDescription, candyElementImg, candyElementAvailable];

    candyElementName.textContent = obj.name;
    candyElementDescription.textContent = obj.desc;
    (function() {
        if(obj.inStock) 
            candyElementAvailable.textContent = "In Stock";
        else 
            candyElementAvailable.textContent = "Out of Stock";
    })();
    candyElementImg.setAttribute('src', obj.imgURL);
    candyElementImg.setAttribute('class', "candy-image");

    //use spread operator to append children
    candyContainer.append(...childElements);
    content.appendChild(candyContainer);
}