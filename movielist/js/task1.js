 // //paginate results
 // $('#pagination').twbsPagination({
 //        totalPages: 32,
 //        visiblePages: 5,
 //        onPageClick: function (e, page) {
            
 //            //retrieve page number from URL
 //            window.location.hash = page;
 //            var pageNumber = location.hash.substr(1);

 //            $.ajax({
 //               dataType: "json",
 //               url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=9084eae9f770e006ebcba95dbd474e28&language=en-US&page=' + pageNumber,
           
 //               success: function(data){
                
 //                var movieBlock = "";
                
 //                for(var i = 0; i<data.results.length ; i++){
 //                 var movie = data.results[i];
                 
 //                 var movieTitle = movie.original_title;
 //                 var movieOverview = movie.overview;
 //                 var movieReleaseDate = movie.release_date;
 //                 var movieVoteAverage = movie.vote_average;
 //                 var moviePoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + data.results[i].poster_path;
                 
 //                 //check if image exists, otherwise put a placeholder image
 //                 if(movie.poster_path == null){
 //                    var moviePoster = "http://via.placeholder.com/185x278";
 //                 }
 //                 else{
 //                    var moviePoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + movie.poster_path;
 //                 }
                 
 //                 //HTML Template for each movie
 //                 movieBlock += "<div class = \'card\'>" + "<img src = \'" + moviePoster + "\'>" ;
 //                 movieBlock += "<div class =\'card-info\'><h4>" + movieTitle + "</h4>";
 //                 movieBlock += "<p>"+ movieOverview + "</p>"; 
 //                 movieBlock += "<p>"+ "Date Released: " + movieReleaseDate + "</p>";
 //                 movieBlock += "<p>"+ "Vote Average: " + movieVoteAverage + "</p>" + "</div></div>";

 //                }                
               
 //                $('.movieBlock').html(movieBlock);
 //                }
 //            });
 //        }
 //    });  

 function queryMovie(query, pageNumber){
  
  //run search function if query is inputted
  if (query.length >1){
     $.ajax({
       dataType: "json",
       url: 'https://api.themoviedb.org/3/search/movie?api_key=9084eae9f770e006ebcba95dbd474e28&query=' + query + '&page='+ pageNumber,
       success: function(data){
          
          var movieBlock = "";

          for(var i = 0; i<data.results.length; i++){
           var movie = data.results[i];
           var movieTitle = movie.original_title;
           var movieOverview = movie.overview;
           var movieReleaseDate = movie.release_date;
           var movieVoteAverage = movie.vote_average;
           
           //check if image is available, if not put placeholder
           if(movie.poster_path == null){
              var moviePoster = "http://via.placeholder.com/185x278";
           }
           else{
              var moviePoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + movie.poster_path;
           }
               
           //HTML Template for each movie result
           movieBlock += "<div class = \'card\'>" + "<img src = \'" + moviePoster + "\'>" ;
           movieBlock += "<div class =\'card-info\'><h3>" + movieTitle + "</h3>";
           movieBlock += "<p>"+ movieOverview + "</p>"; 
           movieBlock += "<p>"+ "Date Released: " + movieReleaseDate + "</p>";
           movieBlock += "<p>"+ "Vote Average: " + movieVoteAverage + "</p>" + "</div></div>";
          } 
          
          
          $('.movieBlock').html(movieBlock);
               
      }
    });
  }
};



//search movie based on input
function searchMovie(){
    query = document.getElementById("myMovieSearch").value;
    queryMovie(query, 1);
    $('.movieBlock').fadeIn("slow");

     //paginate results
     $('#pagination').twbsPagination({
        totalPages: 32,
        visiblePages: 5,
        onPageClick: function (e, page) {
            //retrieve page number from URL
            window.location.hash = page;
            var pageNumber = location.hash.substr(1);
            queryMovie(query, pageNumber);
            
        }
    });  
};




            