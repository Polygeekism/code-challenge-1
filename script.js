console.log('script has been sourced');

var howManyClicks =0;

$(document).ready(function(){
    //use a click event to add a div to the DOM when generate is clicked
    $('body').on('click', '.buttonGenerate', function(){
        howManyClicks++;
        $('body').append('<div>'+ '<p>' + howManyClicks +
        '</p>' + '<button class="swap">Swap</button>' +
        '<button class="delete">Delete</button>' + '</div>');
    });
    //add a button labeled generate to the DOM
    $('body').append('<button class="buttonGenerate">Generate</button>');
});