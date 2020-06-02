AOS.init({
  });

// window.onload = function(){
//     const ShowSlogan =document.querySelector(".slogan");
//     window.addEventListener('scroll',scrollSlogan);
//     function scrollSlogan(){
//         if(window.scrollY >=750) {
//             ShowSlogan.style.opacity = '1';
         
//             ShowSlogan.style.transition = '2s ease-in-out';
//                      ShowSlogan.style.animation = 'rubberBand';
           
//           }
//           else
//           {
//           }
//     }
// };



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
        

        
