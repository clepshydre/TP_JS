function demanderPrenom(){
    do{
        var prenom = prompt("Quel est le bon prénom?");
    }while(prenom != "clément");
}
function confirmPrenom(){

    do{
        var arret = confirm("Voulez vous arrêter?");
    }while(!arret);
}
confirmPrenom();
demanderPrenom();