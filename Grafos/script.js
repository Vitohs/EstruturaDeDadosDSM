class grafo
{
    constructor()
    {
        //estrutura para armazenar os vertices e ligacoes
        this.adjacencia = {}
    }
    //adicionar um novo vÃ©rtice
    addVertice(vertice)
    {
        if(!this.adjacencia[vertice])
        {
            this.adjacencia[vertice] = []
        }
    }
    //adicionando um link/aresta/ligaÃ§Ã£o
    addAresta(vertice1,vertice2)
    {
        if(!this.adjacencia[vertice1])
        {
            this.addVertice(vertice1)
        }
        if(!this.adjacencia[vertice2])
        {
            this.addVertice(vertice2)
        }
        this.adjacencia[vertice1].push(vertice2)
        this.adjacencia[vertice2].push(vertice1)
    }
    //remover aresta entre dois vertices
    removeAresta(vertice1,vertice2)
    {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2)
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1)
    }
    //remove um verticwe e suas conexÃµes
    removeVertice(vertice)
    {
        while(this.adjacencia[vertice]?.length)
        {
            const adjacente = this.adjacencia[vertice].pop()
            this.removeAresta(vertice,adjacente)
        }
        delete this.adjacencia[vertice]
    }
    //exiba o grafo
    exibir() 
    {
        for (let vertice in this.adjacencia) 
        {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(',')}`)
        }
    }
    
}//fim da crasse
//uso

const MeuGrafo = new grafo()
// MeuGrafo.addVertice('A')
// MeuGrafo.addAresta('A','B')
// MeuGrafo.addAresta('A','C')
// MeuGrafo.addAresta('B','D')
// MeuGrafo.exibir()

MeuGrafo.addVertice('1')
MeuGrafo.addVertice('5')
MeuGrafo.addAresta('1','2')
MeuGrafo.addAresta('1','3')
MeuGrafo.addAresta('2','4')
MeuGrafo.removeVertice('2')
MeuGrafo.exibir()