
   $('#title').on('keypress',function(e){
    console.dir(e.target)
    if( e.target.value < 3) {
        alert("you have not enter enough charactes")
    }
})

$('form').on('submit',function(e) {
    e.preventDefault();

const btn = $('<button class=deletebtn>').text("Delete");

let g = $('#rating').val() <= 10;
    $('.movies').append($('<li>').text('Movie: ').append($('#title').val()).append(' has a rating of ').append($('#rating').val()).append(btn));
    $('#title').val('');
    $('#rating').val('');

$('.movies').on('click',function(e){
    console.log(e.target)
    if(e.target.tagName === 'BUTTON') {
     e.target.parentElement.remove();
    }
})


})