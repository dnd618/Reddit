 $.ajax({
            url: "https://www.reddit.com/r/todayilearned/"
            dataType: "jsonp",
            success: function(button) {
                $("list.html").html(button);
            }
    });