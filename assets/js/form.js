const button = document.querySelector("#submit-btn");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");


button.addEventListener("click", () => {
    if(nome != "" && email != "" && assunto != assunto && mensagem != "") {
        alert("Obrigado pelo Contato, retornarei em breve por e-mail!");
    }
    
})
