function primeiraEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 1){

            location.replace("sanji-stage1d2.html");
            break;

    }else if(questao == 2){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você está tão focado na sua lista de afazeres que decide apenas ignorar as ofenças de Zoro que logo diz: ' O que aconteceu com você ? não rebateu a minha ofença ? está doente ?'<a class = 'recomeçar'  href = 'sanji-stage2.html'><button class = 'responderbotao'>Avançar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
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
    if(questao == 1){

            location.replace("sanji-stage3.html");
            break;

    }else if(questao == 2){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você ignora o grito de socorro e volta a se concentrar na busca de mantimentos. Você não foi capaz de ajudar a vitima. Resultando em<br><br><span class = 'gameover'>GAME OVER!</span>.<a class = 'recomeçar'  href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
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

            location.replace("sanji-stageWin.html");
            break;

    }else if(questao == 1){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Triste com a escolha do player que o controla, no caso VOCÊ mesmo, cabisbaixo ele aplica uma bicuda no Homem peixe parecendo o Neymar na copa do mundo isolando a bola, no caso do Sanji o Homem peixe kkk. anji não conseguiu criar o seu prato principal. Resultando em<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
            break;

    }else{

            alert("Escolha apenas as opções 1 ou 2");
            primeiraEscolha()
            break;

    }
    }
}