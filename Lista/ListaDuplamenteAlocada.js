class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList
{
    constructor()
    {
        this.head = null
        this.tail = null
        this.lenght = 0
    }
    //inserindo na posição especifica
    insertAt(value, index)
    {
        //cria um novo nó
        const a = new Node(value)
        //verifico o index desejado
        let now = index
        //pergunto se o index for menor que zero OU for maior que a capacidade da lista, erro
        if(now < 0 || now > this.lenght)
        {
            console.log("ERRO, INDEX MUITO MAIOR QUE A LISTA OU VALOR NÃO APROPRIADO")
            return
        }
        //se o index for zero, significa que eu quero adicionar no inicio da lista
        else if(now === 0)
        {
            this.prepend(value)
        }
        //se o index for igual ao tamanho da lista + 1, significa que eu quero adicionar no final da lista
        else if(now === this.lenght + 1)
        {
            this.append(value)
        }
        //porem sabemos que voce quer isso aqui
        else
        {
            //current pega o valor da posicao 0
            let current = this.head
            //crio uma variavel para pegar o valor anterior
            let previous
            //incrementacion
            let i = 0
            //enquanto i for menor que o index
            while(i < index)
            {
                //previous recebe o valor de current(o valor da posicao que o usuario digitou)
                previous = current
                //o currente, ele pega esse valor, só que ele vai buscar o next, ou seja, o proximo valor
                current = current.next
                //repetir até achar
                i++
            }
            //oq, o a no caso valor que eu quero, ele vai ter o next do valor do cara que eu tomei o trono
            a.next = current
            //o meu prev, vai pegar o prev do cara que eu despejei, entao como um simbionte eu pego essa pra mim
            a.prev = previous
            //o anterior do numero que eu mandei sair do meu lugar, vai apontar o next pra mim
            previous.next = a
            // o cara que já ta em outra posicao, vai apontar em mim como o seu prev
            current.prev = a
            //incremento o tamanho da lista, já que adicionei mais um elemento.
            this.length++
        }
    }
    //adiciona ao final da lista
    append(value)
    {
        const newNode = new Node(value)

        if(!this.head)
        {
            this.head = newNode
            this.tail = newNode
        }
        else
        {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.lenght++
    }
    //adiciona no inicio
    prepend(value)
    {
        const newNode = new Node(value)

        if(!this.head)
        {
            this.head = newNode
            this.tail = newNode
        }
        else
        {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.lenght++
    }
    //remover o nó no final da lista
    removeLast()
    {
        if(!this.tail) return null

        const removeNode = this.tail
        if(this.tail === this.head)
        {
            this.head = null
            this.tail = null
        }
        else
        {
            this.tail = this.tail.prev
            this.tail.next = null
        }

        this.lenght--
        return removeNode.value
    }
    //remover no inicio da lista
    removeFirst()
    {
        if(!this.head) return null

        const removedNode = this.head
        if(this.head === this.tail)
        {
            this.head = null
            this.tail = null
        }
        else
        {
            this.head = this.head.next
            this.head.prev = null
        }

        this.lenght--
        return removedNode.value
    }
    //percorrer a lista do inicio ao fim
    traverse()
    {
        let current = this.head
        while(current)
        {
            console.log(current.value)
            current = current.next
        }
    }
    //percorrer a lista do fim ao inicio
    traversereverse()
    {
        let current = this.tail
        while(current)
        {
            console.log(current.value)
            current = current.prev
        }
    }
    //ACHE.
    find(value)
    {
        //variavel recebe o valor da cabeça(primera)
        let current = this.head
        //enquanto o valor da variavel for diferente de nulo
        while(current !== null)
        {
            //caso achemos...
            if(current.value === value)
            {
                //escreval(valor achado)
                //kk doidera ficou daora esse log fala ai minha tropa (ninguem deve ta lendo isso)
                return console.log('valor: ' + current.value + ' prev dele: ' + current.prev.value + ' next dele: ' + current.next.value)
            }
            //diferente de um i++ eu incremento meio que pulando de um vagão para o outro de um trem em velocidade alta.
            current = current.next
        }
        //caso nao tenha dado certo
        return console.log("lembrei daquela sexta-feira")
    }
    //vish ja vi que vai ser tenso bora desenrolar isso ai
    removeAt(index)
    {
        //se o index for menor que zero ou maior que o tamanho da lista, erro
        if(index < 0 || index > this.lenght)
        {
            console.log("faz o negocio certo ai paizao")
            //breiki
            return
        }
        //se o index for zero, significa que eu quero remover no inicio da lista
        else if(index === 0)
        {
            this.removeFirst()
        }
        //se o index for igual ao tamanho da lista + 1, significa que eu quero remover no final 
        else if(index === this.lenght)
        {
            this.removeLast()
        }
        //ok vamos la entao
        else
        {
            //current pega o valor da posicao 0
            let current = this.head
            //crio uma variavel para pegar o valor anterior
            let previous
            //incrementacion
            let i = 0
            //enquanto i for menor que o index
            while(i < index)
            {
                //parecido com insertAt
                previous = current
                current = current.next
                //repita
                i++
            }
            console.log("removido: " + previous.value)
            //vou elucidar aqui
        //lista 10-20-30-22
        //escolho a posicao 3 no caso 30, o next do 20 tem que apontar o 22, e o previus do 22 tem que apontar o 20
        //meio que finge, que o 30 nunca existiu entao excluem ele do grupo que brisa
            previous.next = current.next
            current.next.prev = previous
            //diminua.
            this.length--
        }
    }
}
const list = new DoublyLinkedList()

list.append(22)
list.append(13)
list.append(7)
list.append(69)

// list.insertAt(55,2)

console.log("percorrendo do inicio ao fim")
list.traverse()

list.find(7)

list.removeAt(2)


// list.prepend(171)

// console.log("percorrendo do inicio ao fim após adicionar um no inicio")
list.traverse()

// list.removeLast()
// console.log("percorrendo após tirar o ultimo")
// list.traverse()

// list.removeFirst()
// console.log("percorrendo após tirar o primeiro")
// list.traverse()

// console.log("inverso agora")
// list.traversereverse()