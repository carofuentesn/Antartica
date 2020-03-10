var timeoutHandle;
$(document).ready(function(){
        changeIndex(0,1)
        changeIndex(0,2)
	//autoChangeBanner();
        
        $(".gwcswNavWrap .titleHead").each(function(){
            var width=$(this).width()
            var wspan = $(this).find("span").width();
            $(this).find("span").css("margin-left",-(wspan-width)/2)
            $(this).find("b").css("margin-left",(wspan/2-10)+"px")
        })
	function autoChangeBanner(){
		window.clearTimeout(timeoutHandle);
		timeoutHandle=setTimeout(function(){
			var find=false;
			var elements=$('.gwcswSlot').length
			var finalIndex=elements-1
			if($('.gwcswNavWrap td[index='+finalIndex+']').hasClass("selected")){
				$( ".gwcswSlot" ).animate({width:"hide"}, 500);
				changeIndex(0)
				$( ".gwcswSlot" ).each(function( index ) {
					$(this).animate({width:"show"}, 500);
					return false;
				})
				autoChangeBanner();
				return false;
			}
			$( ".gwcswSlot" ).each(function( index ) {
				if(!find){
					var display= $(this).css("display")
					if(display=="block" && index<elements-1){
						$(this).animate({width:"hide"}, 500);
						find=true
						//$(this).css("display","none")
					}
				}else{
					$(this).animate({width:"show"}, 500);
					changeIndex(index);	
					//$(this).css("display","block")	
					return false;
				}
				//console.log( index + ": "+display +":"+elements );
			});
			autoChangeBanner();
		},3000)
	}

	$('.gwcswNavWrap td').click(function(){
                var nivel = $(this).attr("nivel")
		$('.gwcswSlot[nivel='+nivel+']').fadeOut();
		var indexTittle=$(this).attr("index")
		changeIndex(indexTittle,nivel)
			setTimeout(function(){$('.gwcswSlot[nivel='+nivel+']').each(function(i){
				if(indexTittle==i){
					$(this).fadeIn();
				}
			})
		},380)
		//autoChangeBanner();
	})


	$('.gwcswRightArrow').click(function(){
                var nivel = $(this).attr("nivel")
		var find=false;
		var elements=$('.gwcswSlot[nivel='+nivel+']').length
		var finalIndex=elements-1
		if($('.gwcswNavWrap td[index='+finalIndex+'][nivel='+nivel+']').hasClass("selected")){
			$( ".gwcswSlot[nivel="+nivel+"]" ).animate({width:"hide"}, 500);
			changeIndex(0,nivel)
			$( ".gwcswSlot[nivel="+nivel+"]" ).each(function( index ) {
				$(this).animate({width:"show"}, 500);
				return false;
			})
                        //autoChangeBanner();
			return false;
		}
		$( ".gwcswSlot[nivel="+nivel+"]" ).each(function( index ) {
			if(!find){
				var display= $(this).css("display")
				if(display=="block" && index<elements-1){
					$(this).animate({width:"hide"}, 500);
					find=true
					//$(this).css("display","none")
				}
			}else{
				$(this).animate({width:"show"}, 500);
				changeIndex(index,nivel);	
				//$(this).css("display","block")	
				return false;
			}
			//console.log( index + ": "+display +":"+elements );
		});
		//autoChangeBanner();
	});
	
	$('.gwcswLeftArrow').click(function(){
                var nivel = $(this).attr("nivel")
		var find=false;
		indexfind=-1;
		var elements=$('.gwcswSlot[nivel='+nivel+']').length
		var finalIndex=elements-1
		if($('.gwcswNavWrap td[index='+0+'][nivel='+nivel+']').hasClass("selected")){
			$( ".gwcswSlot[nivel="+nivel+"]" ).animate({width:"hide"}, 500);
			changeIndex(finalIndex,nivel)
			$( ".gwcswSlot[nivel="+nivel+"]" ).each(function( index ) {
				if(index==finalIndex){
					$(this).animate({width:"show"}, 500);
					return false;
				}
			})
                        //autoChangeBanner();
			return false;
		}
		
		$( ".gwcswSlot[nivel="+nivel+"]" ).each(function( index ) {
			var display= $(this).css("display")
			if(display=="block" && index>0){
				indexfind=index
				$(this).animate({width:"hide"}, 500);
				return false;	
			}
		})
		//console.log( "index encontrado: "+indexfind );
		$( ".gwcswSlot[nivel="+nivel+"]" ).each(function( index ) {
			if(indexfind-1==index && indexfind>0){
				$(this).animate({width:"show"}, 500);
				changeIndex(index,nivel)	
				return false;
			}
			//console.log( index + ": "+display +":"+elements );
		});
        //autoChangeBanner();        
	});

	//console.log( "ready!" );});
	
	function changeIndex(index,nivel){
		$('.gwcswNavWrap[nivel='+nivel+']').find("td").removeClass("selected")
	
		$(".gwcswNavWrap td[index="+index+"][nivel="+nivel+"]").addClass("selected")
		//console.log($('.gwcswNavWrap td[index='+index+'][nivel='+nivel+']').length)
		
		tdIndex=$(".gwcswNavWrap td[index="+index+"][nivel="+nivel+"] div")
		
		totalWidth=0
		$('.gwcswNavWrap[nivel='+nivel+']').find("td").each(function(i){
			if(i==index){
				realposindex= $(this).position().left
				realposflecha=$(".gwcswNotch[nivel="+nivel+"]").position().left
				avance = realposindex-realposflecha
				relativepos=parseInt(($(".gwcswNotch[nivel="+nivel+"]").css("left")).split("px").join(""))
				totalWidth=parseInt(($(this).width())/2);
				cambio= relativepos+avance+totalWidth-147
				//$(".gwcswNotch").css("left",cambio+"px")
				$(".gwcswNotch[nivel="+nivel+"]").animate({left:"" + (realposindex+totalWidth-147)},500);
			}
			//console.log(totalWidth + " cc: "+$(this).width())
		})
        }
		
		//console.log($(".gwcswNotch").position().left)
		
        
})