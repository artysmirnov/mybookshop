const products = document.querySelectorAll('.products-element')

products.forEach((el, idx) => {
    const img = el.querySelector('.products-element__img');
    const btn = el.querySelector('.products-element__btn');
    const title = el.querySelector('.products-element__name').textContent;
    const price = el.querySelector('.products-element__price').textContent;

    btn.addEventListener('click', () => {
        const cartStorage = localStorage.getItem('cart') || '[]'
        const cart = JSON.parse(cartStorage)
        const card = {title, price, img, img: img.src}
        localStorage.setItem('cart', JSON.stringify([...cart, card]))
    })
})