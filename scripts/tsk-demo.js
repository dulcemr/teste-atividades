
const tasks = [
    "checar mensagens",
    "entrar na videochamada",
    "Revisar pull requests",
    "atualizar documentação",
    "Code review",
    "Testar nova feature",
    "consertar bugs",
    "Deploy application"
];

 
  
// Gera um número aleatório entre 0 e 1, multiplica pelo comprimento do array
const randomIndex = Math.floor(Math.random() * phrases.length);
  
// Seleciona uma frase aleatória do array
const randomPhrase = phrases[randomIndex];
  
// Imprime a frase aleatória
console.log(randomPhrase);