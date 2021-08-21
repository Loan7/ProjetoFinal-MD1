function primeiraEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 2){

            location.replace("zoro-stage2.html");
            break;

    }else if(questao == 1){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Assim que você tenta abrir a porta, os 3 zumbis que estavam a espreita dentro da cabana abrem a porta e te atacam, você até consegue rebater 1 dos ataque no reflexo mas não consegue deter os outros 2 ataques que são fatais...<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
            break;

    }else{

            alert("Escolha apenas as opções 1 ou 2");
            primeiraEscolha()
            break;

    }
    }
}

function segundaEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 2){

            location.replace("zoro-stage3.html");
            break;

    }else if(questao == 1){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Voce opta por seguir o cheiro do alcool que acaba dando em uma armadilha inimiga, tendo como objetivo de te confundir na escolha do seu caminho escolhido, resultando em<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
            break;

    }else{

            alert("Escolha apenas as opções 1 ou 2");
            primeiraEscolha()
            break;

    }
    }
}

function terceiraEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 2){

            location.replace("zoro-stageWin.html");
            break;

    }else if(questao == 1){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>O seu ataque é tão poderoso que acaba acertando os carpiteiros além dos zumbis. resultando em<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
            break;

    }else{

            alert("Escolha apenas as opções 1 ou 2");
            primeiraEscolha()
            break;

    }
    }
}
