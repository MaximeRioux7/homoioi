<h1 class="vtTitre">ENSEIGNANTS</h1>
		
<div class="divProf prof1">
    <div class="imgProf"><img src="" alt="" ></div>
    
    <div class="infoProf">
        <h3></h3>
    </div>
</div>
<div class="divProf prof2">
    <div class="imgProf"><img src="" alt="" ></div>
    <div class="infoProf">
        <h3></h3>
    </div>
</div>
<div id="flecheG"><img src="<?php echo get_template_directory_uri(); ?>/images/fleche.png" alt="fleche" ></div>
<div id="flecheD"><img src="<?php echo get_template_directory_uri(); ?>/images/fleche.png" alt="fleche" ></div>

<div id="requete-enseignants">
    <?php
        $args = array(
            'post_type'      => 'post',
            'cat'            => get_category_by_slug('enseignants')->term_id,
            'posts_per_page' => -1
        );
        query_posts($args);
        while ( have_posts() ) : the_post();
            echo '<span>';

            // Titre du cours 
            echo '<span class="enseignants-nom">';
            the_title();
            echo '</span>';

            // image du prof 
            echo '<span class="enseignants-srcImg">';
            the_content();
            echo '</span>';

            echo '</span>';
        endwhile;
        wp_reset_query();
    ?>
</div>