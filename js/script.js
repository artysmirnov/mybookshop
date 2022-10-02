'use strict';
var goods ={
    "1":
        {
            "name": "Товар 1",
            "price": 100,
            "img": 1,
        },
    "2":
        {
            "name": "Товар 2",
            "price": 100,
            "img": 1,
        },
    "3":
        {
        "name": "Товар 3",
        "price": 100,
        "img": 1,
    },
};

console.log(goods);

var out = "";
for (var key in goods){
    console.log(key);
    out+= 'Название: ' + goods[key].name + '<br>';
};
document.getElementById("out").innerHTML = out;