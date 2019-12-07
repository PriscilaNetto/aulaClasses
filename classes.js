class Bottom {
    constructor(cor, formato, tamanho) {
        this._cor = cor
        this._formato = formato
        this._tamanho = tamanho
    }

    get cor() {
        return this._cor
    }

    get formato() {

        return this._formato
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    usar(local) {
        return "Esse bottom é para usar na " + local
    }

}



const bottomDaGabi = new Bottom('Azul', 'Redondo', 'Pequeno')
console.log(bottomDaGabi)

bottomDaGabi.cor = 'azul escuro'
console.log(bottomDaGabi.cor)
console.log(bottomDaGabi.usar('mochila'))