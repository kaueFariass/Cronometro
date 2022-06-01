function attTempo(){
    var display = document.querySelector('.display');

    var now = new Date();
    
    var time = corrigirHorario(now.getHours()) + ':' + corrigirHorario(now.getMinutes()) + ':' + corrigirHorario(now.getSeconds());
    
    display.textContent = time;
}

function corrigirHorario(num){
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

attTempo();
setInterval(attTempo, 1000);