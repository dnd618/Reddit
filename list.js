//Shows title (not clickable), link and image       
    $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?",
        function foo(data) {
            $.each(data.data.children.slice(0, 10),
            function (i, item) {
              $("#reddit-content").append( '<br>' + item.data.title );
              $("#reddit-content").append( '<br>' + item.data.url );             
              $("#reddit-content").append( item.data.title + item.data.url ); //Trying to turn post title into link
              $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
              $("#reddit-content").append( '<hr>' );
            }
          )
        }
      )
// Gets pics
// $.getJSON("https://www.reddit.com/r/lanadelrey/.json?jsonp=?", function(data) {
//     $.each(data.data.children, function(i,item){
//         $("<img/>").attr("src", item.data.url).appendTo("#images");
//     });
// });

