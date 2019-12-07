class materialEscolar {
    constructor(cor, formato, tamanho, nome) {
        this._cor = cor
        this._formato = formato
        this._tamanho = tamanho
        this._nome = nome

    }

    get cor() {
        return this._cor
    }

    get formato() {

        return this._formato
    }

    set formato(novoFormato) {
        this._formato = novoFormato
    }

    set cor(novaCor) {
        this._cor = novaCor
    }
    utilidade(ação) {
        return "Esse material escolar tem como função " + ação
    }

}

class Borracha extends materialEscolar {
    constructor(cor, formato, tamanho, nome, materiaPrima) {
        super(cor, formato, tamanho, nome)

        this._materiaPrima = materiaPrima
    }



}

const borracha = new Borracha('Rosa', 'Quadrada', 'Pequena', 'Borracha', 'Látex')
console.log(borracha)

borracha.cor = 'lilás'
console.log(borracha.cor)
console.log(borracha.utilidade('apagar'))