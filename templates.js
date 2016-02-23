var pageOne = _.template($("#home01").html());

$('.home01').html(coverPhotos.forEach(function(el){
  pageOne(el)
}));
