//     佛祖保佑                       永无BUG
//     本代码块已经经过开光处理，觉无可能再产生BUG
/**
 * @coding dongzi (dongzi886@gmail.com)
 * @date   2016-11-13 15:02:57
 */
var int
var mySwiper2,mySwiper3;
    $(window).resize(function(){
        setFontsize(14);
    });
    window.onload = function(){
        $('.loading_line div').animate({
            width:"100%"},1500, function() {
                $('#loading').hide(0,function(){
                    $('#swiper-container1').fadeIn(500,function(){
                        swiper()
                       
                            $('.pic_2').delay(100).fadeIn(400)
                            $('.pic_3').delay(500).fadeIn(400)
                            $('.pic_4').delay(1000).fadeIn(400)
                            $('.pic_5').delay(1500).fadeIn(400)
                            $('.pic_6').delay(2000).fadeIn(400)
                            $('.pic_7').delay(2500).fadeIn(400)
                            $('.pic_8').delay(3000).fadeIn(1000)
                            $('.pic_9').delay(3500).fadeIn(400)
                             $('.page0').delay(4000).fadeIn(400)
                       
                    })
                })
            }); 
        }
var m=0
        $('.a_div a').click(function() {
            m=0
           m=$(this).index()
           console.log(m)
           $('.nd_img').fadeOut(100)
           $('.nd_div .nd_img').eq(m).fadeIn(600)

           if(m==0){
                $('.line_btn').animate({left:"11.8%"})
           }else if(m==1){
                $('.line_btn').animate({left:"34%"})
           }else if(m==2){
                $('.line_btn').animate({left:"59%"})
           }else if(m==3){
                $('.line_btn').animate({left:"81%"})
           }
        });
    $(".pic_35").click(function(){
        $('.fx,.fxbtn,.bg_c').fadeIn(500)
    })
    $('.fxbtn').click(function(){
         $('.fx,.fxbtn,.bg_c').fadeOut(500)
    })
    $('.nd_brn').click(function(){
        $('.nd_div').hide()
        $('.nd_box_'+m).show(50,function(){
            if(m==0){
                $('.img_1113_2').addClass('cfs_fadeIn')
                $('.img_1113_1').addClass('cfs_fadeIn')
                $('.img_1113_3').addClass('cfs_fadeInDown')
                $('.img_1113_4').addClass('cfs_fadeIn')
            }
            if(m==1){
                        $('.pic_10,.pic_12,.pic_14').addClass('cfs_fadeIn')
                        $('.pic_11').delay(500).fadeIn()
                        $('.pic_13').delay(2000).fadeIn()
                        $('.page1').delay(2500).fadeIn()
                    }
                    // else{
                    //      $('.pic_10,.pic_12,.pic_14').removeClass('cfs_fadeIn')
                    //      $('.pic_11,.pic_13,.page1').stop().fadeOut(10)
                    // }
            else if(m ==2){
                            mySwiper2 = new Swiper('#swiper-container2',{
                            initialSlide :0,
                            nested:true,
                            direction: 'vertical',
                            onSlideChangeEnd:function(index){
                                var w = index.activeIndex
                                console.log(w)
                                if(w==0){
                                    setFontsize(14);
                                    n=0
                                    $('.pic_45,.pic_43,.pic_44,.pic_5_1').fadeIn(1000)
                                    $('.pic_4_1,.pic_3_1').addClass('cfs_fadeIn')
                                    $('.jpg_4').delay(2000).fadeIn(2000)
                                    $('.pic_46,.pic_47').delay(1800).fadeIn()
                                    $('.number').delay(1800).fadeIn(500,function(){
                                       int=setInterval(function(){
                                            n++
                                            $('.number').text(n)
                                       },3000)
                                    })
                                    $('.page80_1').delay(2300).fadeIn() 
                                   
                                }
                                else{
                                    $('.pic_45,.pic_43,.pic_44,.pic_5_1,.jpg_4,.pic_46,.pic_47,.number,.page2').stop().fadeOut(10)
                                     $('.pic_4_1,.pic_3_1').removeClass('cfs_fadeIn')
                                    n=0;
                                    $('.number').text(n)
                                    clearInterval(int) 
                                }

                                if(w==1){
                                    $('.pic_48').addClass('cfs_fadeInDown')
                                    $('.pic_49,.pic_50').addClass('cfs_fadeIn')
                                    $('.pic_6_1,.pic_6_1_1').delay(2000).fadeIn()
                                    $('.pic_7_1').delay(3000).fadeIn(100,function(){
                                        $(this).animate({left:'38.4%'}, 100)
                                        $('.pic_6_1_1').animate({left:'-38.4%'}, 1000)
                                    })
                                    $('.page80_2').delay(4000).fadeIn()
                                }
                                else{
                                    $('.pic_48').removeClass('cfs_fadeInDown')
                                    $('.pic_49,.pic_50').removeClass('cfs_fadeIn')
                                    $('.pic_6_1,.pic_6_1_1,.page3').stop().fadeOut(10)
                                    $('.pic_7_1').stop().fadeOut(100,function(){
                                        $(this).css({left:'50.4%'})
                                        $('.pic_6_1_1').css({left:'21.4%'}, 1000)
                                    })
                                }
                            }
                         })
                            setFontsize(14);
                            n=0
                            $('.pic_45,.pic_43,.pic_44,.pic_5_1').fadeIn(1000)
                            $('.pic_4_1,.pic_3_1').addClass('cfs_fadeIn')
                            $('.jpg_4').delay(2000).fadeIn(2000)
                            $('.pic_46,.pic_47').delay(1800).fadeIn()
                            $('.number').delay(1800).fadeIn(500,function(){
                               int=setInterval(function(){
                                    n++
                                    $('.number').text(n)
                               },3000)
                            })
                            $('.page80_1').delay(2300).fadeIn() 

                    }
                    else if(m==3){
                            mySwiper3 = new Swiper('#swiper-container3',{
                            nested:true,
                            initialSlide :0,
                            direction: 'vertical',
                            onSlideChangeEnd:function(index){
                                var q = index.activeIndex
                                if(q==0){
                                   $('.img_1113_7').addClass("cfs_fadeInDown")
                                   $('.img_1113_9').delay(500).fadeIn()
                                   $('.img_1113_8').addClass("cfs_fadeIn")
                                   $('.img_1113_10').addClass("cfs_fadeIn")
                                   $('.page90_1').delay(2000).fadeIn() 
                                }else{
                                    $('.img_1113_7').removeClass("cfs_fadeInDown")
                                   $('.img_1113_9').fadeOut(10)
                                   $('.img_1113_8').removeClass("cfs_fadeIn")
                                   $('.img_1113_10').removeClass("cfs_fadeIn")
                                   $('.page90_1').fadeOut(10)
                                }
                                 if(q==1){
                                   $('.img_1113_11').addClass("cfs_fadeIn")
                                   $('.img_1113_12').addClass("cfs_fadeIn")
                                   $('.img_1113_13').addClass("cfs_fadeIn")
                                   $('.img_1113_14').addClass("cfs_fadeIn")
                                   $('.img_1113_15').addClass("cfs_fadeIn")
                                   $('.img_1113_16').addClass("cfs_fadeIn")
                                   $('.page90_2').delay(2500).fadeIn() 
                                }else{
                                    $('.img_1113_11').removeClass("cfs_fadeIn")
                                   $('.img_1113_12').removeClass("cfs_fadeIn")
                                   $('.img_1113_13').removeClass("cfs_fadeIn")
                                   $('.img_1113_14').removeClass("cfs_fadeIn")
                                   $('.img_1113_15').removeClass("cfs_fadeIn")
                                   $('.img_1113_16').removeClass("cfs_fadeIn")
                                   $('.page90_2').fadeOut(10)
                                }
                            }
                         })
                        $('.img_1113_7').addClass("cfs_fadeInDown")
                       $('.img_1113_9').delay(500).fadeIn()
                       $('.img_1113_8').addClass("cfs_fadeIn")
                       $('.img_1113_10').addClass("cfs_fadeIn")
                    }

        })
    })
    function swiper(){
            var swiper = new Swiper('#swiper-container1', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-next',
                paginationClickable: false,
                direction: 'vertical',
                onSlideChangeEnd:function(index){
                    var nub = index.activeIndex
                    if(nub == 0){
                        m=0
                        $('.pic_2').delay(100).fadeIn(400)
                        $('.pic_3').delay(500).fadeIn(400)
                        $('.pic_4').delay(1000).fadeIn(400)
                        $('.pic_5').delay(1500).fadeIn(400)
                        $('.pic_6').delay(2000).fadeIn(400)
                        $('.pic_7').delay(2500).fadeIn(400)
                        $('.pic_8').delay(3000).fadeIn(1000)
                        $('.pic_9').delay(3500).fadeIn(400)
                        $('.page0').delay(4000).fadeIn()
                       
                    }else{
                        $('.pic_2,.pic_3,.pic_4,.pic_5,.pic_6,.pic_7,.pic_8,.pic_9,.page0').stop().fadeOut(10)
                    }
                    if(nub ==1){
                        $('.nd_img').addClass('cfs_fadeIn')
                        $('.pic_45,.pic_43,.pic_44,.pic_5_1,.jpg_4,.pic_46,.pic_47,.number,.page2').stop().fadeOut(10)
                         $('.pic_4_1,.pic_3_1').removeClass('cfs_fadeIn')
                        n=0;
                        $('.number').text(n)
                    }else{
                        $('.pic_45,.pic_43,.pic_44,.pic_5_1,.jpg_4,.pic_46,.pic_47,.number,.page2').stop().fadeOut(10)
                         $('.pic_4_1,.pic_3_1').removeClass('cfs_fadeIn')
                        n=0;
                        $('.number').text(n)
                        clearInterval(int) 
                        m=0
                        $('.nd_div .nd_img').eq(m).show().siblings(".nd_img").hide()
                        $('.line_btn').css({"left": "10.9%"})
                        $(".nd_box").hide()
                        $('.nd_div').show()
                         $('.nd_img').removeClass('cfs_fadeIn')
                      

                        
                    }
                     //d大楼
                     if(nub == 2){
                        if(mySwiper2){
                            mySwiper2.detachEvents()
                        }else if(mySwiper3){
                            mySwiper3.detachEvents()
                        }
                       
                       
                        $("#swiper-container2 .swiper-wrapper,#swiper-container3 .swiper-wrapper").css({"transform":" translate3d(0px, 0, 0px)"})
                     
                        m=0
                        $('.pic_48').removeClass('cfs_fadeInDown')
                                    $('.pic_49,.pic_50').removeClass('cfs_fadeIn')
                                    $('.pic_6_1,.pic_6_1_1,.page3').stop().fadeOut(10)
                                    $('.pic_7_1').stop().fadeOut(100,function(){
                                        $(this).css({left:'50.4%'})
                                        $('.pic_6_1_1').css({left:'21.4%'}, 1000)
                                    })
                        
                        $('.pic_23').addClass('cfs_fadeInUp')
                        $('.pic_22').addClass('cfs_fadeIn')
                        $('.pic_55').addClass('cfs_fadeInDown')
                        $('.page7').delay(2000).fadeIn()
                    }else{
                        $('.pic_23').removeClass('cfs_fadeInUp')
                        $('.pic_22').removeClass('cfs_fadeIn')
                        $('.pic_55').removeClass('cfs_fadeInDown')
                        $('.page7').stop().fadeOut()
                    }
                    if(nub == 3){
                        $('.pic_16,.pic_19').fadeIn()
                        $('.pic_17').delay(800).fadeIn(500,function(){
                            $('.pic_54').addClass('cfs_lightSpeedIn')
                            $('.jpg_5,.pic_18').addClass('cfs_fadeIn')
                        }) 
                        $('.page6').delay(2000).fadeIn()
                    }else{
                        $('.pic_16,.pic_19,.page6,.pic_17').stop().fadeOut()
                        $('.pic_54').removeClass('cfs_lightSpeedIn')
                        $('.jpg_5,.pic_18').removeClass('cfs_fadeIn')
                    }

                     if(nub == 4){
                        $('.pic_25,.jpg_6').addClass('cfs_fadeIn')
                        $('.pic_24').addClass('cfs_lightSpeedInRight')
                        $('.pic_26').addClass('cfs_lightSpeedIn')
                        $('.lb').delay(2000).fadeIn()  
                        $('.page8').delay(2500).fadeIn()              
                    }else{
                        $('.pic_25,.jpg_6').removeClass('cfs_fadeIn')
                        $('.pic_24').removeClass('cfs_lightSpeedInRight')
                        $('.pic_26').removeClass('cfs_lightSpeedIn')
                        $('.lb,.page8').stop().fadeOut(10)  
                    }
                    if(nub == 5){
                        $('.pic_31').fadeIn() 
                        $('.pic_34,.pic_35').addClass('cfs_fadeIn')    
                        $('.pic_32,.pic_33').delay(1200).fadeIn()          
                    }else{
                        $('.pic_31,.pic_32,.pic_33').stop().fadeOut() 
                        $('.pic_34,.pic_35').removeClass('cfs_fadeIn')    
                    } 
                }
            });
        }
    function setFontsize(standardsize){
        ww=$(window).width();
        var standardNum = 320/standardsize;
        var fontsize = ww/standardNum;
        $('.number').css({fontSize:fontsize+'px'});
    } 