$('#go-down').click(function(){
	$(window).animate({
		scrollTop: $('#porfolio').offset().top}, 'slow');
});

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
