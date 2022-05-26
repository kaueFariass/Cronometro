window.onload = function(){
    let Segundos = 00;
    let Dezenas = 00;
    let AcrecentarDezenas = document.getElementById("dezenas");
    let AcrecentarSegundos = document.getElementById("segundos");
    let comecar = document.getElementById("comecar");
    let parar = documet.getElementById("parar");
    let reset = document.getElementById("resetar");
    let intervalo;

    comecar.onclick = function(){

        clearInterval(intervalo);
        intervalo = setInterval(ComecarTimer,10);
    }
    parar.onclick = function(){
        clearInterval(intervalo);
    }
    reset.onclick = function(){
        clearInterval(intervalo);
        Dezenas = "00";
        Segundos = "00";
        AcrecentarDezenas.innerHTML = Dezenas;
        AcrecentarSegundos.innerHTML = Segundos;
    }

    function ComecarTimer(){
        Dezenas++;

        if(Dezenas <= 9){
            AcrecentarDezenas.innerHTML = "0" + Dezenas;
        }

        if(Dezenas > 9){
            AcrecentarDezenas.innerHTML = Dezenas;
        }

        if(Dezenas > 99){
            Segundos++;
            AcrecentarSegundos.innerHTML = "0" + Segundos;
            Dezenas = 0;
            AcrecentarDezenas.innerHTML = "0" + 0;
        }

        if(Segundos > 9){
            AcrecentarSegundos.innerHTML + Segundos;
        }
    }
}