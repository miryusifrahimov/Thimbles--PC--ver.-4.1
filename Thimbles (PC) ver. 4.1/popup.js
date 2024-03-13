var page_title = document.title;


    window.onload = function(){
		//$('picture img').eq(0).attr("src",'https://i.ibb.co/YtkhpFL/logo.png');
		//$('picture source').remove();
		
		document.onclick = ({target}) => {
			page_title = document.title;
			$(".thimbles-game.thimbles__game").attr('id','id_xThimbles_game');
			if (page_title.indexOf('Наперстки') !== -1 || page_title.indexOf('Thimbles') !== -1)
			{
				let parent = target;
				clas_name_parent = parent.parentNode.className;
				console.log(target.className);
				if (target.className == "thimbles-bottom__val" )
				{
					console.log(1);
					setTimeout(function () 
					{
						$(".thimbles-game__thimble").each(function (index, el)
						{
							$(el).css("visibility","hidden");
						});
						
						var class_get = $('#id_xThimbles_game').children().first().attr("class");
					
						$("#id_xThimbles_game").prepend('<div id="xThimbles_ball" class="'+class_get+'"></div>');
						
						setTimeout(function () 
						{
							makeid();
						}, getRandomInRange(1500,3500)); 
						
					}, 1800); 
				}
				
				if (target.className == "thimbles-game__thimble" )
				{
					if ($("#id_xThimbles_game").attr("class") == "thimbles-game thimbles__game")
					{
						$("#xThimbles_ball").remove();
					}
				}
			}
        }
    };


function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeid() 
{
	if ($("#id_xThimbles_game").attr("class") == "thimbles-game thimbles__game")
	{
		var rand_index = getRandomInRange(0,2);
		console.log("Смена позиции на "+rand_index)
		$("#xThimbles_ball").attr('class','thimbles-game__ball thimbles-game__ball--is-position-'+rand_index);

		setTimeout(function () 
		{
			makeid();
		}, getRandomInRange(100,1500));
	}
	else
	{
		$(".thimbles-game__thimble").each(function (index, el)
		{
			$(el).css("opacity","0.3");
		});
	}
}