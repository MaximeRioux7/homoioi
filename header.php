<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Homoioi
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <title>Accueil - TIM Collège de Maisonneuve</title>
	<link rel="stylesheet" href="css/style.css">
	<!-- <link rel=”stylesheet” href=”<?php echo get_template_directory_uri(); ?>/style.css” type=”text/css” media=”all” /> -->
    <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@400;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>