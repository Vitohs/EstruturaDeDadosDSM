class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class ArvoreBI
{
    constructor()
    {
        this.root = null;
    }
    //inserir um valor na arvore
    insert(value)
    {
        let newNode = new Node(value);
        if(this.root === null)
        {
            //se a arvore tiver sem nada, esse nó vai ser a raiz (chefi)
            this.root = newNode;
        }
        else
        {
            //se nao for, insere na posicao certinha
            this._insertNode(this.root, newNode);
        }
    }
    //metodo para encontrar a posicao correta e inserir o nó na arvore
    _insertNode(node, newNode)
    {
            if (newNode.value < node.value) {
                // Se o valor do novo nó for menor que o valor do nó atual, vai para a esquerda
                if (node.left === null) {
                    // Se não tiver nada na esquerda, insere o novo nó
                    node.left = newNode;
                } else {
                    // Chama a função recursivamente para a subárvore esquerda
                    this._insertNode(node.left, newNode);
                }
            } else {
                // Se o valor do novo nó for maior ou igual ao valor do nó atual, vai para a direita
                if (node.right === null) {
                    // Se não tiver nada na direita, insere o novo nó
                    node.right = newNode;
                } else {
                    // Chama a função recursivamente para a subárvore direita
                    this._insertNode(node.right, newNode);
                }
            }
        
    }
    //percurso em ordem, visita a subarvore esquerda, o nó atual e a subarvore direita
    inOrder(node = this.root)
    {
        if(node !== null)
        {
            this.inOrder(node.left);//cortando pra esqueda
            console.log(node.value);//vendo o valor do atual
            this.inOrder(node.right);//cortando pra direita
        }
    }
    //percurso em pre ordem, visita o nó atual, a subarvore esquerda e a subarvore direita
    preOrder(node = this.root)
    {
        if(node != null)
        {
            console.log(node.value);//mostra o valor atual
            this.preOrder(node.left);//visita a esqueda
            this.preOrder(node.right);//visita a esqueda
            
        }
    }
    //percurso pós-ordem, visita a subarvore esquerda, a subarvore direita e o nó atual
    postOrder(node = this.root)
    {
        if(node != null)
            {
                this.postOrder(node.left);//visita a esqueda
                this.postOrder(node.right);//visita a esqueda
                console.log(node.value);//mostra o valor atual
            }
    }
    //buscar um valor na arvore
    search(value)
    {
        return this._searchNode(this.root, value);//inicia busca apartir da raiz
    }
    //metodo auxiliar para a busca recursivamente
    _searchNode(node, value)
    {
        if(node === null)
        {
            return false;
        }
        if(value === node.value)
        {
            return true;
        }
        else
        if(value < node.value)
        {
            return this._searchNode(node.left, value);
        }
        else
        {
            return this._searchNode(node.right.value)
        }
    }
    //remover valor na arvore
    remove(value)
    {
        this.root = this._removeNode(this.root, value);
    }
    //metodo auxiliar para remover um nó
    _removeNode(node, value)
    {
        if(node === null)
        {
            return null;
        }
        if(value < node.value)
        {
            node.left = this._removeNode(node.left, value);
            return node;
        }
        else if(value > node.value)
        {
            node.right = this._removeNode(node.right.value)
            return node;
        }
        else
        {
            //caso 1: nó folha sem filho
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
            //caso 2: nó com um filho
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
            //caso 3: nó com dois filhos
            //encontrar o menor valor da subarvore direita
            const aux = this._findMinNode(node.right);
            node.value = aux.value;//valor atual vira o vlr minimo encontrado
            node.right = this._removeNode(node.right, aux.value);//remove o valor duplicado na arvore direita
            return node;
        }
    }   
}
function generateRandomArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100000)); // Gera números aleatórios entre 0 e 99999
    }
    return arr;
}
let elementos = generateRandomArray(10000);
let arvore = new ArvoreBI();
console.time("Inserção de 10 mil elementos");
elementos.forEach(elemento => arvore.insert(elemento));
console.timeEnd("Inserção de 10 mil elementos");
console.log("10 mil elementos foram adicionados à árvore binária.");
console.log("Exibindo a árvore binária em ordem:");
arvore.inOrder();