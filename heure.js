function partieJournee(heure){
    if(heure>0 && heure<12){
        alert("c'est le matin");
    }else if(heure>=12 && heure<=18){
        alert("c'est l'après-midi");
    }else if(heure>18 && heure <= 24){
        alert("c'est le soir");
    }else{
        alert('erreur');
    }
}