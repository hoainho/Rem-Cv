AOS.init({
  });

window.onload = function(){
    const ShowEdu =document.querySelector(".resume-content--education");
    const ShowExp =document.querySelector(".resume-content--experience");
    window.addEventListener('scroll',scrollOpacityEdu);
    window.addEventListener('scroll',scrollOpacityExp);
    function scrollOpacityEdu(){
        if(window.scrollY >=1300) {
            ShowEdu.style.opacity = '0.05';
            ShowEdu.style.transition = ' ease-in-out';
            ShowEdu.style.transition = '2s' ;
          }
          else
          {
            ShowEdu.style.opacity = '1';
          }
    }
    function scrollOpacityExp(){
        if(window.scrollY >=1300) {
            ShowExp.style.opacity = '0.05';
            ShowExp.style.transition = ' ease-in-out';
            ShowExp.style.transition = '2s' ;
          }
          else
          {
            ShowExp.style.opacity = '1';
          }
    };
    
}
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

//Product
        $('#bgFirst').hover(
            function(){ $('#imgFirst',).addClass('is-active'),$(this).addClass('is-active') },
            function(){ $('#imgFirst').removeClass('is-active'),$(this).removeClass('is-active') }
        )
        $('#bgSecond').hover(
            function(){ $(this).addClass('is-active') , $('#imgSecond',).addClass('is-active')},
            function(){ $(this).removeClass('is-active'), $('#imgSecond',).removeClass('is-active') }
        )
        

        
