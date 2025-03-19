export let cart = [];

export function addToCart(producto, cantidad) {

    const item = {
        producto,
        cantidad
    };
    cart.push(item)
    console.log(`has agregado ${cantidad} de ${producto}`);
}
