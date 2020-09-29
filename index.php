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

// get_header();
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
            <img src="wp-content/themes/homoioi1/images/logo.png" alt="Logo TIM" title="Techniques d'intégration multimédia - Collège de Maisonneuve">
    </nav>
    <nav class="choix">
        <p id="gauche"><a href="cheminement.html" title="Cheminement"><b>Cheminement</b></a></p>
        <p id="droite"><a href="info.html" title="Autres infos"><b>Autres infos</b></a></p>
    </nav>
<?php

// get_sidebar();
?>

<?php
// get_footer();
?>