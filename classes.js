class Bottom {
    constructor(cor, formato, tamanho) {
        this._cor = cor
        this._formato = formato
        this._tamanho = tamanho
    }

    get formato() {

        return this._formato
    }
    get cor() {

        return this._cor
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    usar(local) {
        return local
    }

}

const bottomDaGabi = new Bottom('Azul', 'Redondo', 'Pequeno')
console.log(bottomDaGabi)

bottomDaGabi.cor = 'azul escuro'
console.log(bottomDaGabi.cor)
console.log(bottomDaGabi.usar('mochila'))