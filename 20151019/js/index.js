	var a=0;
	function zouni(){
		a++;
	}
//yaoyiyao
        var istrue = true
        var SHAKE_THRESHOLD = 3000;  
        var last_update = 0;  
        var x = y = z = last_x = last_y = last_z = 0;  
        function init() {  
            if (window.DeviceMotionEvent) {  
                window.addEventListener('devicemotion', deviceMotionHandler, false);  
            } 
        }  
        function deviceMotionHandler(eventData) {  
            var acceleration = eventData.accelerationIncludingGravity;  
            var curTime = new Date().getTime();  
            if ((curTime - last_update) > 100) {  
                var diffTime = curTime - last_update;  
                last_update = curTime;  
                x = acceleration.x;  
                y = acceleration.y;  
                z = acceleration.z;  
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;  
                if (speed > SHAKE_THRESHOLD && istrue==true) { 
                    $('.page-13').hide()
                    var nub = parseInt(4*Math.random())//随机
                    $('.page-14').fadeIn(500,function(){
                    	$('.d_29').hide()
                    	$('#jg-'+nub).show()
                    })
                    //alert(nub)
                    //istrue=false 
                }  
                last_x = x;  
                last_y = y;  
                last_z = z;   
            }  
        } 
$(function(){

	setFontsize(10)
	$('.img8').mousedown(function(){
		$('.page-2').hide()
		$('.page-3').fadeIn(function(){
			$('.page-3').delay(1800).fadeOut(2000)
			$('.page-4').delay(1800).fadeIn(2000)
		})
	})
	$('.d_8').mousedown(function(){
		$(this).parent('.question').fadeOut(100)
		$(this).parent('.question').next('div').fadeIn(100)
	})

	$('.true_btn').mousedown(function(){
			zouni()
		})
	$('.d_tijiao').mousedown(function(){
		$('.page-11').fadeOut(500,function(){
			$('.p_ques em').text(a)
			if(a<=4){
				$('.d_9').show()
			}else if(a>=5&&a<=7){
				$('.d_10').show()
			}else{
				$('.d_11').show()
			}
		})
		$('.page-12').fadeIn(500)
	})
	$('.tz_btn').mousedown(function(){
		$('.page-12').fadeOut(500)
		$('.page-11').fadeIn(500)
		$('.question').hide()
		$('.q1').show()
		$('.d_7').hide()
		a=0
	})
	$('.istrue').mousedown(function(){
		istrue=false

	})


	$('.fl').mousedown(function(){
		$(this).parents('.question').find('.fl').fadeIn(150)
	})
	$('.d_6').mousedown(function(){
		$('.page-10').fadeOut()
		$('.page-11').fadeIn()
		$('.question').hide()
		$('.q1').show()
		$('.d_7').hide()
	})


	$('.img12').mousedown(function(){
		$('.blackbg,.showbox,.img18-1').fadeIn()
	})
	$('.img17').mousedown(function(){
		$('.page-4').fadeOut(500)
		$('.page-13').fadeIn(500,function(){
			istrue=true
			init()
		})
	})
	$('.img14').mousedown(function(){
		$('.page-4').fadeOut()
		$('.page-10').fadeIn()
	})
	$('.img19-1').mousedown(function(){
		$('.blackbg,.showbox,.img18-1,.img18-2,.img18-3').fadeOut()
	})
	$('.img16').mousedown(function(){
		$('.page-4').fadeOut()
		$('.page-5').fadeIn()
	})
	$('.img22').mousedown(function(){
		$('.sc-show,.whitebg,.img51-1').fadeIn()
		$('.img23,.d_15,.shouzhi').hide()
		$('.zwd_1,.d_16').show()
	})
	$('.zwd_1').bind('mousedown',function(){
		$('.sc-show,.whitebg,.img51-2').fadeIn()
		$('.img24,.d_16,.shouzhi').hide()
		$('.zwd_2,.d_17').show()
	})
	$('.zwd_2').mousedown(function(){
		$('.sc-show,.whitebg,.img51-3').fadeIn()
		$('.img25,.d_17,.shouzhi').hide()
		$('.zwd_3,.d_18').show()
	})
	$('.zwd_3').mousedown(function(){
		$('.sc-show,.whitebg,.img51-4').fadeIn()
		$('.img26,.d_18,.shouzhi').hide()
		$('.zwd_4,.d_19').show()
	})
	$('.zwd_4').mousedown(function(){
		$('.sc-show,.whitebg,.img51-5').fadeIn()
		$('.img27,.d_19,.shouzhi').hide()
		$('.zwd_5,.d_20').show()
	})
	$('.zwd_5').mousedown(function(){
		$('.sc-show,.whitebg,.img51-6').fadeIn()
		$('.img28,.d_20,.shouzhi').hide()

		$('.zwd_6,.d_21').show()
	})
	$('.zwd_6').mousedown(function(){
		$('.sc-show,.whitebg,.img51-7').fadeIn()
		$('.shouzhi').hide()
	})
	$('.img52,.whitebg').mousedown(function(){
		$('.sc-show,.whitebg,.img-hide').fadeOut()
	})
	$('.img19-2').mousedown(function(){
		$(this).parents('.page').fadeOut()
		$('.page-4').fadeIn()
	})
	$('.tc1').mousedown(function(){
		$('.page-4,.blackbg').fadeOut()
		$('.page-6').fadeIn()
	});
	$('.tc2').mousedown(function(){
		$(this).parents('.page').fadeOut()
		$('.page-6').fadeIn()
	});
    var timeOutEvent=0;
    $(".hand").on({
        touchstart: function(e){
            timeOutEvent = setTimeout("longPress()",500);
           e.preventDefault();
        },
        touchmove: function(){
                    clearTimeout(timeOutEvent); 
                timeOutEvent = 0; 
        },
        touchend: function(){
             clearTimeout(timeOutEvent);
            return false; 
        }
    })
 
	$('.img54').mousedown(function(){
		$('.page-7').hide()
		$('.page-8').fadeIn()
	});
	$('.img56').mousedown(function() {
		$('.blackbg,.bm-tab').fadeIn()
	});
	$('.img58').mousedown(function(event) {
		$('.blackbg,.page,.bm-tab').hide()
		$('.page-9').fadeIn()
	});
	$('.img60,.img55').mousedown(function(event) {
		$('.blackbg,.img61').fadeIn()
	});
	$('.bm1').mousedown(function() {
		$('.blackbg,.bm-tab').fadeIn()
	});
	$('.bm2').mousedown(function() {
		$('.blackbg,.bm-tab').fadeIn()
	});
	$('.img61').mousedown(function() {
		$('.img61,.blackbg').fadeOut()
	});
})
function longPress(){ 
    timeOutEvent = 0; 
    $('.page-6').hide()
	$('.page-7').fadeIn() 
} 
function setFontsize(standardsize)
    {
        ww=$(window).width();
        var standardNum = 320/standardsize;
        var fontsize = ww/standardNum;
        var standard = 290/standardsize;
        var fontsizeA = ww/standard;
        if(fontsize>=20){
            fontsize=20
        }
        if(fontsizeA>=24){
            fontsize=24
        }
        $('body,html').css({fontSize:fontsize+'px'})
        $('.p1,.p2,.p3,.p4,select,input').css({fontSize:fontsize+'px',lineHeight:fontsizeA+2+'px'});
        $('.p1 em,.p_ques').css({fontSize:fontsizeA+'px'});
    }
