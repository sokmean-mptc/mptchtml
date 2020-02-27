var query = document.querySelector('#menu-tab');
if(query) {
    var element = window.scrollY + query.getBoundingClientRect().top;
    $( window ).scroll(function(){
        if(window.scrollY >= element){
            query.classList.add('sticky');
        }else{
            query.classList.remove('sticky');
        }
    });
}