<?php 
    query_posts(array(
        'post_type'      => 'post',
        'cat'            => get_category_by_slug('evenements')->term_id,
        'posts_per_page' => 3
    ));
    if(have_posts()){
        $i = 0;

        echo "<h1>Événements</h1>";
        while ( have_posts() ) : the_post();
            $i++;
            if($i == 1){
                echo "<div class='evenement-premier'>";
                    echo "<span class='parent-image' style='background-image:url(\"".get_the_post_thumbnail_url(get_the_ID())."\");'>";
                        echo "<h1>";
                        the_title();
                        echo "</h1>";
                    echo "</span>";
                echo "</div>";
                echo "<div class='autres-evenements'>";
            } else {
                echo "<div>";
                    echo "<h2>";
                        the_title();
                    echo "</h2>";
                echo "</div>";
            }
        endwhile;
        echo "</div>";
    }
    wp_reset_query();
?>