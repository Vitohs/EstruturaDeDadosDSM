class no 
{
    constructor(value) 
    {
        this.value = value
        this.next = null
    }
}

class Trilha 
{
    constructor() 
    {
        this.head = null
    }

    DestruidoPeloAmor(valor) 
    {
        let novoNo = new no(valor)
        novoNo.next = this.head
        this.head = novoNo
    }

    RecriadoPeloOdio(valor) 
    {
        let novoNo = new no(valor)
        if (this.head === null) {
            this.head = novoNo
            return;
        }
        let atual = this.head
        while (atual.next !== null) 
        {
            atual = atual.next
        }
        atual.next = novoNo
    }

    RemovePorValor(valor) 
    {
        if (this.head === null) 
        {
            return
        }
        if (this.head.value === valor) 
        {
            let oii = this.head.value
            this.head = this.head.next
            return console.log("oiiiii, tirei o " + oii)
        }
        let atual = this.head
        while (atual.next !== null && atual.next.value !== valor) 
        {
            atual = atual.next
        }
        if (atual.next !== null) 
        {
            atual.next = atual.next.next
        }
    }

    FreiGalvao(valor) 
    {
        let atual = this.head
        while (atual !== null) 
        {
            if (atual.value === valor) 
            {
                return console.log("Encontrei o " + valor)
            }
            atual = atual.next
        }
        return null
    }

    Apareca() 
    {
        let atual = this.head
        let lista = ''
        while (atual !== null) 
        {
            lista += atual.value + '->'
            atual = atual.next
        }
        console.log(lista + 'null')
    }
}

// instancia
let artista = new Trilha()
artista.DestruidoPeloAmor('cachoeira')
artista.DestruidoPeloAmor('mirante')
artista.DestruidoPeloAmor('caverna')
artista.DestruidoPeloAmor('Sani')
artista.RecriadoPeloOdio('Ponte véia quebrada sob uma ravina')
//explorador percebeu um lugar perigoso, irá remover
artista.RemovePorValor('Sani')
//ver se o mirante ta la ainda
artista.FreiGalvao('mirante')
//ver se o Sani ta lá
artista.FreiGalvao('Sani')
artista.Apareca()