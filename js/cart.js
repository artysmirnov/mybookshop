

const cartSide = document.querySelector('.cart-side');

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');

const ROOT_PRODUCTS = document.getElementById('cart-products');

console.log(cartStorage);

let htmlCatalog = '';

if (cartStorage.length) {
    cartStorage.forEach((el) => {
        const {title, price, img,src} = el;
        const newCard = document.createElement('div');
        htmlCatalog += `
            <div class="cart-products-element">
            <div class="cart-products-info">
            <div class="cart-products-element__title">${title}</div>
            <div class="cart-products-element__price">${price}</div>
            </div>
            <div></div>
          
</div>
          
            `;
        const html = `<div class="products-container">${htmlCatalog}</div>`;
        ROOT_PRODUCTS.innerHTML = html;
    })
}
else{
    htmlCatalog+= '<h1>Ваша корзина пуста</h1>'
    ROOT_PRODUCTS.innerHTML = htmlCatalog;
}

