//Shows title (not clickable), link and image       
    $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?",
        function foo(data) {
            $.each(data.data.children.slice(0, 20),
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
// $.getJSON("https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?", function(data) {
//     $.each(data.data.children, function(i,item){
//         $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
//     });
// });
// $(document).ready(function(){
//     $.ajax({
//         method:"GET",
//         url:'https://www.reddit.com/r/LanaDelReyPictures/.json?jsonp=?'
//     })
//     .then(function(success){  
//         console.log(success)
//         var myData=success.data.children
//     for(var i=0;i<10;i++){
//         var header=document.createElement('h2')
//         var div=document.createElement('div')
//         document.body.append(header)
//         document.body.append(div)
//         div.innerText=myData[i].data.selftext
//         var appendLink=$(header)
//         var a=document.createElement('a')
//         a.text=myData[i].data.title
      //  a.setAttribute('href',single.html?url:myData.data.permalink)
//        a.href="single.html?url:" + myData[i].data.permalink
//         appendLink.append(a)
//     }
    
// })
// })
