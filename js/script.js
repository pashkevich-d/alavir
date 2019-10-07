$(document).ready(function(){$(window).scroll(function(){0==$(this).scrollTop()&&$(".cap_fixed").hasClass("cap_fixed-down")?$(".cap_fixed").removeClass("cap_fixed-down"):0<$(this).scrollTop()&&!$(".cap_fixed").hasClass("cap_fixed-down")&&$(".cap_fixed").addClass("cap_fixed-down")}),$(".colmenu_btn").on("click",function(){console.log($(".colmenu_checkbox").is(":checked"))}),$(document).ready(function(){$(".carousel").carousel({interval:6e3})}),$("input,textarea").focus(function(){$(this).data("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")}),$("input,textarea").blur(function(){$(this).attr("placeholder",$(this).data("placeholder"))})});
// $(window).load(function(){
//     $('menu__burger').on('click', function(){
//         $('header__menu').toggleClass('header__menu__active');
//     });
// });