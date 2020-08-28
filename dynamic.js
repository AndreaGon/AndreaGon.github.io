$('#go-down').click(function(){
	$(window).animate({
		scrollTop: $('#porfolio').offset().top}, 'slow');
});
$(window).ready(function(){
  var fadeTime = 500;
  change2020 = function(){
    for (i = 1; i < 6; i++){
      $("#list-2015-" + i).hide();
      $("#list-2017-" + i).hide();
      $("#list-2018-" + i).hide();
      $("#list-2019-" + i).hide();
      $("#list-2020-" + i).fadeIn(fadeTime);
      fadeTime += 50;
    }
    fadeTime = 500;
  }
  change2019 = function(){
    for (i = 1; i < 6; i++){
      $("#list-2015-" + i).hide();
      $("#list-2017-" + i).hide();
      $("#list-2018-" + i).hide();
      $("#list-2020-" + i).hide();
      $("#list-2019-" + i).fadeIn(fadeTime);
      fadeTime += 50;
    }
    fadeTime = 500;
  }
  change2018 = function(){
    for (i = 1; i < 6; i++){
      $("#list-2015-" + i).hide();
      $("#list-2017-" + i).hide();
      $("#list-2019-" + i).hide();
      $("#list-2020-" + i).hide();
      $("#list-2018-" + i).fadeIn(fadeTime);
      fadeTime += 50;
    }
    fadeTime = 500;
  }
  change2017 = function(){
    for (i = 1; i < 6; i++){
      $("#list-2015-" + i).hide();
      $("#list-2018-" + i).hide();
      $("#list-2019-" + i).hide();
      $("#list-2020-" + i).hide();
      $("#list-2017-" + i).fadeIn(fadeTime);
      fadeTime += 50;
    }
    fadeTime = 500;
  }
  change2015 = function(){
    for (i = 1; i < 6; i++){
      $("#list-2016-" + i).hide();
      $("#list-2017-" + i).hide();
      $("#list-2018-" + i).hide();
      $("#list-2019-" + i).hide();
      $("#list-2020-" + i).hide();
      $("#list-2015-" + i).fadeIn(fadeTime);
      fadeTime += 50;
    }
    fadeTime = 500;
  }
  changeProject = function(){

    $("#link-20").click(function(){
      change2020();
    });
    $("#link-19").click(function(){
      change2019();
    });
    $("#link-18").click(function(){
      change2018();
    });
    $("#link-17").click(function(){
      change2017();
    });
    $("#link-15").click(function(){
      change2015();
    });
  }
  changeProjectMobile = function(){
    switch($("#date-mobile").find(":selected").val()){
      case "2020": change2020(); break;
      case "2019": change2019(); break;
      case "2018": change2018(); break;
      case "2017": change2017(); break;
      case "2015": change2015(); break;
      default: break;
    }
  }

	$("#link-date a").click(function(){
		$("#link-date a").removeClass("selected");
		$(this).addClass("selected");
	});
  changeProject();
});
