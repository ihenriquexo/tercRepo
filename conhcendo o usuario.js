var nome=prompt("seu nome")
var idade=prompt("sua idade")
var peso=prompt("seu peso")
var altura=prompt("sua altura")
var profissão=prompt("sua profissão")
//a partir disso você deve exibir um texto com todas essas informações pra ele. 
//Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg 
//profissão: Programador altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, 
//tem 1.83M de altura e pesa 74kg.
console.log("Olá "+nome+", você tem "+idade+" anos, é "+profissão+", tem "+altura+" de altura e pesa: "+peso+".")

//Verifique se o usuário é maior ou menor de idade,
//se ele for maior exiba na tela “Está liberado para tomar umas geladas”,
//se ele for menos exiba “Sem gelada para você”

if (idade>17) {
    console.log("Está liberado para tomar umas geladas")
} else {
  console.log("Sem gelada para você")  
}

//Utilize a idade informada pelo usuário, e nos mostre sua idade em meses, semanas e dias.
//Considerar ano com 365 dias, mês com 30 dias e semana com 7 dias.

var meses=idade*12
var semanas=meses*4
var dias=semanas*7
var nasc=2023-idade
console.log("sua idade em meses:"+meses+" em semanas:"+semanas+" em dias:"+dias+" e nasceu em "+nasc)

//4 - Calcule o IMC do seu usuário e informe a faixa dele, segue detalhes do cálculo do IMC e suas faixas.


//*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)
//O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. 
//Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:

var imc=peso/(altura*altura);console.log (imc)

var resultado=""
if (imc < 18) {
    resultado = "Abaixo do peso (Magreza)";
} else if (imc >= 18 && imc < 25) {
    resultado = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    resultado = "Acima do peso (Sobrepeso)";
} else {
    resultado = "Obesidade";
}

          
      //- Magreza, quando o resultado é menor que 18,5 kg/m2;

      //- Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   

      //- Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;

      //- Obesidade, quando o resultado é maior que 30 kg/m2.
//ihx>.
