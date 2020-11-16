(function(){
    document.addEventListener("DOMContentLoaded", function(){
        // Sélecteur CSS pour récupérer l'élément HTML
        let selecteur = ".logo-site";// insert logo class or id here
        // "Multiplicateur" pour le déplacement de l'élément
        let facteur1 = 0.04;
        let facteur2 = 0.04;
        let diffX, diffY, transform;
        let elements = document.querySelectorAll(selecteur);
        function offsetObjects(mouseEvent){
            for(let i = 0; i < elements.length; i++){
                diffX = window.innerWidth/2 - mouseEvent.pageX;
                diffY = window.innerHeight/2 - mouseEvent.pageY;
                transform = `
                    translateX(calc(${diffX * facteur1}px - 50%)) 
                    translateY(calc(${diffY * facteur2}px - 50%)) 
                    rotate(30deg)
                `;
                
                elements[i].style.transform = transform;
                elements[i].style.msTransform = transform;
                elements[i].style.webkitTransform = transform;
            }
        }
        if(elements) document.addEventListener("mousemove", offsetObjects);
        else console.warn(`Aucun élément répondant au sélecteur ${selecteur} n'a été trouvé.`);
    }, false);
})();