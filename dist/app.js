$(document).ready(function (){
    $("#toggler").each(function(_, toggler){
        var target = $(toggler).data("target");
        $(toggler).on("click", function(){
            $(target).animate({
                height: "toggle"
            })
        })
    })
});

// NAVBAR SCROLL
$(function () {
    //fungsi dibawah hanya berjalan untuk semua tag <a> yang diawali (^) dengan hash (#)
    $('a[href^="#"]').on('click', function (e) {

        //masukkan ke dalam kurung kurawalnya $(a[href^])......
        $target = $(this.hash);

        //masukkan baris coding ini dibawahnya $target ......
        $jarak = 100;
        $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $jarak
            },
            1000, //durasi dalam milisekon
            'swing', //efek transisi (opsi : swing / linear)
            function () {
                window.location.hash = target;
            }
        );

    });
});


// Dark Mode
document.querySelector('#dark-btn').addEventListener('click', function(){
    let htmlClasses = document.querySelector('html').classList;
    if(localStorage.theme == 'dark' ){
        htmlClasses.remove('dark');
        localStorage.removeItem('theme');
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
})