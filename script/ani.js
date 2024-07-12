// $('nav .icon_music').click(function(){
//     $('audio').fadeToggle().delay(2000);


// })

$('nav .icon_music').click(function(){
    $(this).toggleClass('on');
 

var audio = $('audio#music')[0];

if(audio.paused){
    audio.play()
} else {
audio.pause();

}

$('.wrap').toggleClass('on');
$('.text').toggleClass('on')


})
