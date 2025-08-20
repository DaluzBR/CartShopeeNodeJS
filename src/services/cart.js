import { formatarString } from "./utils.js"

/**
 * Adiciona item ao carrinho.
 * 
 * @param {*} userCart  Array que representa o carrinho de compras.
 * @param {*} item      Item para ser adicionado ao carrinho de compras.
 */
async function addItem(userCart, item) {
    userCart.push(item)
}

/**
 * Remove um item ao carrinho.
 * 
 * @param {*} userCart Array que representa o carrinho de compras.
 * @param {*} itemRemove Item para ser removido do carrinho de compras.
 * @returns Retorna true se remoção ocorreu bem, false caso contrârio. 
 */
async function removeItem(userCart, itemRemove) {
    if (userCart.length <= 0) {
        console.log("AVISO: Nenhum item no carrinho.")
        return false
    }

    const index = userCart.findIndex((item) => item.id == itemRemove.id)

    if (index === -1) {
        console.log("AVISO: Item não encontrado.")
        return false
    }

    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1
        userCart[index].subtotal = () => userCart[index].price * userCart[index].quantity
    } else {
        userCart.splice(index, 1)
    }

    return true
}

// Deleta o item do carrinho
async function deleteItem(userCart, itemDelete) {
    if (userCart.length <= 0) {
        console.log("AVISO: Item não encontrado.")
        return
    }

    const index = userCart.findIndex((item) => item.id == itemDelete.id)

    if (index > -1) {
        userCart.splice(index, 1)
    }
}

// Calcula subtotal do carrihho.
async function displayCart(userCart) {
    let name
    let price
    let quantity
    let subtotal
    let divider = "".padStart(90, '-')

    console.log(divider)
    console.log(formatarString("Shopee Cart List", divider.length, '-'))
    console.log(divider)

    userCart.forEach((item, index) => {
        name = item.name.substring(0, 20).padEnd(20, ' ')
        price = `\$${item.price.toFixed(2)}`.padStart(10, ' ')
        quantity = `${item.quantity.toString().padStart(5, '0')}`
        subtotal = `\$${(item.price*item.quantity).toFixed(2)}`.padStart(10, ' ')

        console.log(`Item[${index + 1}]: ${name} - Price: ${price} - Quantity: ${quantity} - Subtotal: ${subtotal}`)
    });

    console.log(divider)

    let totalItens = `${userCart.length.toString().padStart(5, '0')}`.padEnd(44, ' ')
    let totalQuantity = `${(await calculateQuantityItens(userCart)).toString().padStart(5, '0')}`.padEnd(7, ' ')
    let total = `\$${(await calculateTotal(userCart)).toFixed(2)}`.padStart(13, ' ')

    console.log(`Items: ${totalItens} Quantity: ${totalQuantity} Total: ${total}`)

    console.log(divider)
    console.log()

}


// Calcula subtotal do carrihho.
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) =>
        total + item.price*item.quantity, 0)
}

// Calcula subtotal do carrihho.
async function calculateQuantityItens(userCart) {
    return userCart.reduce((total, item) =>
        total + item.quantity, 0)
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    displayCart,
}