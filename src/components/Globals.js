
export default class Globals {
    static logged = false
    static cart = []
    static whishlist = []

    static updateCart(newCart) {
        Globals.cart = newCart;
        Globals.saveToLocalStorage('cart', newCart)
    }

    static updateLogged(newLogged) {
        Globals.logged = newLogged
        Globals.saveToLocalStorage('logged', newLogged)
    }

    static saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static loadFromLocalStorage() {
        const storedLogged = localStorage.getItem('logged');
        const storedCart = localStorage.getItem('cart');

        if (storedLogged !== null) {
            Globals.logged = JSON.parse(storedLogged)
        }

        if (storedCart !== null) {
            Globals.cart = JSON.parse(storedCart)
        }
    }

}