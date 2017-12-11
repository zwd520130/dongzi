/**
 * @authors dongzi
 * @date    2017-03-03 15:45:11
 */

$(window).resize(function(){
        setFontsize(14);
    });
    window.onload = function(){
    	$('#loading').hide(0,function(){
            $('.swiper-container').fadeIn(500,function(){
                swiper()
                $('.bg_1 .img_11').addClass("cfs_bounceIn")
                $('.bg_1 .img_12,.bg_1 .img_14').addClass("cfs_bounceInLeft")
                $('.bg_1 .img_13').addClass("cfs_bounceInRight")
            })
        })
        $('.img_15').on('click',function(){
            $('.share,.bgground').show()
        })
        $('.share,.bgground').on('click',function(){
            $('.share,.bgground').hide()
        })
    }
    function swiper(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            paginationClickable: false,
            direction: 'vertical',
            onSlideChangeEnd:function(index){
            	var nub = index.activeIndex
            	if(nub==0){
            		$('.bg_1 .img_11').addClass("cfs_bounceIn")
            		$('.bg_1 .img_12,.bg_1 .img_14').addClass("cfs_bounceInLeft")
            		$('.bg_1 .img_13').addClass("cfs_bounceInRight")
            	}else{
            		$('.bg_1 .img_11').removeClass("cfs_bounceIn")
            		$('.bg_1 .img_12,.bg_1 .img_14').removeClass("cfs_bounceInLeft")
            		$('.bg_1 .img_13').removeClass("cfs_bounceInRight")
            	}
            	if(nub==1){
            		$('.img_1,.img_2').addClass("cfs_fadeInLeft")
            		$('.img_4').addClass("cfs_fadeInUp")
            		$('.img_5').addClass("cfs_fadeInDown")
            		$('.img_6,.img_7').addClass("cfs_fadeInRight")
                    $('.img_9').addClass('cfs_flipFlyY')
                    $('.img_9').addClass('cfs_infinite')
            	}else{
            		$('.img_1,.img_2').removeClass("cfs_fadeInLeft")
            		$('.img_4').removeClass("cfs_fadeInUp")
            		$('.img_5').removeClass("cfs_fadeInDown")
            		$('.img_6,.img_7').removeClass("cfs_fadeInRight")
                    $('.img_9').removeClass('cfs_flipFlyY')
                    $('.img_9').removeClass('cfs_infinite')
            	}
                if(nub==2){
                    $('.tu_1_1').addClass('cfs_rotateInDownLeft')
                    $('.tu_2_1').addClass('cfs_rotateInDownRight')
                    $('.page3').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page3').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_1_1').removeClass('cfs_rotateInDownLeft')
                    $('.tu_2_1').removeClass('cfs_rotateInDownRight')
                    $('.page3').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page3').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==3){
                    $('.tu_3').addClass('cfs_rotateInDownLeft')
                    $('.tu_4').addClass('cfs_rotateInDownRight')
                    $('.page4').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page4').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_3').removeClass('cfs_rotateInDownLeft')
                    $('.tu_4').removeClass('cfs_rotateInDownRight')
                    $('.page4').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page4').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==4){
                    $('.tu_5').addClass('cfs_rotateInDownLeft')
                    $('.tu_6').addClass('cfs_rotateInDownRight')
                    $('.page5').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page5').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_5').removeClass('cfs_rotateInDownLeft')
                    $('.tu_6').removeClass('cfs_rotateInDownRight')
                    $('.page5').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page5').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==5){
                    $('.tu_7').addClass('cfs_rotateInDownLeft')
                    $('.tu_8').addClass('cfs_rotateInDownRight')
                    $('.page6').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page6').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_7').removeClass('cfs_rotateInDownLeft')
                    $('.tu_8').removeClass('cfs_rotateInDownRight')
                    $('.page6').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page6').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==6){
                    $('.tu_9').addClass('cfs_rotateInDownLeft')
                    $('.tu_10').addClass('cfs_rotateInDownRight')
                    $('.page7').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page7').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_9').removeClass('cfs_rotateInDownLeft')
                    $('.tu_10').removeClass('cfs_rotateInDownRight')
                    $('.page7').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page7').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==7){
                    $('.tu_11').addClass('cfs_rotateInDownLeft')
                    $('.tu_12').addClass('cfs_rotateInDownRight')
                    $('.page8').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page8').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_11').removeClass('cfs_rotateInDownLeft')
                    $('.tu_12').removeClass('cfs_rotateInDownRight')
                    $('.page8').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page8').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==8){
                    $('.tu_13').addClass('cfs_rotateInDownLeft')
                    $('.tu_14').addClass('cfs_rotateInDownRight')
                    $('.page9').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').addClass('cfs_fadeIn')
                    $('.page9').find('.img_16 img').addClass('imgsixth')
                }else{
                    $('.tu_13').removeClass('cfs_rotateInDownLeft')
                    $('.tu_14').removeClass('cfs_rotateInDownRight')
                    $('.page9').find('.btn_1,.btn_2,.btn_3,.btn_4,.img_16').removeClass('cfs_fadeIn')
                    $('.page9').find('.img_16 img').removeClass('imgsixth')
                }
                if(nub==9){
                    $('.img_11_1').addClass("cfs_bounceIn")
                    $('.img_12_1,.img_14_1').addClass("cfs_bounceInLeft")
                    $('.img_13_1').addClass("cfs_bounceInRight")
                    $('.img_11_1').addClass("cfs_bounceIn")
                    $('.img_15,.img_15_1').addClass("cfs_lightSpeedInUp")
                }else{
                    $('.img_11_1').removeClass("cfs_bounceIn")
                    $('.img_12_1,.img_14_1').removeClass("cfs_bounceInLeft")
                    $('.img_13_1').removeClass("cfs_bounceInRight")
                    $('.img_11_1').removeClass("cfs_bounceIn")
                    $('.img_15,.img_15_1').removeClass("cfs_lightSpeedInUp")
                }
            }
        })
    }
    function setFontsize(standardsize){
        ww=$(window).width();
        var standardNum = 320/standardsize;
        var fontsize = ww/standardNum;
        $('.number').css({fontSize:fontsize+'px'});
    } 