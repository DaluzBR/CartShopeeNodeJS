import { createItem } from "./services/item.js"
import * as cartService from "./services/cart.js"
import "./services/utils.js" // Import the file to apply the prototype extension

async function main() {
    const shopCart = []

    // Itens do carrinho.
    const item1 = await createItem("Projetor Astronauta", 45.50, 1)
    const item2 = await createItem("Clips Coloridos", 15.15, 3)
    const item3 = await createItem("Calculadora Casio", 100.00, 5)
    const item4 = await createItem("Caderno 400 folhas", 10.50, 2)

    // Adiciona os itens no carrinho.
    await cartService.addItem(shopCart, item1)
    await cartService.addItem(shopCart, item2)
    await cartService.addItem(shopCart, item3)
    await cartService.addItem(shopCart, item4)

    // Mostra os itens do carrinho.
    await cartService.displayCart(shopCart)

    // Remove 3 calculadoras Casio.
    console.log("[ Remove: 3 Calculadoras Casio ]")
    await cartService.removeItem(shopCart, item3)
    await cartService.removeItem(shopCart, item3)
    await cartService.removeItem(shopCart, item3)

    
    await cartService.displayCart(shopCart)

    // Deleta os clips coloridos.
    console.log("[ Delete: Clips coloridos ]")
    await cartService.deleteItem(shopCart, item2)

    // Mostra os itens do carrinho.
    await cartService.displayCart(shopCart)
}

main()
