(function(){
    // Liste des cours pour chaque session
    let listeProfs = [];
    
    let compteur = 0;

    // Éléments HTML importants
    let elmNomProf, elmImgProf, elmFlecheG, elmFlecheD;

    document.addEventListener("DOMContentLoaded", () => {
        elmImgProf = document.getElementsByClassName("imgProf");
        elmNomProf = document.getElementsByClassName("infoProf");
        elmFlecheG = document.getElementById("flecheG").children[0];
        elmFlecheD = document.getElementById("flecheD").children[0];
        if(elmNomProf && elmImgProf && elmFlecheG && elmFlecheD){
            recupererProfs();
            afficherListe(0);
            interactionFleches();
        }else console.error(`Impossible d'afficher la liste des cours,\nau moins un élément avec l'ID suivant est introuvable: "liste-cours", "titre-cours", "desc-cours".`);
    });

    function recupererProfs(){
        let requete = document.getElementById("requete-enseignants").children;

        for(let i = 0; i < requete.length; i++){
            listeProfs[i].push({
                nom: requete[i].children[0].innerHTML,
                urlImg: requete[i].children[1].innerHTML
            });
        }
        document.getElementById("requete-enseignants").remove();
    }

    function afficherProfs(){
        //si en mode mobile, affiche seulement un prof
        if(window.getComputedStyle(document.getElementsByClassName("prof2")[0], null).getPropertyValue("display") == "none") let nbElm = 1;
        else let nbElm = 2;

        for(let i = 0; i < nbElm; i++){
            elmNomProf[i].Children[0].innerHTML = listeCours[compteur].nom;
            elmImgProf[i].children[0].src = listeCours[compteur].urlImg;
            compteur++;
        }
    }
    
    function interactionFleches(){
        for(let i = 0; i < elmSessions.children.length; i++){
            elmSessions.children[i].addEventListener("click", () => {
                afficherProfs(i+1);
            });
        }
        elmFlecheG.addEventListener("click", () => {
            compteur
        });
    }
})();