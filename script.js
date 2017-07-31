console.log('script has been sourced');

var howManyClicks = 0;

$(document).ready(function () {
    //use a click event to add a div to the DOM when generate is clicked
    $('body').on('click', '.buttonGenerate', function () {
        howManyClicks++;
        $('body').append('<div>' + '<p>' + howManyClicks +
            '</p>' + '<button class="swap">Swap</button>' +
            '<button class="delete">Delete</button>' + '</div>');
    });
    $('body').on('click', '.delete', function () {
        $(this).closest('div').remove();
    });
    $('body').on('click', '.swap', function () {
        if($(this).closest('div').css('background-color', 'red')){
            $(this).closest('div').css('background-color', 'yellow');
        }
        else if($(this).closest('div').css('background-color', 'yellow')){
            $(this).closest('div').css('background-color', 'red');
        }

    });
    //add a button labeled generate to the DOM
    $('body').append('<button class="buttonGenerate">Generate</button>');
});