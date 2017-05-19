<label> Difficulty Rating </label><br>
<select name="difficulty" class="project-settings" >
  <option value= "" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "1" ? "selected='selected'" : "")?>>No Rating</option>
  <option value="1" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "1" ? "selected='selected'" : "")?>>1 Star</option>
  <option value="2" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "2" ? "selected='selected'" : "")?>>2 Stars</option>
  <option value="3" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "3" ? "selected='selected'" : "")?>>3 Stars</option>
  <option value="4" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "4" ? "selected='selected'" : "")?>>4 Stars</option>
  <option value="5" <?= (get_post_meta( get_the_ID(), 'difficulty', true ) == "5" ? "selected='selected'" : "")?>>5 Stars</option>
</select>
<br><br>
<label> Estimated Time to Finish Project </label><br>
<input class="project-settings" type = "text" name="time" value = "<?php echo get_post_meta( get_the_ID(), 'time', true ); ?>">
<br><br>
<label> Estimated Cost to Finish Project </label><br>

<input class="project-settings" type = "text" name="cost" value = "<?php echo get_post_meta( get_the_ID(), 'cost', true ); ?>">

<?php wp_nonce_field( 'projectify-post-save', 'projectify-post-nonce' ); ?>