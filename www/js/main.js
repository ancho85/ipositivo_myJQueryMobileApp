$(function() {
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
    $( "body>[data-role='panel']" ).panel();
});

$(document).on("pagecreate","#pagetwo",function(){
  $(document).on("scrollstart",function(){
    console.log("Woooaaaa!!!");
  });
  $(document).on("scrollstop",function(){
    console.log("Acabou a festa..");
  });
  $(document).on("tap",function(){
    console.log("Tap");
  });  
  $(document).on("taphold",function(){
    console.log("Taaaaaap");
  });       
    
});