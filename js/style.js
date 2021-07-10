
//AOS
AOS.init({
});
//AnimationWhenScrollYPage
window.onload = function () {
  //MID
  const midhtml = document.querySelector(".percent-mid-html");
  const midsass = document.querySelector(".percent-mid-sass");
  const midcss = document.querySelector(".percent-mid-css");
  const midjs = document.querySelector(".percent-mid-js");
  const midreact = document.querySelector(".percent-mid-react");
  const midjq = document.querySelector(".percent-mid-jquery");
  window.addEventListener('scroll', increasemidhtml);
  window.addEventListener('scroll', increasemidsass);
  window.addEventListener('scroll', increasemidcss);
  window.addEventListener('scroll', increasemidjs);
  window.addEventListener('scroll', increasemidreact);
  window.addEventListener('scroll', increasemidjq);
  //AFTER
  const afterhtml = document.querySelector(".percent-after-html");
  const aftersass = document.querySelector(".percent-after-sass");
  const aftercss = document.querySelector(".percent-after-css");
  const afterjs = document.querySelector(".percent-after-js");
  const afterreact = document.querySelector(".percent-after-react");
  const afterjq = document.querySelector(".percent-after-jquery");
  window.addEventListener('scroll', increaseafterhtml);
  window.addEventListener('scroll', increaseaftersass);
  window.addEventListener('scroll', increaseaftercss);
  window.addEventListener('scroll', increaseafterjs);
  window.addEventListener('scroll', increaseafterreact);
  window.addEventListener('scroll', increaseafterjq);
  //RIGHT
  const righthtml = document.querySelector(".percent-right-html");
  const rightsass = document.querySelector(".percent-right-sass");
  const rightcss = document.querySelector(".percent-right-css");
  const rightjs = document.querySelector(".percent-right-js");
  const rightreact = document.querySelector(".percent-right-react");
  const rightjq = document.querySelector(".percent-right-jquery");
  window.addEventListener('scroll', increaserighthtml);
  window.addEventListener('scroll', increaserightsass);
  window.addEventListener('scroll', increaserightcss);
  window.addEventListener('scroll', increaserightjs);
  window.addEventListener('scroll', increaserightreact);
  window.addEventListener('scroll', increaserightjq);
  //NUMBERS
  const numberhtml = document.querySelector(".percent-number-html");
  const numbersass = document.querySelector(".percent-number-sass");
  const numbercss = document.querySelector(".percent-number-css");
  const numberjs = document.querySelector(".percent-number-js");
  const numberreact = document.querySelector(".percent-number-react");
  const numberjq = document.querySelector(".percent-number-jquery");
  window.addEventListener('scroll', increasenumberhtml);
  window.addEventListener('scroll', increasenumbersass);
  window.addEventListener('scroll', increasenumbercss);
  window.addEventListener('scroll', increasenumberjs);
  window.addEventListener('scroll', increasenumberreact);
  window.addEventListener('scroll', increasenumberjq);


  //Increase mid cube
  function increasemidhtml() {
    if (window.scrollY >= 2260) {
      midhtml.style.transform = 'translate3D(12.16rem, 0rem, 10.5rem) rotateY(90deg)';
      midhtml.style.transition = ' ease-in-out';
      midhtml.style.transition = '1.7s';
    }
    else {
      midhtml.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  function increasemidsass() {
    if (window.scrollY >= 2260) {
      midsass.style.transform = 'translate3D(12.16rem, 0rem, 10.5rem) rotateY(90deg)';
      midsass.style.transition = ' ease-in-out';
      midsass.style.transition = '1.7s';
    }
    else {
      midsass.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  function increasemidcss() {
    if (window.scrollY >= 2260) {
      midcss.style.transform = 'translate3D(10.81rem, 0rem, 10.5rem) rotateY(90deg)';
      midcss.style.transition = ' ease-in-out';
      midcss.style.transition = '1.7s';
    }
    else {
      midcss.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  function increasemidjs() {
    if (window.scrollY >= 2260) {
      midjs.style.transform = 'translate3D(2.7027rem, 0rem, 10.5rem) rotateY(90deg)';
      midjs.style.transition = ' ease-in-out';
      midjs.style.transition = '1.7s';
    }
    else {
      midjs.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  function increasemidreact() {
    if (window.scrollY >= 2260) {
      midreact.style.transform = 'translate3D(4.054rem, 0rem, 10.5rem) rotateY(90deg)';
      midreact.style.transition = ' ease-in-out';
      midreact.style.transition = '1.7s';
    }
    else {
      midreact.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  function increasemidjq() {
    if (window.scrollY >= 2260) {
      midjq.style.transform = 'translate3D(6.756rem, 0rem, 10.5rem) rotateY(90deg)';
      midjq.style.transition = ' ease-in-out';
      midjq.style.transition = '1.7s';
    }
    else {
      midjq.style.transform = 'translate3D(-3rem, 0rem, 10.5rem) rotateY(90deg)';
    }
  };
  //Increase After cube
  function increaseafterhtml() {
    if (window.scrollY >= 2260) {
      afterhtml.style.width = 'calc(var(--percent-after-html)/5.75)';
      afterhtml.style.transition = 'ease-in-out';
      afterhtml.style.transition = '1.7s';
    }
    else {
      afterhtml.style.width = '0rem';
    }
  };
  function increaseaftersass() {
    if (window.scrollY >= 2260) {
      aftersass.style.width = 'calc(var(--percent-after-sass)/5.75)';
      aftersass.style.transition = 'ease-in-out';
      aftersass.style.transition = '1.7s';
    }
    else {
      aftersass.style.width = '0rem';
    }
  };
  function increaseaftercss() {
    if (window.scrollY >= 2260) {
      aftercss.style.width = 'calc(var(--percent-after-css)/5.5)';
      aftercss.style.transition = 'ease-in-out';
      aftercss.style.transition = '1.7s';
    }
    else {
      aftercss.style.width = '0rem';
    }
  };
  function increaseafterjs() {
    if (window.scrollY >= 2260) {
      afterjs.style.width = 'calc(var(--percent-after-js)/3.26)';
      afterjs.style.transition = ' ease-in-out';
      afterjs.style.transition = '1.7s';
    }
    else {
      afterjs.style.width = '0rem';
    }
  };
  function increaseafterreact() {
    if (window.scrollY >= 2260) {
      afterreact.style.width = 'calc(var(--percent-after-react)/4)';
      afterreact.style.transition = ' ease-in-out';
      afterreact.style.transition = '1.7s';
    }
    else {
      afterreact.style.width = '0rem';
    }
  };
  function increaseafterjq() {
    if (window.scrollY >= 2260) {
      afterjq.style.width = 'calc(var(--percent-after-jquery)/4.9)';
      afterjq.style.transition = ' ease-in-out';
      afterjq.style.transition = '1.7s';
    }
    else {
      afterjq.style.width = '0rem';
    }
  };

  //Increase Right cube
  function increaserighthtml() {
    if (window.scrollY >= 2260) {
      righthtml.style.width = 'calc(var(--percent-right-html)/5.75)';
      righthtml.style.transition = 'ease-in-out';
      righthtml.style.transition = '1.7s';
    }
    else {
      righthtml.style.width = '0rem';
    }
  };
  function increaserightsass() {
    if (window.scrollY >= 2260) {
      rightsass.style.width = 'calc(var(--percent-right-sass)/5.75)';
      rightsass.style.transition = 'ease-in-out';
      rightsass.style.transition = '1.7s';
    }
    else {
      rightsass.style.width = '0rem';
    }
  };
  function increaserightcss() {
    if (window.scrollY >= 2260) {
      rightcss.style.width = 'calc(var(--percent-right-css)/5.5)';
      rightcss.style.transition = 'ease-in-out';
      rightcss.style.transition = '1.7s';
    }
    else {
      rightcss.style.width = '0rem';
    }
  };
  function increaserightjs() {
    if (window.scrollY >= 2260) {
      rightjs.style.width = 'calc(var(--percent-right-js)/3.26)';
      rightjs.style.transition = ' ease-in-out';
      rightjs.style.transition = '1.7s';
    }
    else {
      rightjs.style.width = '0rem';
    }
  };
  function increaserightreact() {
    if (window.scrollY >= 2260) {
      rightreact.style.width = 'calc(var(--percent-right-react)/4)';
      rightreact.style.transition = ' ease-in-out';
      rightreact.style.transition = '1.7s';
    }
    else {
      rightreact.style.width = '0rem';
    }
  };
  function increaserightjq() {
    if (window.scrollY >= 2260) {
      rightjq.style.width = 'calc(var(--percent-right-jquery)/4.9)';
      rightjq.style.transition = ' ease-in-out';
      rightjq.style.transition = '1.7s';
    }
    else {
      rightjq.style.width = '0rem';
    }
  };

  //Increase number cube
  function increasenumberhtml() {
    if (window.scrollY >= 2260) {
      numberhtml.style.left = '9rem';
      numberhtml.style.transition = 'ease-in-out';
      numberhtml.style.transition = '1.7s';
    }
    else {
      numberhtml.style.left = '-5rem';
    }
  };
  function increasenumbersass() {
    if (window.scrollY >= 2260) {
      numbersass.style.left = '9rem';
      numbersass.style.transition = 'ease-in-out';
      numbersass.style.transition = '1.7s';
    }
    else {
      numbersass.style.left = '-5rem';
    }
  };
  function increasenumbercss() {
    if (window.scrollY >= 2260) {
      numbercss.style.left = '8rem';
      numbercss.style.transition = 'ease-in-out';
      numbercss.style.transition = '1.7s';
    }
    else {
      numbercss.style.left = '-5rem';
    }
  };
  function increasenumberjs() {
    if (window.scrollY >= 2260) {
      numberjs.style.left = '0rem';
      numberjs.style.transition = ' ease-in-out';
      numberjs.style.transition = '1.7s';
    }
    else {
      numberjs.style.left = '-5rem';
    }
  };
  function increasenumberreact() {
    if (window.scrollY >= 2260) {
      numberreact.style.left = '1rem';
      numberreact.style.transition = ' ease-in-out';
      numberreact.style.transition = '1.7s';
    }
    else {
      numberreact.style.left = '-5rem';
    }
  };
  function increasenumberjq() {
    if (window.scrollY >= 2260) {
      numberjq.style.left = '4rem';
      numberjq.style.transition = ' ease-in-out';
      numberjq.style.transition = '1.7s';
    }
    else {
      numberjq.style.left = '-5rem';
    }
  };









}
//LoadingPage
// $(document).ready(() => {
//   $(window).on('load', () => {
//     $('.loading').delay(2000).fadeOut('slow');
//   });
// })
$(document).ready(function () {
  $('.loading').delay(2000).fadeOut('slow');
});
//FullPage
new fullpage('#fullPage', {
  autoScrolling: true,
  navigation: true,
  fitToSectionDelay: 1000,
  scrollingSpeed: 700,
  scrollBar: true,
  css3: true,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  //anchors : ['Home','Specialzation','Resume','About','Myproduct','Customer'],
  navigationTooltips: ['Home', 'Features', 'Resume', 'About', 'Myproduct', 'Contact'],
  licenseKey: 'VNLjYxMTBW'
});
//Product
$('#bgFirst').hover(
  function () { $('#imgFirst',).addClass('is-active'), $(this).addClass('is-active') },
  function () { $('#imgFirst').removeClass('is-active'), $(this).removeClass('is-active') }
)
$('#bgSecond').hover(
  function () { $(this).addClass('is-active'), $('#imgSecond',).addClass('is-active') },
  function () { $(this).removeClass('is-active'), $('#imgSecond',).removeClass('is-active') }
)
//Contact
$('#btn-submit').click(
  function () { $(this).addClass('sent') },
)


//FORM 
const submit = document.querySelector('#btn-submit'),
  form = document.querySelector('#sendmail');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
}, false);

//Contact
function sendEmail() {
  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var message = $("#message-input").val();
  var notifySuccess = $("#notify-success");
  var notifyFaild = $("#notify-faild");
  if (!name || !email || !message) {
    notifyFaild.addClass("contact-container-notify--active");
    setTimeout(() => {
      notifyFaild.removeClass("contact-container-notify--active");
    }, 2000)
  } else {
    Email.send({
      SecureToken: "c4215e66-7866-4694-a651-b93c8bfd76ee",
      To: 'remalw2019@gmail.com',
      From: 'remalw2019@gmail.com',
      Subject: "Thư được gửi từ trang Cv",
      Body: `👩🏻‍🦰 <strong> Name </strong> : ${name} <br/>
            📧 <strong> Email </strong> : ${email} <br/> 
            📮 <strong> Message </strong>  : ${message}`
    }).then((res) => {
      if (res === 'OK') {
        notifySuccess.addClass("contact-container-notify--active");
        setTimeout(() => {
          notifySuccess.removeClass("contact-container-notify--active");
        }, 2000)
      } else {
        notifyFaild.addClass("contact-container-notify--active");
        setTimeout(() => {
          notifyFaild.removeClass("contact-container-notify--active");
        }, 2000)
      }
    });
  }

}

function isNotEmpty(caller) {
  if (caller.val() == "") {
    caller.css('border', '1px solid red');
    return false;
  } else
    caller.css('border', '');
  return true;
}

VanillaTilt.init(document.querySelector("article div"), {
  max: 60,
  speed: 500
});
//It also supports NodeList
VanillaTilt.init(document.querySelectorAll("article div"));

//TYPING TEXT 
var captionLength = 1;
var valueText = ''
var string = " Xin chào và cảm ơn bạn đã ghé thăm website của tôi. <br> Tôi xin được tự giới thiệu họ & tên của tôi là : <b>Nguyễn Hoài Nhớ - 21 tuổi </b> . <br>Hiện tại tôi đang là một Front-end Developer . <br>Tôi sinh ra và lớn lên tại Cà Mau, hiện tại đang học tập và làm việc tại TP.HCM . <br>";
var string2 = "Tiểu Sử : <br><br>✐ Năm 2018 : Theo học ngành công nghệ thông tin - chuyên ngành công nghệ phần mềm tại Hutech University, tôi bắt đầu học tập và tìm hiểu các kiến thức cơ bản về lập trình Web. <br> ✐ Năm 2019 : Thực hiện các dự án bằng Java Web, ASP.Net + SQL. <br> ✐ Năm 2020 : Thực hiện các dự án bằng ReactJS, Redux + Axios, tham gia dự án thực tế đầu tiên : thiết kế giao diện betong24h.com <br> ✐ Hiện tại : Đang học tập và áp dụng các kiến thức React Native + GraphQL. <br>";
var string3 = "<span class='strong-letter'>👍 Điểm Mạnh:</span> <br><br> ✐ Đam mê và yêu thích lập trình. <br> ✐ Thân thiện, hòa động.<br> ✐ Có khả năng teamwork cao.<br> ✐ Dễ dàng thích nghi với các công nghệ mới.<br> ✐ Thường xuyên nâng cấp các kĩ năng của bản thân.<br> ✐ Tinh thần trách nhiệm cao.<br> ✐ Có thể làm OT ( nếu team cần ).<br><br><span class='strong-letter'>👎 Điểm Yếu: </span> <br><br> ✐ Thời gian làm việc còn hạn chế ( vẫn còn đang trong chương trình đại học ).<br> ✐ Theo học quá nhiều công nghệ cùng lúc dẫn đến lan man  <br>";
var string4 = "<span class='strong-letter'>🌐 Dự án thực tế</span>: <br><br>🔗 betong24.com <br><br><span class='strong-letter'>🌐 Dự án bản thân : </span><br><br>🔗 https://github.com/hoainho/mbook <br> 🔗 https://github.com/hoainho/BE-MBook <br>🔗 https://github.com/hoainho/R-store.git";

function testTypingEffect(href) {
  captionE1 = $(`#${href} p`);
  if (href === 'intro') {
    valueText = string;
  } else if (href === 'education') {
    valueText = string2;
  } else if (href === 'self') {
    valueText = string3;
  }
  else if (href === 'project') {
    valueText = string4;
  }
  type();
}
function type() {
  captionE1.html(
    valueText?.substr(0, captionLength++)
  )
  if (captionLength < valueText?.length + 1) {
    setTimeout('type()', 50);
  }
  else {
    captionLength = 0;
  }
}

