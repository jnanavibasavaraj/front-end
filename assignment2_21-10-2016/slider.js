// slider carousel //

$(document).ready(function(){
  	$("#myCarousel").carousel({interval: 15000});
  	$(".item1").click(function(){
  		$("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
  });


// scroll up //
$(document).ready(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('.scrollup').fadeIn();
				} 
				else {
							$('.scrollup').fadeOut();
							}
			});
			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop: 0
					}, 600);
						return false;
				});
			});