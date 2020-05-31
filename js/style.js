
window.onload = function(){
    const BackgroundHeader =document.querySelector(".rem-navbar--background");
    window.addEventListener('scroll',scrollbg);
    function scrollbg(){
        if(window.scrollY >=10) {
			BackgroundHeader.style.backgroundColor = '#242424';
			BackgroundHeader.style.transition = '1s ease-in-out';
			BackgroundHeader.style.height = '10vh';
        }
        else
        {
			BackgroundHeader.style.backgroundColor = 'transparent';
			BackgroundHeader.style.transition = '1s ease-in-out';
			BackgroundHeader.style.height = '0vh';
        }
    }
};



new fullpage('#main', {
    autoScrolling: true,
    navigation : true,
    scrollingSpeed: 800,
    scrollBar: true,
    // easing: 'easeInOutQuad',
    
    // navigationPosition: right,
    anchors : ['scrollTop','srollFeatures','srollResume'],
    navigationTooltips: ['Home', 'Features','About'],

    });
