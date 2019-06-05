class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let item of this.data){
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}







// *****************Домашняя работа*************************

calcAllProducts(){ // подсчет итоговой суммы товаров
    let totalPrice = 0;
    this.data.forEach((product) => {
        if(product.price !== undefined) {
            totalPrice += product.price;
            console.log(product.price);
        }
    });
    let totalProductAnswer = "Все товары на сумму $" + totalPrice;
    document.querySelector('.products-total').innerHTML = totalProductsAnswer;
}



// Класс корзины
class Cart {
    constructor() {
        // В классе корзины массив с добавленными товарами
        this.addProductsToCart = [];
        this.deletedProducts = []; // Можно добавить товары, которые были удалены из корзины c функцией возврата в корзину
    }
    // Метод открывания корзины
    openCart() {}

    // Добавление товара в корзину
    addToCart() {}

    // Удаление товара из корзины
    deleteFromCart() {}

    // Считаем стоимость и количество товаров в корзине
    calcCart() {}

    // Метод, который определяет, вид и стоимость доставки с добавлением цены в итоговый счет
    isDelivery() {}

    // Метод, который определяет, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
    isOrder() {}

    // Рендер динамического содержимого корзины
    render() {}
}

