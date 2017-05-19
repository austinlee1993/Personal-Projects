<?php

/**
 * Plugin Name: Projectify
 * Plugin URI:  
 * Description: Adds project info into your post! You can add fields to your post based on cost, duration and difficulty. *             
 * Version:     1.0.0
 * Author:      Austin Lee
 * Author URI:  austinlee93.com
 * License:     
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . 'class-projectify-display.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-projectify-editor.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-projectify.php' );

function projectify_start() {

	if( is_admin() ) {

		$post_editor = new Projectify_Editor();
		$post_notice = new Projectify( $post_editor );

	} else {
		$post_notice = new Projectify_Display();

	}

	$post_notice->initialize();

}

projectify_start();
	
	
class Projectify_options{

    public $options;
    
	function __construct()
	{
	      $this->register();
	      $this->options = get_option('proj_plugin_options');

	}

	function add_menu_page()
	{
	   	add_menu_page('Projectify', 'Projectify', 'administrator', _FILE_ , array('Projectify_Options', 'display_options_page'));
	}

	function display_options_page()
	{
	   ?>
	           <div class="wrap">
	            <h2>Projectify Options</h2>			
			       <form method = "post" action = "options.php">       
			        <?php settings_fields('proj_plugin_options')?>
                    <?php do_settings_sections( _FILE_ ); ?>
                    
                    <p class ="submit">
                       <input name ="submit" type="submit" class="button-primary" value="Save Changes">
                    </p>  

			       </form>
	           </div>
	           <?php
	}

	function register(){
	    	register_setting('proj_plugin_options', 'proj_plugin_options');
	        add_settings_section('proj_main_section', 'Main Settings', array($this,'proj_plugin_options_cb'), _FILE_);
	        add_settings_field('background_color', 'Background Color of Projectify Info', array($this, 'proj_plugin_heading_setting'), _FILE_ , 'proj_main_section');
	    } 

    function proj_plugin_heading_setting()
    {
    	echo "<input name = 'proj_plugin_options[background_color]'' type='text' value ='{$this->options['background_color']}' >";
    }

    function proj_plugin_options_cb(){
    }
}

add_action('admin_menu', function(){
     
    Projectify_options::add_menu_page();

   } );

add_action('admin_init', function(){

	new Projectify_options();
});

	
     



 

