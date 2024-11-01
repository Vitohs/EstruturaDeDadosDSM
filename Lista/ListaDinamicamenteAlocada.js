class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null // ponteiro para o proximo nó
    }
}
class LinkedList
{
    constructor()
    {
        this.head = null //A lista começa vazia
    }
    //inserir no inicio da lista
    InsertBeginning(value)
    {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    //Inserir no fim da lista
    InsertAtEnd(value)
    {
        let newNode = new Node(value)
        if(this.head === null)
        {
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next !== null)
        {
            current = current.next
        }
        current.next = newNode
    }
    //Remover um nó por valor
    RemoveByValue(value)
    {
        if(this.head === null)
        {
            return;
        }
        //se o nó a ser removido for o primeiro
        if(this.head.value === value)
        {
            let oii = this.head.value
            this.head = this.head.next
            return console.log("oiiiii, tirei o " + oii);
        }
        let current = this.head
        while(current.next !== null && current.next.value !== value)
        {
            current = current.next
        }
        if(current.next !== null)
        {
            current.next = current.next.next
        }
    }
    //Buscar um nó por valor
    Find(value)
    {   
        let current = this.head
        while(current !== null)
        {
            if(current.value === value)
            {
                return console.log(current)
            }
            // else
            // {
            //     console.log("Lembrei daquela sexta-feira")
            // }
            current = current.next
        }
        return null
    }
    //Exibir a lista (opcional, para vizu)
    PrintList()
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
//instanciando
let list = new LinkedList()
//inserindo no inicio
list.InsertBeginning(22)
list.InsertBeginning(10)
list.InsertBeginning(7)
//Inserindo no fim
list.InsertAtEnd(333)
list.InsertAtEnd(157)
list.InsertAtEnd(69)
//buscando
list.Find(22)
//removendo por valor
list.RemoveByValue(333)
//exibindo
list.PrintList()