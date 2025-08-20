/**
 * Gera um id para um item com base no hash code de uma String.
 * 
 * @returns Retorna um hash usado como id nos itens do carrinho de compras.
 */
String.prototype.itemIdGenerator = function () {
    let hash = 0;
    if (this.length === 0) return hash;
    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Converte para inteiro de 32 bits
    }
    return Math.abs(hash);
}

/**
 * Função utilizada para aplicar formatação nos textos mostrados no terminal.
 * 
 * @param text Texto a ser formatado.
 * @param size Tamanho ocupado pelo texto.
 * @param separator Separador usado para preencher os espaços não ocupados pelo texto.
 * @returns 
 */
export function formatarString(text, size, separator = ' '){
    let title = `[ ${text} ]`
    let startPad = Math.abs((size + title.length) / 2)

    return title
        .padStart(startPad, separator)
        .padEnd(size, separator)
}

export { }
