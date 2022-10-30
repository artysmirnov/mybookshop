const GOODS = [
    {
        "id": 0,
        "name": "ПОНЕДЕЛЬНИК НАЧИНАЕТСЯ В СУББОТУ",
        "price": 100,
        "img1": "https://cdn.book24.ru/v2/ASE000000000709823/COVER/cover13d__w410.webp",
        "img2": "https://cdn.book24.ru/v2/ASE000000000709823/COVER/cover4__w410.webp",
        "img3": "https://ndc.book24.ru/resize/820x1192/iblock/f52/f52839f8714825599c1efa821aebae40.jpeg",
        "img": "https://cdn.book24.ru/v2/ASE000000000709823/COVER/cover13d__w410.webp",
        "info": "Понедельник начинается в субботу. Сказка для научных работников младшего возраста – под таким заголовком в 1965 году вышла книга, которой зачитывались и продолжают зачитываться все новые и новые поколения. Герои ее, сотрудники НИИЧАВО, – Научно-исследовательского института Чародейства и Волшебства, – маги и магистры, молодые энтузиасты, горящие желанием познать мир и преобразовать его наилучшим образом. На этом пути их ждет множество удивительных приключений и поразительных открытий. Машина времени и изба на курьих ножках, выращивание искусственного человека и усмирение выпущенного из бутылки джинна – читатель не заскучает!",
    },
    {
        "id": 1,
        "name": "ФАУСТ",
        "price": 200,
        "img1": "https://cdn.book24.ru/v2/ITD000000001287777/COVER/cover13d__w410.webp",
        "img2": "https://cdn.book24.ru/v2/ITD000000001287777/COVER/cover4__w410.webp",
        "img3": "https://cdn.book24.ru/v2/ITD000000001287777/COVER/cover3d__w410.webp",
        "img": "https://cdn.book24.ru/v2/ITD000000001287777/COVER/cover13d__w410.webp",
        "info": "Бессмертное творение одного из величайших немецких поэтов. Главный труд, который он писал почти всю свою жизнь. Легенда об ученом, который продал душу дьяволу в обмен на его обещание открыть секреты мироздания. Великая трагедия о цели человеческого бытия, о поиске смысла жизни. «Фауст» Гёте задает загадки, и уже не одно поколение читателей пытается их разгадать."
    },
    {
        "id": 2,
        "name": "БОЖЕСТВЕННАЯ КОМЕДИЯ",
        "price": 300,
        "img": "https://ndc.book24.ru/resize/820x1192/iblock/5c6/5c620729606d5a38eb2af0288ecdbfb4/11f44a787b12ea0659de541556ecb8e7.jpg"
    },
    {
        "id": 3,
        "name": "ГАРРИ ПОТТЕР И ТАЙНАЯ КОМНАТА",
        "price": 400,
        "img": "https://ndc.book24.ru/resize/820x1192/iblock/fca/fca368cfe42eaf23b134fde1766a2821/8228a6f2ed82abe0b58ec2e5bbdf0dbe.jpg"
    },
    {
        "id": 4,
        "name": "МАЛЫШ И КРАЛСОН",
        "price": 600,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/d5c/d5c7ea025f82b3bd3a52ae916dcea595/2696dfc31965fa8e874a048843452523.jpg"
    },
    {
        "id": 5,
        "name": "ВЛАСТЕЛИН КОЛЕЦ",
        "price": 700,
        "img": "https://cdn.book24.ru/v2/ASE000000000712230/COVER/cover13d__w220.webp"
    },
    {
        "id": 6,
        "name": "ЕВГЕНИЙ ОНЕГИН",
        "price": 100,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/ecc/eccf44cef4c59bdf5bccd46da8739a74/c9624219340e5d2c507670bc7c3c280f.jpg"
    },
    {
        "id": 7,
        "name": "ТАРАС БУЛЬБА",
        "price": 700,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/30e/30e6777b5e5f62f8b6bc020c32b2a281/d5ab247c6ca68fb87139207bfd919177.jpg"
    },
    {
        "id": 8,
        "name": "МАСТЕР И МАРГАРИТА",
        "price": 100,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/bf8/bf859ccb69152729c2ad7b11b7960783/0292874bf9475b741b4c37bf1abe8e90.jpg"
    },
    {
        "id": 9,
        "name": "ПРИКЛЮЧЕНИЯ ТОМА СОЙЕРА",
        "price": 100,
        "img": "https://cdn.book24.ru/v2/ASE000000000864642/COVER/cover13d__w410.webp"
    },
    {
        "id": 10,
        "name": "ХРАНИТЕЛИ",
        "price": 2000,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/ecd/ecde0fce5e035736c61b04d1ea6c10b3/1e5ad64af470a50145a4bfc1413033e9.jpg"
    },
    {
        "id": 11,
        "name": "SQL ЗА 10 МИНУТ",
        "price": 10000,
        "img": "https://ndc.book24.ru/resize/820x1180/iblock/9d6/9d6ea3a9f541ac1752afb670adc05767/d2a8ae0c340b3fde5d7347548f60eed6.jpg"
    }
]
let id = JSON.parse(localStorage.getItem('id'));


console.log(id)

const ROOT_PRODUCTS = document.getElementById('item-page');

console.log(GOODS[id])

let htmlCatalog = '';
htmlCatalog += `
        <div class="item_page">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100"
                         src=${GOODS[id].img1}
                         alt="Первый слайд">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src=${GOODS[id].img2}
                         alt="Второй слайд">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"
                         src=${GOODS[id].img3}
                         alt="Третий слайд">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="item_info">${GOODS[id].info}
        </div>
        <div class="buy_item">
            <p>В наличии</p>
            <p>Стоимость: ${GOODS[id].price}</p>
            <button class="${GOODS[id].id}" id="buy">Купить</button>
        </div>
    </div>
            `;
const html = `<div class="helloitem">${htmlCatalog}</div>`;
ROOT_PRODUCTS.innerHTML = html;

const btnBuy = document.getElementById("buy")

console.log(btnBuy)

if(btnBuy){
    btnBuy.addEventListener('click', ()=> {
        const cartStorage = localStorage.getItem('cart') || '[]'
        const cart = JSON.parse(cartStorage)
        localStorage.setItem('cart', JSON.stringify([...cart, btnBuy.className]))
        console.log(localStorage)
    });
}



