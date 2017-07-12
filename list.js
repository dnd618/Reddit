// $.getJSON(
//         "https://www.reddit.com/r/reactiongifs",
//         function foo(data)
//         {
//           $.each(
//             data.data.children.slice(0, 10),
//             function (i, post) {
//               $("#reddit-content").append( '<br>' + post.data.title );
//               $("#reddit-content").append( '<br>' + post.data.url );
//               $("#reddit-content").append( '<br>' + post.data.permalink );
//               $("#reddit-content").append( '<br>' + post.data.ups );
//               $("#reddit-content").append( '<br>' + post.data.downs );
//               $("#reddit-content").append( '<hr>' );
//             }
//           )
//         }
//       )   
// $.getJSON("https://www.reddit.com/r/lanadelrey/.json?jsonp=?", function(data) {
//     $.each(data.data.children, function(i,item){
//         $("<img/>").attr("src", item.data.url).appendTo("#images");
//     });
// });

$.getJSON('http://www.reddit.com/r/lanadelrey/.json?jsonp=?&show=all&limit=300', function (data) {
    $.each(data.data.children, function (i, item) {
        IsValidImageUrl(item.data.url, function (url, isvalid) {
            if (isvalid) {
                $('<img/>').attr('src', item.data.url)
                    .width(500)
                    .appendTo('#images');
            }
        });
    });
});


function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function () {
        callback(url, false);
    };
    img.onload = function () {
        callback(url, true);
    };
    img.src = url;
}