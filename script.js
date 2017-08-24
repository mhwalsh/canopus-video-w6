console.log('test');

// wait until all elements of the html are loaded
var onReady = function() {
    console.log('document ready');
};

// jquery() = $()
$(document).ready(onReady);