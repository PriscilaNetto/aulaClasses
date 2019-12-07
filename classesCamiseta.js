class Camisetas {
    constructor(tamanho, modelo, fornecedor) {
        this._tamanho = tamanho
        this._modelo = modelo
        this._fornecedor = fornecedor

    }

    get tamanho() {
        return this._tamanho
    }

    get modelo() {
        return this._modelo
    }

    set tamanho(novoTamanho) {

        this._tamanho = novoTamanho
    }


}

const camisetasMS = new Camisetas('P', 'Feminino', 'Deu na telha')
console.log(camisetasMS)

camisetasMS.tamanho = 'M'
console.log(camisetasMS.tamanho)