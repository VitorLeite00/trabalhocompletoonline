
import express from "express";

const host = "0.0.0.0";
const porta = 3000; 

const app = express(); 

function paginaInicial(requisicao, resposta) {
    resposta.send(`<h1>Seja bem vindo!</h1> 
                   <br/> 
                   <h2>Primeiros passos para desenvolvimento de aplicação web com Node/JS</h2>
                   <h3>Página inicial</h3>
        `);
}
app.get("/", paginaInicial);

function mostrarSobre(requisicao, resposta) {
    resposta.write(`<html>`)
    resposta.write(`<head>
                        <meta charset="UTF-8">
                        <title>Sobre</title>
                    </head>
                    <body>`);
    resposta.write(`<h1>Sobre nós</h1> `);
    resposta.write(`<p>Somos um equipe de desenvolvimento iniciante.</p>`);
    resposta.write(`<p>Estamos aprendendo a programar em JavaScript para oferecer aos nossos clientes as melhores soluções em aplicações para a Internet.</p>`);
    resposta.write(`<p>Envie uma doação para o nosso e-mail: 3t6fY@example.com</p>`);
    resposta.write(`<p>Adote um programador.</p>`);
    resposta.write(`</body>`)
    resposta.write(`</html>`)
    resposta.end();
}

app.get("/sobre", mostrarSobre); 

function depositar(requisicao, resposta){
    const valor = requisicao.query.valor;
    if (valor) {
        resposta.write(`<html>
                        <head>
                           <meta charset="UTF-8">
                           <title>Depósito realizado!</title>
                        </head>
                        <body>
                            <h1>Depósito realizado!</h1> 
                            <h1>Valor Depositado: R$ ${valor}</h1> 
                            <h1>Obrigado!</h1>
                        </body>
                        </html>`);
        resposta.end();
    }
    else{
        resposta.write("<html>");
        resposta.write("<head>");
        resposta.write("<meta charset='UTF-8'>");
        resposta.write("</head>");
        resposta.write("<body>");
        resposta.write("<h1>É necessário informar o valor a ser depositado!<h1>");
        resposta.write("Exemplo: http://localhost:3000/depositar?valor=10");
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    }
}

app.get("/depositar", depositar);


function contar(requisicao, resposta){
    const inicio = parseInt(requisicao.query.inicio);
    const fim = parseInt(requisicao.query.fim);

    if (inicio > 0 && fim > 0 && inicio < fim){
        resposta.write("<p>Contando...</p>");
        resposta.write("<ul>");
        for (let i = inicio; i <= fim; i++){
            resposta.write(`<li>${i}</li>`);
        }
        resposta.write("</ul>");
        resposta.end();
    }
    else{
        resposta.write("<p>Informe corretamente o inicio e o fim.</p>");
        resposta.write("<p>Exemplo: http://localhost:3000/contar?inicio=1&fim=10</p>");
    }


}

function multiplicar(requisicao, resposta){
        const sequencial = parseInt(requisicao.query.sequencial);
        const final = parseInt(requisicao.query.final);
    
            if (sequencial > 0 && final > 0 && sequencial < final){
                resposta.write("<p>Multiplicando...</p>");
                resposta.write("<ul>");
                    for (let i = 1; i <= final; i++){
                const resultado = sequencial*i;
                resposta.write(`<li>${sequencial} x ${i} = ${resultado}</li>`);
                }
                resposta.write("</ul>");
                resposta.end();
            }
            else{ 
                resposta.write("<ul>");
                for (let i = 1; i <= 10; i++){
                    const resultado = 1*i;
                    resposta.write(`<li> 1 x ${i} = ${resultado}</li>`);
                }
                resposta.write("</ul>");
                resposta.end();
    
        }
    }

app.get("/multiplicar", multiplicar);

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});



