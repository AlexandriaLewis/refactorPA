$(document).ready(function(){
// --------------------------------------------------------->

// --------------------------------------------------------->
  // var pageOne = _.template($("#home01").html());
  //
  // var pageTwo = _.template($("#home02").html());


  var homeOne = {};

  homeOne.pageOne = [
    '<a href="#" rel="albumPg">',
      '<div class="cookie">',
        '<div class="cutter">',
        '<img src = "<%= poopy %>" />',
        '</div>',
      '</div>',
    '</a>'
  ].join("");


var homeOneAlbumHtml = "";
var homeOneAlbumTmpl = _.template(homeOne.pageOne);

photos.cover.forEach(function (el) {
  homeOneAlbumHtml += homeOneAlbumTmpl({poopy: el});
});
console.log(homeOneAlbumHtml);
$('.home01').html(homeOneAlbumHtml);


  var homeTwo = {};

  homeTwo.pageTwo = [
    '<a href="#" class="enhance" rel="photoView">',
      '<div class="cookie">',
      '<div class="cutter">',
      '<img src = "<%= photos %>" />',
      '</div>',
      '</div>',
    '</a>'
  ].join("");

var homeTwoAlbum = "";
var homeTwoTmpl = _.template(homeTwo.pageTwo);

  altPhotos.forEach(function (el) {
    el.photos.forEach(function (item) {
      homeTwoAlbum += homeTwoTmpl({photos: item})
    });
    // console.log(homeTwoAlbum);
  });

// --------------------------------------------------------->
});
