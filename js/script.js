let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementsByClassName("close6")[0];

btn6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span7 = document.getElementsByClassName("close7")[0];

btn7.onclick = function() {
  modal7.style.display = "block";
}

span7.onclick = function() {
  modal7.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("myBtn8");
var span8 = document.getElementsByClassName("close8")[0];

btn8.onclick = function() {
  modal8.style.display = "block";
}

span8.onclick = function() {
  modal8.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("myBtn9");
var span9 = document.getElementsByClassName("close9")[0];

btn9.onclick = function() {
  modal9.style.display = "block";
}

span9.onclick = function() {
  modal9.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("myBtn10");
var span10 = document.getElementsByClassName("close10")[0];

btn10.onclick = function() {
  modal10.style.display = "block";
}

span10.onclick = function() {
  modal10.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}

var modal11 = document.getElementById("myModal11");
var btn11 = document.getElementById("myBtn11");
var span11 = document.getElementsByClassName("close11")[0];

btn11.onclick = function() {
  modal11.style.display = "block";
}

span11.onclick = function() {
  modal11.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}

var modal12 = document.getElementById("myModal12");
var btn12 = document.getElementById("myBtn12");
var span12 = document.getElementsByClassName("close12")[0];

btn12.onclick = function() {
  modal12.style.display = "block";
}

span12.onclick = function() {
  modal12.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}

var modal13 = document.getElementById("myModal13");
var btn13 = document.getElementById("myBtn13");
var span13 = document.getElementsByClassName("close13")[0];

btn13.onclick = function() {
  modal13.style.display = "block";
}

span13.onclick = function() {
  modal13.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal13) {
    modal13.style.display = "none";
  }
}

var modal14 = document.getElementById("myModal14");
var btn14 = document.getElementById("myBtn14");
var span14 = document.getElementsByClassName("close14")[0];

btn14.onclick = function() {
  modal14.style.display = "block";
}

span14.onclick = function() {
  modal14.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal14) {
    modal14.style.display = "none";
  }
}

var modal15 = document.getElementById("myModal15");
var btn15 = document.getElementById("myBtn15");
var span15 = document.getElementsByClassName("close15")[0];

btn15.onclick = function() {
  modal15.style.display = "block";
}

span15.onclick = function() {
  modal15.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal15) {
    modal15.style.display = "none";
  }
}

var modal16 = document.getElementById("myModal16");
var btn16 = document.getElementById("myBtn16");
var span16 = document.getElementsByClassName("close16")[0];

btn16.onclick = function() {
  modal16.style.display = "block";
}

span16.onclick = function() {
  modal16.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal16) {
    modal16.style.display = "none";
  }
}

var modal17 = document.getElementById("myModal17");
var btn17 = document.getElementById("myBtn17");
var span17 = document.getElementsByClassName("close17")[0];

btn17.onclick = function() {
  modal17.style.display = "block";
}

span17.onclick = function() {
  modal17.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal17) {
    modal17.style.display = "none";
  }
}

var modal18 = document.getElementById("myModal18");
var btn18 = document.getElementById("myBtn18");
var span18 = document.getElementsByClassName("close18")[0];

btn18.onclick = function() {
  modal18.style.display = "block";
}

span18.onclick = function() {
  modal18.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal18) {
    modal18.style.display = "none";
  }
}

var modal19 = document.getElementById("myModal19");
var btn19 = document.getElementById("myBtn19");
var span19 = document.getElementsByClassName("close19")[0];

btn19.onclick = function() {
  modal19.style.display = "block";
}

span19.onclick = function() {
  modal19.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal19) {
    modal19.style.display = "none";
  }
}