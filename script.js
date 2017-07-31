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
        //$(this).parent().css('background-color', 'yellow');
        if (($this).parent().css('background-color') === 255,0,0) {
            $(this).parent().css('background-color')= 255,255,0;
        }
        else if($(this).parent().css('background-color') === 255,255,0){
            $(this).parent().css('background-color') = 255,0,0;
        }

    });
    

    //add a button labeled generate to the DOM
    $('body').append('<button class="buttonGenerate">Generate</button>');
});