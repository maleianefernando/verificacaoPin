"use strict"

let pin_padrao = 12345+'';

let pin_entrada = 0;

do{

    pin_entrada = prompt("Introduza o seu pin:");

}while(verifica_pin(pin_entrada) == false);



function verifica_pin (pin) {
		
    if (pin == pin_padrao){
        document.write(parabens() + "<br>O pin introduzido está correto, sem mais nem menos!");
        alert(parabens() + "\nO pin está correto!");

        return true;
    }

    else if (pin != pin_padrao) {
    
        pin += '';
        
        if(pin != pin_padrao && pin.length == pin_padrao.length){
            alert('O pin está errado');
        }

        else if(pin.length == pin_padrao.length+1){
            alert('O seu pin contém um dígito a mais, tente novamente!');
        }

        else if (pin.length == pin_padrao.length -1){
            alert('O seu pin contém um dígito em falta, tente novamente!');
        }

        else if(pin.length > pin_padrao.length+1 && pin.length <= pin_padrao.length+3){
            alert('O seu pin contém alguns dígitos a mais, tente novamente!');
        }

        else if(pin.length < pin_padrao.length-1){
            alert('O seu pin contém alguns dígitos em falta, tente novamente!');
        }

        else if(pin.length > pin_padrao.length+3){
            alert('O seu pin contém varios dígitos a mais, tente novamente!');
        }

        else if(pin.length >= pin_padrao.length+6){
            alert('O seu pin contém o dobro dos dígitos ou mais, tente novamente!');
        }

        return false;
    }
}

function parabens () {
    return "Parabéns!!";
}
