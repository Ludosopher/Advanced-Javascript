'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, imgsrc = 'https://place-hold.it/150') => {
  return `<div class="product-item">
            <div class="imgTitlePrice">
                <div class="imgTitle">
                  <img src="${imgsrc}" alt="">
                  <h3>${title}</h3>
                </div>
                <p>Цена: ${price} руб.</p>
            </div>
            <button class="by-btn">Добавить в корзину</button>
            
          </div>`;
};

const renderProducts = list => {
  const productList = list.map(product => renderProduct(product.title, product.price)).join("");
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
