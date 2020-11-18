(function(){
    // Liste des cours pour chaque session
    let listeProfs = [];
    
    let compteur = 0;

    // Éléments HTML importants
    let elmNomProf, elmImgProf, elmFlecheG, elmFlecheD;

    document.addEventListener("DOMContentLoaded", () => {
        console.log(`is this working`);
        elmImgProf = document.getElementsByClassName("imgProf");
        elmNomProf = document.getElementsByClassName("infoProf");
        elmFlecheG = document.getElementById("flecheG").children[0];
        elmFlecheD = document.getElementById("flecheD").children[0];
        if(elmNomProf && elmImgProf && elmFlecheG && elmFlecheD){
            recupererProfs();
            afficherProfs();
            interactionFleches();
        }else console.error(`Impossible d'afficher la liste des enseignants`);
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
        /*if(window.getComputedStyle(document.getElementsByClassName("prof2")[0], null).getPropertyValue("display") == "none") let nbElm = 1;
        else let nbElm = 2;*/

        for(let i = 0; i < 2; i++){
            if(compteur > listeProfs.length)compteur=0;
            else if(compteur < 0)compteur = listeProfs.length - 1;
            elmNomProf[i].Children[0].innerHTML = listeCours[compteur].nom;
            elmImgProf[i].children[0].src = listeCours[compteur].urlImg;
            compteur++;
        }
    }
    
    function interactionFleches(){
        elmFlecheG.addEventListener("click", () => {
            compteur+=2;
            afficherProfs();
        });
        elmFlecheG.addEventListener("click", () => {
            compteur-=3;
            afficherProfs();
        });
    }
})();