// $(document).ready(function() {
//     $(document).click(function() {
//         $.ajax({
//             url : 'https://www.reddit.com/r/todayilearned/?count=50&after=t3_6mnzr2',
//             type : 'GET',
//             // data : { param : 'John Doe' }
//         }).done(function(data) {
//             if (data == "success") alert('request sent!');
//         });
//     });
// });
    // $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?",
    //     function foo(data) {
    //         $.each(data.data.children.slice(0, 10),
    //         function (i, item) {
    //           $("#reddit-content").append( '<br>' + item.data.title );
    //           $("#reddit-content").append( '<br>' + item.data.url );
    //           $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
    //         //   $("#reddit-content").append( '<br>' + item.data.permalink );
    //         //   $("#reddit-content").append( '<br>' + item.data.ups );
    //         //   $("#reddit-content").append( '<br>' + item.data.downs );
    //           $("#reddit-content").append( '<hr>' );
    //         }
    //       )
    //     }
    //   )