//Exercicio: Coyote 
const Aluno = 
{
    1: {nome: "vivi"},
    2: {nome: "fafá"},
    3: {nome: "yurisan"}
}
Object.entries(Aluno).forEach(([chave, valor]) => 
{
    console.log(`Codigo: ${chave}, Nome: ${valor.nome}`)
})

//Exercicio Baragan
function segunda(string)
{
    const espada = string.split("")
    const chaves = {}
    i = 0
    while(i < espada.length)
    {
        if(chaves[espada[i]] === undefined)
        {
            chaves[espada[i]] = 1
        }
        else
        {
            chaves[espada[i]] += 1
        }
        i++
    }
    console.table(chaves)
}
segunda("vivichefe")

//tercera espada
const tercera = 
{
    1: {nome: "produto ivone", preco: 60},
    2: {nome: "porshe maçã", preco: 22},
    3: {nome: "gol quadrado", preco: 44},
    4: {nome: "Porçâo de batata na praia do guaiuba (guarujá)", preco: 120},
    5: {nome: "Salario trabalhando no jau serve como repositor na escala 6x1", preco: 1200},
}
Object.entries(tercera).forEach(([chave, valor]) => 
{
    if(valor.preco >= 50)
    {
        console.log(`Codigo: ${chave}, Nome: ${valor.nome}, Preço: ${valor.preco}`)
    }
})
//Quarta
function remova(obj)
{
    Object.entries(obj).forEach(([chave, valor]) => 
    {
        if(valor.idade === null)
        {
            delete obj[chave]
        }
        else
        {
            console.log(`Codigo: ${chave}, Nome: ${valor.nome}, Idade: ${valor.idade}`)
        }  
    } 
)
}
const obj = 
{
    1: {nome: "vivi", idade: null},
    2: {nome: "fafá", idade: 19},
    3: {nome: "yurisan", idade: 17}
}
remova(obj)
//Quinta espada
function contarfrase(frase)
{
    const palavras = frase.split("")
    const chaves = new Map()
    i = 0
    while(i < palavras.length)
    {
        if(chaves.has(palavras[i]))
        {
            chaves.set(palavras[i], chaves.get(palavras[i]) + 1)
        }
        else
        {
            chaves.set(palavras[i], 1)
        }
        i++
    }
    console.table(chaves)
}
contarfrase("coyote")
//sexta espada
function frequencia(string)
{
    const contador = new Map()
    const palavras = string.split("")
    for(let i = 0; i < palavras.length; i++)
    {
        if(contador.has(palavras[i]))
        {
            contador.set(palavras[i], contador.get(palavras[i]) + 1)
        }
        else
        {
            contador.set(palavras[i], 1)
        }
    }
    console.table(contador)
}

//setima espada

function convertaOBJ(obj)
{
    const novoObj = new Map()
    obj = Object.entries(obj).forEach(([chave, valor]) =>
    {
        novoObj.set(chave, valor)
    })
    console.table(novoObj)
}
function convertaMAP(obj)
{
    const novoObj = {}
    obj.forEach((valor, chave) =>
    {
        novoObj[chave] = valor
    })
    console.table(novoObj)
}

const mapteste = new Map()
mapteste.set("Nome", "vivi")
mapteste.set("Idade", 18)

const teste = {
    1: {nome: "vivi"},
    2: {nome: "fafá",},
    3: {nome: "yurisan"}
}

convertaOBJ(teste)
convertaMAP(mapteste)