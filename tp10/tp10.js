/* 
- Créez le fichier HTML (attention à la sémantique des balises)
- Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
satisfy)

- Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
algorithme, cela vous donneras une idée de vos besoins.
- Allez chercher tout les éléments à modifier dans le DOM et stockez les également.
- Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
(une dizaine)
- Créez un évènement sur le clique du bouton « nouvelle citation ».
- Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
tableau
- Créez une fonction permettant d’actualise la citation et l’auteur.
- Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
fois de suite.
- Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
fonctions mathématiques, elles pourront vous être utiles.
- Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
votre tableau.
J’en dis pas plus sinon c’est pas drôle, je vous donne la correction sur un zip et non
dans le cours, comme ça vous avez tout.
*/
var citationDOM = document.querySelector("#citation");
var authorDOM = document.querySelector("#author");
var buttonDOM = document.querySelector(".button");

var actualRandom = 0;
var random;

var citations = ["Allumez un feu pour quelqu'un et il sera au chaud pour le reste de la journée. Mettez à feu un homme et il sera au chaud pour le restant de sa vie." ,
"Le premier homme qui est mort a dû être drôlement surpris.",
"Ça m'en touche une sans faire bouger l'autre",
"Il était normand pas sa mère et breton par un ami de son père.",
"Une dictature c’est quand les gens sont communistes, déjà. Ils ont froid, des chapeaux gris et des chaussures à fermeture éclair."]
var authors =["Terry Pratchett","Georges Wolinski","Jacques Chirac","Alphonse Allais","Hubert Bonisseur de La Bath"] 

buttonDOM.addEventListener("click",function(e){
    newCitation();
});

function newCitation(){
    random = findANewRandomCitation();
    actualRandom = random;
    actualiseCitation();
    actualiseAuthor();
}

function findANewRandomCitation(){
    do{
        var newRandom = Math.floor(Math.random() * citations.length);
    }while(newRandom == actualRandom);
    return newRandom;
}

function actualiseCitation(){
    citationDOM.firstChild.nodeValue = citations[random];
}

function actualiseAuthor(){
    authorDOM.firstChild.nodeValue = authors[random];
}