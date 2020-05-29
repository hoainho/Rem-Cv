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


new fullpage('#main',{
	anchors : ['hero','features','pricing','footer'],
	fitToSectionDelay : 2000,
	//easing : easeInOutQuad,
    scrollingSpeed : 1000,
    setAutoSrolling: false
});
