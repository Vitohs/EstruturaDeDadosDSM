class no
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Corrida
{
    constructor()
    {
        this.head = null
    }

    Detras(valor)
    {
        let novoNo = new no(valor)
        novoNo.next = this.head
        this.head = novoNo
    }

    DeFrente(valor)
    {
        let novoNo = new no(valor)
        if(this.head === null)
        {
            this.head = novoNo
            return
        }
        let atual = this.head
        while(atual.next !== null)
        {
            atual = atual.next
        }
        atual.next = novoNo
    }

    RemovePorValor(valor)
    {
        if(this.head === null)
        {
            return
        }
        if(this.head.value === valor)
        {
            let oii = this.head.value
            this.head = this.head.next
            return console.log("oiiiii, tirei o " + oii)
        }
        let atual = this.head
        while(atual.next !== null && atual.next.value !== valor)
        {
            atual = atual.next
        }
        if(atual.next !== null)
        {
            atual.next = atual.next.next
        }
    }

    AchouLento(valor)
    {
        let atual = this.head
        while(atual !== null)
        {
            if(atual.value === valor)
            {
                return true
            }
            atual = atual.next
        }
        return null
    }

    Xis()
    {
        let current = this.head
        let list = ''
        while(current !== null)
        {
            list += current.value + '->'
            current = current.next
        }
        console.log(list + 'null')
    }
}

let lista = new Corrida()
lista.Detras('Rapida')
lista.DeFrente('Lenta')
//nao sei se era preciso isso aqui, eu li um SE no enunciado ja pensei nesse if maluco, mas ta funcionando...
if(lista.AchouLento('Lenta') === true)
{
    lista.RemovePorValor('Lenta')
}
lista.Xis()