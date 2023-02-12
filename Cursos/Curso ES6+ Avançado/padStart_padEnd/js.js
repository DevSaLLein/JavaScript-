//String.prototype.padStart/padEnd;


//Preenche no inicio do texto, o número de caracteres total
//serão dez, preenche com o  que está no console("abc"), e caso sobre
//espaço, será preenchido com o "Hi"


//PadStart/End(TamanhoDesejado, TextoParaAdicionar)
console.log('abc'.padStart(10, 'Hi')); // HiHiHiHabc
console.log('abc'.padEnd(10, 'Hi')); // abcHiHiHiH
