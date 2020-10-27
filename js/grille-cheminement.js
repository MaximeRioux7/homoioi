(function(){
    // Liste des cours pour chaque session
    let listeCours = [[],[],[],[],[],[]];
    
    let tmpElm;		// Élément HTML temporaire pour la création de la liste de cours
    let tmpSession;	// Variables temporaires pour séparer les cours en sessions

    // Éléments HTML importants
    let elmListeCours, elmTitreCours, elmDescCours, elmSessions;

    document.addEventListener("DOMContentLoaded", () => {
        elmListeCours = document.getElementById("liste-cours");
        elmTitreCours = document.getElementById("titre-cours");
        elmDescCours = document.getElementById("desc-cours");
        elmSessions = document.getElementById("choix-session");
        if(elmListeCours && elmTitreCours && elmDescCours){
            recupererCours();
            afficherListe(1);
            interactionSessions();
        }else console.error(`Impossible d'afficher la liste des cours,\nau moins un élément avec l'ID suivant est introuvable: "liste-cours", "titre-cours", "desc-cours".`);
    });

    // Récupère la liste des cours venant de la requête Wordpress
    function recupererCours(){
        let requete = document.getElementById("requete-cours").children;

        for(let i = 0; i < requete.length; i++){
            tmpSession = parseInt(requete[i].children[0].innerHTML.charAt(4));
            if(tmpSession && tmpSession != NaN){
                listeCours[tmpSession-1].push({
                    titre: requete[i].children[0].innerHTML,
                    description: requete[i].children[1].innerHTML
                });
            } else console.warn(`Le titre d'un cours ne commence pas par le code du cours contenant le numéro de session.`);
        }
        document.getElementById("requete-cours").remove();
    }

    function afficherListe(session = 1){
        elmListeCours.innerHTML = "";
        for(let i = 0; i < listeCours[session-1].length; i++){
            // Créer un nouvel élément de la liste
            tmpElm = document.createElement("li");
            tmpElm.innerHTML = `<li>${listeCours[session-1][i].titre.substring(7)}</li>`;

            // Ajouter l'interaction à la liste
            tmpElm.addEventListener("click", () => {
                elmTitreCours.innerHTML = listeCours[session-1][i].titre;
                elmDescCours.innerHTML = listeCours[session-1][i].description;
            });

            // Ajouter l'élément de la liste à la page
            elmListeCours.appendChild(tmpElm);
        }
    }

    function interactionSessions(){
        for(let i = 0; i < elmSessions.children.length; i++){
            elmSessions.children[i].addEventListener("click", () => {
                afficherListe(i+1);
            });
        }
    }
})();