// PROGRAMA EM JS PARA GERAR CPF

// SITE PARA TESTE: https://onecompiler.com/javascript/3ypuay83e |  https://replit.com/

// SITE REFERENCIA ALGORITIMO: https://www.macoratti.net/alg_cpf.htm

let array = [1,2,2,3,3,4,5,5,6,0,0];
let multiplicador = 10, calcFinal = 0, somaValores = 0;
let restoDivisao = 0, numRandomico=0;
const DIVISOR = 11;

gerarNumaleatorio = () => {
  array = [0,0,0,0,0,0,0,0,0,0,0]
  for(let i=0; i<9; i++){
    numRandomico = Math.round(Math.random() * 9)
    array[i] = numRandomico;   // <== INSERIR VALORES DENTRO DO ARRAY
    //console.log(array[i])
  }
}

//gerarNumaleatorio()

// FUNÇÃO PRIMEIRO DIGITO VERIFICADOR
primeiroDigitoVerificador = () => {

  multiplicador = 10;
  calcFinal = 0;
  somaValores = 0;
  restoDivisao = 0;
  
  for(n of array){
    calcFinal = multiplicador*n;
    //console.log(calcFinal)
    somaValores = calcFinal+somaValores
    multiplicador--;
  }
  restoDivisao = somaValores%DIVISOR;
  if(restoDivisao < 2){
    restoDivisao = 0;
  }else{
    restoDivisao =  DIVISOR - restoDivisao
    array[9] = restoDivisao
  }
}



segundoDigitoVerificador = () => {

  multiplicador = 11;
  calcFinal = 0;
  somaValores = 0;
  restoDivisao = 0;
  
  for(n of array){
    calcFinal = multiplicador*n
    somaValores = calcFinal+somaValores
    multiplicador--;
   // console.log(somaValores)
  }
  restoDivisao = somaValores%DIVISOR;
  //console.log(restoDivisao)

  if(restoDivisao < 2){
    restoDivisao = 0
  }else{
    restoDivisao =  DIVISOR - restoDivisao
    array[10] = restoDivisao
  }
}
// FUNÇÃO SEGUNDO DIGITO VERIFICADOR



// DEBUG - SAIDA DOS RESULTADOS
qtdGerarCPF = (qtd) => {
  let j=0;
  while(j < qtd){
    gerarNumaleatorio()
    primeiroDigitoVerificador()
    segundoDigitoVerificador()
    for(n of array){
      console.log(n)
    }
    console.log("\n")
    j++
  }
}

// USUARIO DECIDE QUANTOS CPS SERÃO GERADOS
qtdGerarCPF(5)

