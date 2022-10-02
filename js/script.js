'use strict';
const ROOT_PRODUCTS = document.getElementById('products');
const ROOT_SHOPPING = document.getElementById('shopping');
const ROOT_HEADER = document.getElementById('header');
const GOODS = [
    {
        id: 1,
        name: "ПОНЕДЕЛЬНИК НАЧИНАЕТСЯ В СУББОТУ",
        price: 100,
        img: "https://cdn.book24.ru/v2/ASE000000000709823/COVER/cover13d__w410.webp",
    },

    {
        id: 2,
        name: "ФАУСТ",
        price: 200,
        img: "https://ndc.book24.ru/resize/820x1192/iblock/5f7/5f7e85879836fdbfbbd60a1db68e7575/eedd8ea063e98afcd403217c5d65b731.jpg",
    },

    {
        id: 3,
        name: "БОЖЕСТВЕННАЯ КОМЕДИЯ",
        price: 300,
        img: "https://ndc.book24.ru/resize/820x1192/iblock/5c6/5c620729606d5a38eb2af0288ecdbfb4/11f44a787b12ea0659de541556ecb8e7.jpg",
    },
    {
        id: 4,
        name: "ГАРРИ ПОТТЕР И ТАЙНАЯ КОМНАТА",
        price: 400,
        img: "https://ndc.book24.ru/resize/820x1192/iblock/fca/fca368cfe42eaf23b134fde1766a2821/8228a6f2ed82abe0b58ec2e5bbdf0dbe.jpg",
    },
    {
        id: 5,
        name: "МАЛЫШ И КРАЛСОН",
        price: 600,
        img: "https://ndc.book24.ru/resize/820x1180/iblock/d5c/d5c7ea025f82b3bd3a52ae916dcea595/2696dfc31965fa8e874a048843452523.jpg",
    },
    {
        id: 6,
        name: "ВЛАСТЕЛИН КОЛЕЦ",
        price: 700,
        img: "https://cdn.book24.ru/v2/ASE000000000712230/COVER/cover13d__w220.webp",
    },
    {
        id: 7,
        name: "ЕВГЕНИЙ ОНЕГИН",
        price: 100,
        img: 1,
    },
    {
        id: 8,
        name: "ТАРАС БУЛЬБА",
        price: 700,
        img: 1,
    },
    {
        id: 9,
        name: "МАСТЕР И МАРГАРИТА",
        price: 100,
        img: 1,
    },
    {
        id: 10,
        name: "ПРИКЛЮЧЕНИЯ ТОМА СОЙЕРА",
        price: 100,
        img: 1,
    },
    {
        id: 11,
        name: "ХРАНИТЕЛИ",
        price: 2000,
        img: 1,
    },
    {
        id: 12,
        name: "SQL ЗА 10 МИНУТ",
        price: 10000,
        img: 1,
    },

];

console.log(GOODS);

class Products {

    render() {
        let htmlCatalog = '';
        GOODS.forEach(({id, name, price, img}) => {
            htmlCatalog += `
            <li class="products-element">
            <img src="${img}" alt="${name}" class="products-element__img">
            <div class="buy_block">
                <span class="products-element__price">${price}</span>
                <button class="products-element__btn" data-id="${id}">Купить</button>
            </div>
            <span class="products-element__name">${name}</span>
            </li>
            `;
        });
        const html = `<ul class="products-container">${htmlCatalog}</ul>`;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render()