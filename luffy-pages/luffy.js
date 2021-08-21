function primeiraEscolha(){
    while(questao !== 1 ||questao !== 2){

    var questao = prompt("Escolha uma das opções");
    if(questao == 1){

            location.replace("luffy-stage2.html");
            break;

    }else if(questao == 2){

            document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você desce as escadas mas não tem nada ali além da água do mar. Luffy embora seja um pirata forte devido ao seu poder ele acaba tendo a água salgada do mar como o seu ponto fraco numero 1. A água do mar absorve o poder de luffy  que o deixa incapacitado de se mover e afunda morrendo afogado.<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
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
            
                location.replace("luffy-stage3.html");
                break;
            
        }else if(questao == 1){
            
                document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você quebra a caixa mas se depara com uma criança ali dentro e acaba ferindo uma pessoa inocente por engano, resultando em<br><br><span class = 'gameover'>GAME OVER!</span>.<a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
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
        if(questao == 1){
            
                location.replace("luffy-stage4.html");
                break;
            
        }else if(questao == 2){
            
                document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Você diz que não é do seu interesse ajudar aquelas pessoas naquele momento, resultando na ruína daquela vila.<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
                break;
            
        }else{
            
                alert("Escolha apenas as opções 1 ou 2");
                primeiraEscolha()
                break;
            
        }
        }
}

function quartaEscolha(){
        while(questao !== 1 ||questao !== 2){

        var questao = prompt("Escolha uma das opções");
        if(questao == 1){
            
                location.replace("luffy.stage5.html");
                break;
            
        }else if(questao == 2){
            
                document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Uma pessoa com um QI de temperatura ambiente normalmente escolheria essa opção, mas não é o caso do ingênuo Luffy  que automaticamente sai correndo em direção ao portão.<a class = 'recomeçar' href = 'luffy.stage5.html'><button class = 'responderbotao'>Avançar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
                break;
            
        }else{
            
                alert("Escolha apenas as opções 1 ou 2");
                primeiraEscolha()
                break;
            
        }
        }
}

function quintaEscolha(){
        while(questao !== 1 ||questao !== 2){

        var questao = prompt("Escolha uma das opções");
        if(questao == 2){
            
                location.replace("luffy-stageWin.html");
                break;
            
        }else if(questao == 1){
            
                document.getElementsByClassName("Caixabody")[0].innerHTML = "<div class ='escolhaglobal'>Gecko Moria, furioso não deixa você libertar o povo assim tão tranquilamente, em um ato covarde ele ataca você e todos os aldões ao mesmo tempo. você não é capaz de salvar todo mundo daquele ataque e a grande maioria dos aldeões morre e vc falha em salvar os aldões  resultando em<br><br><span class = 'gameover'>GAME OVER!</span><a class = 'recomeçar' href = '../index.html'><button class = 'responderbotao'>Recomeçar</button></a></div><footer><p class='SelectChamp'>&copy; Copyright2021 Todos os direitos reservados a Luan Oliveira.</p></footer>"
                break;
            
        }else{
            
                alert("Escolha apenas as opções 1 ou 2");
                primeiraEscolha()
                break;
            
        }
        }
}

