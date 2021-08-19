function primeiraEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 1){
            location.replace("luffy-stage2.html");
            break;

        }else if(questao == 2){
            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você desce as escadas mas não tem nada ali além da água do mar. Luffy embora seja um pirata forte devido ao seu poder ele acaba tendo a água salgada do mar como o seu ponto fraco numero 1. A água do mar absorve o poder de luffy  que o deixa incapacitado de se mover e afunda morrendo afogado. Game Over.</div>"
            break;
        }
    }
}

function segundaEscolha(){
    
}