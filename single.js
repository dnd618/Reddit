new Request.JSONP({
    url: 'http://jsfiddle.net/echo/jsonp/',
    data: {
        text: 'some text',
        par1: 'another text'
    },
    onSuccess: function(response) {
        show_response(response, $('post'));
    }
}).send();

show_response = function(obj, result) {
    $H(obj).each(function(v, k) {
        new Element('li', {
            text: k + ': ' + v
        }).inject(result);
    });
    result.highlight();
};
