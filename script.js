// Pergunta o valor e converte de string para numeral
var valorEmDolar = window.prompt("Qual o valor em dólar que você quer converter?");
parseFloat(valorEmDolar);

//Pega o valor em numeral e faz a conversão
var valorEmReal = valorEmDolar * 5.72;
var valorEmRealFixado = valorEmReal.toFixed(2);

window.alert("O valor em real é R$" + valorEmRealFixado);
