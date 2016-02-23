$(document).ready(function(){
// --------------------------------------------------------->

//makes other sections inactive
$('.myAlbums').siblings('section').addClass('inactive');

//loads home page
var loadPg = $('.home01').find('a');
loadPg.click(function(event){
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('section').addClass('inactive');
});

//loads album page
var home = $('.home02').find('a');
home.click(function(event){
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('section').addClass('inactive');
  //function for replacing home02 pages
});

//brings back the album
$('.photoView').on('click', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('section').addClass('inactive');
});

//might bring specific photos into photoView
// put <a href='#' class='butts' rel='photoView'> on the links of album pages
$('body').on('click','.enhance', function(event) {
  event.preventDefault();
  var selected = "." + $(this).attr('rel');
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
  var imgSrc = $(this).find('img').attr("src");
  $('.fullView').html("<img src='"+imgSrc+"'/>");
});

//------------------ buttons bellow ----------------------->

$('#arcBtn').on('click', function(event) {
  //function for replacing home02
});

$('#forestBtn').on('click', function(event) {
  //function for replacing home02
});

$('#nightBtn').on('click', function(event) {
  //function for replacing home02
});

$('#pathBtn').on('click', function(event) {
  //function for replacing home02
});

$('#wallBtn').on('click', function(event) {
  //function for replacing home02
});

$('#wideBtn').on('click', function(event) {
  //function for replacing home02
});

$('#home').on('click', function(event) {
    var selected = "." + $(this).attr('rel');
    $(selected).removeClass('inactive');
    $(selected).siblings('section').addClass('inactive');
});
// --------------------------------------------------------->
});
