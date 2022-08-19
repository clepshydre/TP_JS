
function imc(poids, taille){
    return poids/(taille*taille);
}

function demanderInfo(){

    var poids = prompt("Quel est votre poids(en kg)?");
    var taille = prompt("Quel est votre taille en cm?");
    var tailleEnMetre = taille/100;
    var calcul = imc(poids, tailleEnMetre);
    calcul = calcul.toFixed(1);
    alert(calcul);
}

demanderInfo();