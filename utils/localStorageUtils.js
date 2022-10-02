class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let proucts = this.getProducts();
        const index = proucts.indexOf(id);
        let pushProduct = false;
        if (index === -1) {
            proucts.push(id);
            pushProduct = true;
        } else {
            proucts.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(proucts));

        return {
            pushProduct,
            proucts
        }
    }
}

const localStorageUtil = new LocalStorageUtil();

localStorageUtil.putProducts(12);
localStorageUtil.putProducts(3);
console.log(localStorageUtil.getProducts());