function loadImage(data,callback)
{
    var imgLoaded = 0;
    var percent = 0;
    var imgLength = data.length;
    for(var i=0;i<imgLength;i++)
    {
        var imgobj = new Image();
        imgobj.onload = function()
        {
            imgLoaded++;
            percent = parseInt(imgLoaded/imgLength*100);
            callback(percent);
        }
        imgobj.src = data[i];
    }
}

//定义图片数组
var data = ['images/bg_0.jpg','images/ld-1.png','images/ld-2.png','images/ld-3.png','images/pic-1.png','images/pic-2.png','images/pic-3.png','images/pic-4.png','images/pic-5.png','images/pic-6.png','images/pic-7.png','images/pic-8.png','images/pic-9.png','images/pic-10.png','images/pic-11.png','images/pic-12.png','images/pic-13.png','images/pic-15.png','images/ui_03.png','images/ui_06.png','images/ui_10.png','images/ui_13.png','images/ui_17.png','images/ui_22.png','images/ui_25.png','images/ui_29.png','images/ui_34.png','images/ui_36.png','images/ui_41.png','images/ui_45.png','images/ui_48.png','images/ui_51.png','images/ui_55.png','images/ui_58.png','images/ui_63.png','images/ui_66.png','images/ui_69.png','images/ui_74.png','images/ui_77.png','images/ui_81.png','images/ui_83.png','images/ui_86.png','images/ui_92.png','images/ui_95.png','images/ui_99.png','images/ui_103.png','images/ui_108.png','images/ui_110.png','images/ui_111.png','images/ui_112.png','images/ui_113.png','images/ui_119.png','images/ui_123.png','images/ui_126.png','images/ui_130.png','images/ui_135.png','images/yun1.png','images/yun2.png','images/photo1.png','images/photo2.png','images/photo3.png','images/photo4.png','images/photo5.png','images/photo6.png','images/photo7.png','images/photo8.png','images/photo9.png','images/photo10.png','images/photo11.png','images/daka.png','images/wancheng.png','images/ui-1.png','images/tjcg.png','images/lb-1.png','images/lb-2.png','images/tz_btn.png','images/d_12.png','images/d_21.png','images/d_27.png','images/d_30.png','images/d_34.png','images/d_03.png','images/d_07.png','images/d_10.png','images/d_15.png','images/d_18.png','images/d_9.png','images/d_8.png','images/d_7.png','images/d_6.png','images/d_5.png','images/ui_45_1.png','images/ui_86_1.png','images/ui_55_1.png','images/ui_63_1.png','images/ui_66_1.png','images/ui_74_1.png','images/ui_83_1.png','images/d_4.png','images/d_3.png','images/d_2_02.png','images/d_1_02.png','images/jieguo_3_02.png','images/jieguo_2_02.png','images/jieguo_1_02.png','images/q8_1.png','images/q8_2.png','images/q8_3.png','images/t_8.png','images/q7_1.png','images/q7_2.png','images/q7_3.png','images/t_7.png','images/q6_1.png','images/q6_2.png','images/q6_3.png','images/t_6.png','images/q5_1.png','images/q5_2.png','images/q5_3.png','images/t_5.png','images/q4_1.png','images/q4_2.png','images/q4_3.png','images/t_4.png','images/q3_1.png','images/q3_2.png','images/q3_3.png','images/t_3.png','images/q2_1.png','images/q2_2.png','images/q2_3.png','images/t_2.png','images/q1_1.png','images/q1_2.png','images/q1_3.png','images/t_1.png','images/cha.png','images/gou.png','images/ketang.png','images/d_11.png'];
$(function(){
	//调用图片加载函数
	var audio = document.createElement("audio");
        audio.src = "music.mp3";
		audio.play();
		var index = 0;
        audio.addEventListener('ended', function () {
        	setTimeout(function () {if(index<100){ audio.play(); index++}}, 500);
        }, false);
        if(audio!==null){ 
             audio.play();
            $('.imgon').click(function(){
                audio.pause();
                $(this).hide().siblings('.imgoff').show()
            }); 
               $('.imgoff').click(function(){
                audio.play();
                $(this).hide().siblings('.imgon').show()
            }); 
        }
        //
        $('.figure').click(function(){
			$(this).find('.list-ul').slideToggle(300);
		})
		$('.list-ul ul li').click(function(){
			var datename = $(this).text()
			$(this).parents('.list-ul').siblings('span').attr({'date-name':datename}).text(datename)
		})
        //
	loadImage(data,function(percent){
		//参数percent不带%
		//$("#loading-bar span").text(percent);
		// $('.img2').css({'bottom':percent+'%'})
		// $('.img3').css({'height':percent+'%'})
		//判断是否加载到100;
		if(percent>=100)
		{
			doit();
			$('.img2').animate({'bottom':'100%'},1200)
			$('.img3').animate({'height':'100%'},1200,function(){
				$('#loading').hide()
				$('#wrap').fadeIn(500,function(){
					$('.img5').animate({'top': '31.9%','left': '12.3%'}, 500,function(){
						$('.page-1').delay(2500).fadeOut(1000)
						$('.page-2').delay(2500).fadeIn(1000,function(){
							
						})
					})
				})
			})
			
		}
	});
});
var n = 20;
function doit(){
   n = n + 1;
   var o = $("#loading-bar span");
   o.innerHTML = n.toString();
   $("#loading-bar span").text(n)
   if(n<100) setTimeout('doit()',10);
}


    

