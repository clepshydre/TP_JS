/*

Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/

const MISTERY_NUMBER_MAX = 1000;
const MISTERY_NUMBER_MIN = 1;
const LOWER_MESSAGE = "C'est moins cher";
const HIGHER_MESSAGE = "C'est plus cher";
const WIN_MESSAGE = "C'est le juste prix! \n Vous avez trouvé en ";
const INVALID_RESPONSE_MESSAGE = "La réponse n'est pas valide. \n Elle doit être comprise entre 1 et 1000";
const NEW_GAME_TEXT_BUTTON = "Démarrer le jeu";
const SEND_RESPONSE_TEXT_BUTTON = "Envoyer la réponse";
const CHANGE_TEXT_BUTTON_COUNT = 1;
const SINGULAR_VICTORY_MESSAGE = 1;

var buttonDOM = document.querySelector(".button");
var responseDOM = document.querySelector("#response");
var messageDOM = document.querySelector("#message");

var count = 0;
var responseValue;
var misteryNumber = Math.floor(Math.random()*MISTERY_NUMBER_MAX);

buttonDOM.addEventListener("click", function(){
    responseValue = getResponse();
    if(verifyValidityResponse(responseValue)){
        increaseCount();
        if(count == CHANGE_TEXT_BUTTON_COUNT){
            changeTextButton(SEND_RESPONSE_TEXT_BUTTON);
        }
        verifyResponse();
    }else{
        sendMessage(INVALID_RESPONSE_MESSAGE);
    }
});

function verifyValidityResponse(response){
    if(isNaN(response) || response > MISTERY_NUMBER_MAX || response < MISTERY_NUMBER_MIN){
        return false;
    }else{
        return true;
    }
}

function getResponse(){
    return responseDOM.value;
}

function increaseCount(){
    count++;
}
function changeTextButton(text){
    buttonDOM.textContent = text;   
}
function verifyResponse(){
    if(misteryNumber < responseValue){
        sendMessage(LOWER_MESSAGE);
    }else if(misteryNumber > responseValue){
        sendMessage(HIGHER_MESSAGE);
    }else{
        sendMessage(buildVictoryMessage());
        changeTextButton(NEW_GAME_TEXT_BUTTON);
    }
}

function sendMessage(message){
    messageDOM.firstChild.nodeValue = message;
}

function buildVictoryMessage(){
    let victoryMessage = WIN_MESSAGE + count.toString()+ " coup"
    if(count > SINGULAR_VICTORY_MESSAGE){
        victoryMessage +="s";
    }
    return victoryMessage;
}