'use strict';

class cartList {
    constructor(container = '.cart') {
        this.container = container;
        this.cartCost = 0; // для подсчёта стоимости корзины
        this.cartVolume = 0; // для подсчёта объёма корзины, единиц товаров
        this.cartCostBlock = ''; // для блока с сообщением о стоимости корзины
        this.allCart = []; // массив товаров корзины
        this.putToCart(); // создание экземпляра объекта cartItem (c соответствующим блоком div выбранного товара) и его размещение на странице cart.html в блоке cart.
        this.CartVolumeСost(); // расчёт объёма и стоимости корзины
    }
}

class cartItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        takeFromCatalog(); // при нажатии на кнопку "Купить" определяется выбранный товар и для него создаётся блок div.
    }

}

const list = new cartList();