<?php

class Projectify_Editor {

	public function initialize() {
       
        //intialize array 
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
		// save post
		add_action( 'save_post', array( $this, 'save_post_notice' ) );
	}

	public function add_meta_box() {

		add_meta_box(
			'projectify-post',
			'Projectify Information',
			array( $this, 'projectify_display' ),
			'post',
			'normal',
			'high'
		);
		
	}

	public function projectify_display() {
		require_once(
			plugin_dir_path( __FILE__ ) . 'views/projectify-post-editor.php'
		);
	}

	public function save_post_notice( $post_id ) {

		if ( ! $this->user_can_save( $post_id ) ) {
			return;
		}

		$difficulty = $_POST[ 'difficulty' ];
		$time = $_POST[ 'time' ];
		$cost = $_POST[ 'cost' ];

		// Sanitize User Input
		$difficulty = stripslashes( strip_tags( $difficulty ));
		$time = stripslashes( strip_tags( $time ));
		$cost = stripslashes( strip_tags( $cost ));

		update_post_meta( $post_id, 'difficulty', $difficulty );
		update_post_meta( $post_id, 'time', $time );
		update_post_meta( $post_id, 'cost', $cost );

	}

	public function user_can_save( $post_id ) {

		$is_valid_nonce =
			( isset( $_POST['difficulty'] ) ) &&
			wp_verify_nonce(
				$_POST[ 'projectify-post-nonce' ],
				'projectify-post-save'
			);

		$is_autosave = wp_is_post_autosave( $post_id );
		$is_revision = wp_is_post_revision( $post_id );

		return ! ( $is_autosave || $is_revision ) && $is_valid_nonce;

	}

}