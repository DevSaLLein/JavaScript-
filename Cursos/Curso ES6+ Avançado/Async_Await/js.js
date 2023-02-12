// function ajaxTitulo(url){
//     fetch(url)
//         .then(data => data.json())
//         .then(data =>  console.log(data))
//     ;  
// }

// ajaxTitulo("https://api.github.com/users/diego3g");




async function getPost(url){

    //Await: o JS vai esperar que o resultado do fetch seja feito para depois jogar o resultado na const reponse;
    const response = await fetch(url);
    const data =  await response.json();

}

//Explicações:
/*
    -> Async/Await funciona obrigatoriamente no protocolo de Promises;
    -> Async é uma palavra chave usada no início de uma função;
    -> Await é usado para avisar a função paa esperar o resultado da Promise;
    -> Await só pode ser usado para uma função com Async;
    -> Async/Await já está funcionando em quase todos os Browsers e NodeJS;
*/

//Vantagens:
/*
    -> O código fica mais simplificado;
    -> Mais fácil debugar por ter menos callbacks;
    -> A conversão de uma promise para async/await é bem simples;
    -> O código fica com menos encadeamentos;
*/
