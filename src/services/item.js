/**
 * Cria item para ser adicionado ao carrinho.
 * 
 * @param name      Nome no item.
 * @param price     Preço do item.
 * @param quantity  Quantidade do item.
 * @returns         Retorna um item para ser adicionado ao carrinho.
 */
async function createItem(name, price, quantity) {
    let id = name.itemIdGenerator()

    return {
        id,
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export {
    createItem,
}