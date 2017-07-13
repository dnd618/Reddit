var search = location.search.substring(1);
var query = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
    function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
console.log(query)
$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:'https://www.reddit.com/'+query.url+'.json'
        
    })
    .then(function(success){  
        console.log(success)
    //    console.log(myData)
    //    var myData=success.data.children    
        var header=document.createElement('h2')
        var div=document.createElement('div')
        document.body.append(header)
        document.body.append(div)
        header.innerText=success[0].data.children[0].data.title
        // div.innerText=success[0].data.children[0].data.url
        $("<img/>").attr("src", success[0].data.children[0].data.url).appendTo(div);
    })
    });

