
function genre(){
    var prenom = prompt("Quel est votre prénom?");
    switch(prenom){
        case 'Billy':
        case 'Bob':
        case 'Joe':
            alert("Vous êtes un garçon");
            break;
        case 'Solene':
        case 'Catherine':
        case 'Alexandra':
            alert("vous êtes une fille");
            break;
        default:
            alert("prénom invalide");
    }
}

function majeur(){
    var age = prompt("Quel âge avez vous?");
    age = +age; //conversion de type
    age>=18 ? alert("vous êtes majeur") : alert("vous êtes mineur");
}

genre();
majeur();