function calculatrice(){
    try{
        do{
            do{
                var correct = false;
                var calcul = prompt("Quel addition calcul souhaitez vous effectuer? addition - soustraction – multiplication – division");
                if(calcul == 'addition' || calcul == 'soustraction' || calcul == 'multiplication'|| calcul == 'division'){
                    correct = true;
                }
            }while(!correct);
            do{
                correct = false;
                var nombre1 = prompt("Choissisez un premier nombre");
                nombre1 = parseInt(nombre1);
                var nombre2 = prompt("Choissisez un deuxième nombre");
                nombre2 = parseInt(nombre2);
                var result;
                if(!isNaN(nombre1) || !isNaN(nombre2)){
                    correct = true;
                }
            }while(!correct);
            
            switch(calcul){
                case 'addition':
                    result = addition(nombre1,nombre2);
                    alert("Le resultat de l'addition est: "+ result);
                    break;
                case 'soustraction':
                    result = soustraction(nombre1,nombre2);
                    alert("Le resultat de la soustraction est: "+ result);
                    break;
                case 'multiplication':
                    result = multiplication(nombre1,nombre2);
                    alert("Le resultat de la multiplication est: "+ result);
                case "division":
                    if(nombre2 == 0){
                        alert("Il n'est pas possible de diviser par 0")
                    }else{
                        result = division(nombre1,nombre2);
                        alert("Le resultat de la division est: "+ result);
                    }
                    break;
                default:
                    throw new Error("Une erreur s'est produite");
            }
            var recommencer = confirm("Voulez vous recommencer?");
        }while(recommencer);
    }catch(e){
        console.error(e);
    }
}

function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}

function soustraction(nombre1, nombre2){
    return nombre1 - nombre2;
}

function multiplication(nombre1, nombre2){
    return nombre1 * nombre2;
}

function division(nombre1, nombre2){
    return nombre1 / nombre2;
}

calculatrice();