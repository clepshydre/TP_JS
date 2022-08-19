function bouleDeFeu(){
    try{
        var sort = prompt("Quel sort voulez vous lancer?(boule de feu, trait de glace ou chaîne d'éclair");

        switch(sort){
            case 'boule de feu':
                alert("Vous avez choisi boule de feu, vous infligez 40 dégats");
                break;
            case 'trait de glace':
                alert("Vous avez choisi trait de glace, vous infligez 35 dégats");
                break;
            case "chaîne d'éclair":
                alert("Vous avez choisi chaîne d'éclair, vous infligez 25 dégats");
                break;
            default:
                throw new Error("Le sort que vous avez choisi n'est pas valide");
        }
    }catch(e){
        console.error(e);
    }
    

}