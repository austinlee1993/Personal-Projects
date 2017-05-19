<?php       

class Projectify_Display {

	public function initialize() {

		 add_filter( 'the_content', array( $this, 'display_notice' ) );
		 add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );

	}

	public function display_notice( $content ) {	
        
        // background color of post
        $color = get_option('proj_plugin_options');

		//difficulty rating of post
		$difficulty = get_post_meta( get_the_ID(), 'difficulty', true );

        if ( '' != $difficulty ) {

			$difficulty_html = '<div> <span class = "bold" >Difficulty Rating </span>: ';
				$difficulty_html .= $difficulty;
			$difficulty_html .= ' Stars </div>';			

		}

        // time field on post
		$time = get_post_meta( get_the_ID(), 'time', true );		
		if ( '' != $time ) {

			$time_html = '<div > <span class = "bold" > Estimated Time:</span> ';
				$time_html .= $time;
			$time_html .= '</div>';			

		}

        //cost field on post
		$cost = get_post_meta( get_the_ID(), 'cost', true );
		if ( '' != $cost ) {

			$cost_html = '<div > <span class = "bold" > Estimated Cost: </span> ';
				$cost_html .= $cost;
			$cost_html .= '</div>';			

		}      
       
        //set background color if any field has set.
        if( $cost == '' && $time =='' && $difficulty == '')
        {
           $project_info_html = '';
        } 
        
        // if so, set background color
        else{
		$project_info_html = '<div class="project-info" style="background-color:';
		$project_info_html .= $color['background_color'];
		$project_info_html .= '">';
        $project_info_html .= $difficulty_html . $time_html . $cost_html ;
        $project_info_html .= '</div>';   
        } 
         
        $content = $project_info_html . $content;
   
		return $content;

	}

	public function enqueue_styles() {

		wp_enqueue_style(
			'projectify',
			plugins_url( 'projectify/assets/css/public.css' ),
			array(),
			'1.0.0'
		);

	}



}