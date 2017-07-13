//Shows title (not clickable), link and image

    $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?",
        function subRed(data) {
            $.each(data.data.children.slice(0, 20),
            function (i, item) {
            var a = document.createElement('a')
            a.href = "single.html?url=" + item.data.permalink
            a.innerText = item.data.title
            $("#reddit-content").append(a)
              // $("#reddit-content").append( '<br>' + item.data.url );             
              // $("#reddit-content").append( item.data.title ); //Trying to turn post title into link
              $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
              $("#reddit-content").append( '<hr>' );
            }
          )
        }
      )
// Gets pics
// $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?", function(data) {
//     $.each(data.data.children, function(i,item){
//         $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
//     });
// });
