
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   // console.log(documentdocument.getElementById("agradecimento"));
   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
   // window.location.href = "https://globallabs.academy/"; abri mesma pagina

}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar mouse</b>";
   elemento.innerHTML = "Obrigado por passar mouse";
   // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
     alert("pagina carregada");

}

function funcaoChange(elemento){
      console.log(elemento.value);

}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;

};
*/

/*
var idade = prompt("Qual a idade:");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/* Dicionario
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/ 


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("  "));

//var nome = "Rafael Galleani";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
