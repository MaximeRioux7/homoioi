<?php 
    // Requête Wordpress
    query_posts(array(
        'post_type'      => 'post',                                     // S'assurer de ne prendre que les articles ("post")
        'cat'            => get_category_by_slug('evenement')->term_id, // Prendre les articles dont la catégorie a le slug "evenement"
        'posts_per_page' => 3                                           // Maximum de posts qu'on veut afficher dans la page
    ));

    // Que faire avec la requête?
    if(have_posts()){                           // N'afficher la section que si des articles sont trouvés
        $i = 0;

        echo "<h1>PROJETS</h1>";                // Titre de la section
        echo "<div class='container img-parent'>";         // <div> avec le contenu de la section
        while ( have_posts() ) : the_post();    // Boucle s'effectuant pour chaque article
            $i++;                               // Incrémenter le compteur ?>                               
            <!-- Intégrer le HTML ici -->
            <?php echo $i; ?>
        <?php endwhile;
        echo "</div>";                          // Fin de la section
    }
    wp_reset_query();                           // Vider le cache de la requête Wordpress
?>