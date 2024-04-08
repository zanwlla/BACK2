//criar arquivos em nosso projeto
const fs=require('fs');

//criar um arquivo de log síncrono
let log= "mensagem de log\n";
//fs.writeFileSync('./logs.log', log);
fs.writeFileSync('./logs.log',log,{flag:"a+"});

console.log("fim");

//criar um arquivo de forma assíncrona
fs.writeFile('./logs2.log', log,{flag:"a+"},(erro)=>{
    if(erro){
        console.log(erro)
    }
})
console.log("fim");

//para excluir arquivos
fs.rmSync('./logs2.log');
console.log('Removido arquivo')

//outra forma de remover
fs.unlinkSync('./logs.log')
console.log('Removido arquivo usando unlinkSync')
