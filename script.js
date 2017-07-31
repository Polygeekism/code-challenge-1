console.log('script has been sourced');



$(document).ready(function(){
    //use a click event to add a div to the DOM when generate is clicked
    $('body').on('click', '.buttonGenerate', function(){
        $('body').append('<div></div>');
    });
    //add a button labeled generate to the DOM
    $('body').append('<button class="buttonGenerate">Generate</button>');
});