$(document).ready(function(){

// $('.foo').find('b').hide();
// $('a').before("ylknb <b>hj</b>")
$('a').on('click', function(e){
  e.preventDefault()
  alert( $(this).html() );
});
  $(".owl-carousel").owlCarousel({
    items:4, 
    nav:true,
  });

});
// $(document).ready(function(){
// });