<?php

class Projectify {

	public function __construct( $editor ) {
		$editor->initialize();
	}

	public function initialize() {

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

	}

	public function enqueue_styles() {

		$screen = get_current_screen();
		if ( 'post' != $screen->id ) {
			return;
		}

		wp_enqueue_style(
			'projectify-admin',
			plugins_url( 'projectify/assets/css/admin.css' ),
			array(),
			'1.0.0'
		);

	}

	public function enqueue_scripts() {      
		         
		wp_enqueue_script(
			'projectify-admin',
			plugins_url( 'projectify/assets/js/admin.js' ),
			array( 'jquery' ),
			'1.0.0'
		);

	}


}