<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Homoioi
 */

get_header();
?>

	<main id="primary" class="site-main">
	<nav id="menu" title="Menu">
        <a href="#">
            <div></div>
            <div></div>
            <div></div>
        </a>
    </nav>
    <nav class="logo">
            <img src="media/logo.png" alt="Logo TIM" title="Techniques d'intégration multimédia - Collège de Maisonneuve">
    </nav>
    <nav class="choix">
        <p id="gauche"><a href="cheminement.html" title="Cheminement"><b>Cheminement</b></a></p>
        <p id="droite"><a href="info.html" title="Autres infos"><b>Autres infos</b></a></p>
    </nav>
		<?php
		// if ( have_posts() ) :

			// if ( is_home() && ! is_front_page() ) :
				// ?>
				<!-- <header> -->
					<!-- <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1> -->
				</header>
				<?php
			// endif;

			/* Start the Loop */
			// while ( have_posts() ) :
				// the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
		// 		get_template_part( 'template-parts/content', get_post_type() );

		// 	endwhile;

		// 	the_posts_navigation();

		// else :

		// 	get_template_part( 'template-parts/content', 'none' );

		// endif;
		// ?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
