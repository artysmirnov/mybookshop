'use strict';
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
        img: 'https://ndc.book24.ru/resize/820x1180/iblock/ecc/eccf44cef4c59bdf5bccd46da8739a74/c9624219340e5d2c507670bc7c3c280f.jpg',
    },
    {
        id: 8,
        name: "ТАРАС БУЛЬБА",
        price: 700,
        img: 'https://ndc.book24.ru/resize/820x1180/iblock/30e/30e6777b5e5f62f8b6bc020c32b2a281/d5ab247c6ca68fb87139207bfd919177.jpg',
    },
    {
        id: 9,
        name: "МАСТЕР И МАРГАРИТА",
        price: 100,
        img: 'https://ndc.book24.ru/resize/820x1180/iblock/bf8/bf859ccb69152729c2ad7b11b7960783/0292874bf9475b741b4c37bf1abe8e90.jpg',
    },
    {
        id: 10,
        name: "ПРИКЛЮЧЕНИЯ ТОМА СОЙЕРА",
        price: 100,
        img: 'https://cdn.book24.ru/v2/ASE000000000864642/COVER/cover13d__w410.webp',
    },
    {
        id: 11,
        name: "ХРАНИТЕЛИ",
        price: 2000,
        img: 'https://ndc.book24.ru/resize/820x1180/iblock/ecd/ecde0fce5e035736c61b04d1ea6c10b3/1e5ad64af470a50145a4bfc1413033e9.jpg',
    },
    {
        id: 12,
        name: "SQL ЗА 10 МИНУТ",
        price: 10000,
        img: 'https://ndc.book24.ru/resize/820x1180/iblock/9d6/9d6ea3a9f541ac1752afb670adc05767/d2a8ae0c340b3fde5d7347548f60eed6.jpg',
    },

];


class Products {

    render() {
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const currentPage = 1;
const rows = 6;

function displayList(arrData, rowPerPage, page) {
    const ROOT_PRODUCTS = document.getElementById('products');
    ROOT_PRODUCTS.innerHTML = '';
    page--;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedItems = arrData.slice(start, end);
    let htmlCatalog = '';
    paginatedItems.forEach(({id, name, price, img}) => {
        htmlCatalog += `
            <div class="products-element">
            <img src="${img}" alt="${name}" class="products-element__img">
            <div class="buy_block">
                <span class="products-element__price">${price}</span>
                <button class="products-element__btn" data-id="${id}">Купить</button>
            </div>
            <span class="products-element__name">${name}</span>
            </div>
            `;
    });
    const html = `<div class="products-container">${htmlCatalog}</div>`;
    ROOT_PRODUCTS.innerHTML = html;
}

displayList(GOODS, rows, currentPage);

function displayPagination(arrData, rowPerPage) {
    const pageCounter = Math.ceil(arrData.length / rowPerPage);
    const paginationalEl = document.querySelector('.pagination');
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination-list');

    for (let i = 1; i <= pageCounter; i++) {
        const liEl = displayBtn(i);
        ulEl.appendChild(liEl);
    }
    paginationalEl.appendChild(ulEl);

}

function displayBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination-item');
    liEl.innerText = page;
    if (currentPage == page) {
        liEl.classList.add('pagination-active-item');
    }
    liEl.addEventListener('click', () => {
        displayList(GOODS, rows, page);

        let currentItemLi=document.querySelector('.pagination-active-item');
        currentItemLi.classList.remove('pagination-active-item');
        liEl.classList.add('pagination-active-item');
    });
    return liEl;
}


displayPagination(GOODS, rows);


