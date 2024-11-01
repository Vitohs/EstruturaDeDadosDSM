let nomes = [];
let i = 1
for(i; i <=3; i++) 
{
  nomes[i] = prompt("Digite o nome na posição " + i)
  if(i == 3)
    {
      break;
    }
}
//to fazendo o mais "dificil" poderia ser bem mais simples que esse processo.
console.log(i)
while (true)
  {
    console.log("O nome que ta na posição" + i + ":" + nomes[i]);
    i--
    if (i == 0)
      {
        break;
      }
  }
  nomes.forEach(nome => console.log(nome));