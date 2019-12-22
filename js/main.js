

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwicxaSv16fiAhViDrkGHbXYBQQQPAgH");//abre link em outra janela
    window.location.href = "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwicxaSv16fiAhViDrkGHbXYBQQQPAgH"; //abre link 
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value); //value pega o valor que tem o elemento
}


/*
function soma (n1, n2){
    return n1 + n2;
}
*/

/*
alert(soma(5, 10));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/



/*
var d = new Date();
//alert(d.getMonth()+1); //getMonth() retorna o mês começando do zero, por isso o +1
//alert(d.getMinutes()); // getMinutes retorna os minutos
//alert(d.getHours()); // retorna a hora
alert(d.getDay()); //retorna o dia
*/

/*
var count;
for (count=0; count <=5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <- 5){
    console.log(count);
    count = count ++;
}
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; //como se fosse um objeto json
console.log(frutas);
alert(frutas[1].nome); //mostra o que está em nome
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}; //como se fosse um objeto json
console.log(fruta);
console.log(fruta.nome); //mostra o que está em nome
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); //adiciona "uva" no final do array
//lista.pop(); //retira o último elemento do array
//console.log(lista);
//console.log(lista.length); // tamanho do array
//console.log(lista.reverse()); //inverte a ordem do array
//console.log(lista.toString()); //retorna o array em string
//console.log(lista.join(" - ")); //retorna o array em string separado pelo caracter que está no parâmetro
//alert(lista[1]);

//var nome = "Eduardo Gomes";
//var idade = 32;
//var idade2 = 10;
//var frase ="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
