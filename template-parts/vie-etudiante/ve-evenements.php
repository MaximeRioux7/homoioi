<?php 
    query_posts(array(
        'post_type'      => 'post',
        'cat'            => get_category_by_slug('evenements')->term_id,
        'posts_per_page' => 3
    ));
    if(have_posts()){
        $i = 0;
        while ( have_posts() ) : the_post();
            $i++;
            if($i == 1){
                echo "<span class='evenement-premier'>";
                    echo "<h1>";
                    the_title();
                    echo "</h1>";

                    echo "<p>";
                    the_content();
                    echo "</p>";
                echo "</span>";
                echo "<div class='autres-evenements'>";
            } else {
                echo "<span>";
                    echo "<h2>";
                    the_title();
                    echo "</h2>";

                    echo "<p>";
                    the_content();
                    echo "</p>";
                echo "</span>";
            }
        endwhile;
        echo "</div>";
    }
    wp_reset_query();
?>