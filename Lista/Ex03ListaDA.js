class no
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}
class inventario
{
    constructor()
    {
        this.head = null
    }
    AdicionarItem(value)
    {
        let novoNo = new no(value)
        novoNo.next = this.head
        this.head = novoNo
    }
    AddUltimo(value)
    {
        let novoNo = new no(value)
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
    RemoverItem(value)
    {
        if(this.head === null)
        {
            return
        }
        if(this.head.value === value)
        {
            let oii = this.head.value
            this.head = this.head.next
            return console.log("oiiiii, tirei o " + oii)
        }
        let atual = this.head
        while(atual.next !== null && atual.next.value !== value)
        {
            atual = atual.next
        }
        if(atual.next !== null)
        {
            atual.next = atual.next.next
        }
    }
    Descubra(value)
    {
        let atual = this.head
        while(atual !== null)
        {
            if(atual.value === value)
            {
                return console.log("Achei o poder " + value)
            }
            atual = atual.next
        }
        return null
    }
    ver()
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
let giro = new inventario()
giro.AdicionarItem('Mago Negro')
giro.AdicionarItem('Raio Congelante')
giro.AdicionarItem('Bankai: senbonzakura kageyoshi')
giro.AddUltimo('Escudo de fogo')
giro.RemoverItem('Raio Congelante')
giro.Descubra('Escudo de fogo')
giro.ver()