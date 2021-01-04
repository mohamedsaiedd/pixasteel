
 /* jQuery Pre loader
  -----------------------------------------------*/
  $(window).on("load",function(){
    $('.preloader').fadeOut(1000); 
})


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// cursor

let mouseCursor = document.querySelector(".cursor");
let imagesHover = document.querySelectorAll(".about-images");
let textHover = document.querySelector(".about-info-p");
let homeImageHover = document.querySelector(".img-home");
let navLinks = document.querySelectorAll(".navbar-nav li" );


window.addEventListener("mousemove" , mouse);

function mouse(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

imagesHover.forEach(imgg => {
  imgg.addEventListener("mouseover" , () => {
    mouseCursor.classList.add("filter-images-mouseover")
  });
  imgg.addEventListener("mouseout" , () => {
    mouseCursor.classList.remove("filter-images-mouseover")
  });
})


textHover.addEventListener("mouseover" , () => {
  mouseCursor.classList.add("filter-text-mouseover")
})
textHover.addEventListener("mouseout" , () => {
  mouseCursor.classList.remove("filter-text-mouseover")
})

navLinks.forEach(link => {
link.addEventListener("mouseover" , () => {
  mouseCursor.classList.add("filter-nav")
})
link.addEventListener("mouseout" , () => {
  mouseCursor.classList.remove("filter-nav")
});
})



//   /* Home Slideshow Vegas
//   -----------------------------------------------*/
  
//    /* Back top
//   -----------------------------------------------*/
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//         $('.go-top').fadeIn(200);
//         } else {
//           $('.go-top').fadeOut(200);
//         }
//         });   
//         // Animate the scroll to top
//       $('.go-top').click(function(event) {
//         event.preventDefault();
//       $('html, body').animate({scrollTop: 0}, 300);
//       })
      

//   /* wow
//   -------------------------------*/
//   new WOW({ mobile: true }).init();

//   $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".fixed-top");
//       var $navLink = $(".nav-link");
//       var $bar1 = $(".bar1");
//       var $bar2 = $(".bar2");
//       var $bar3 = $(".bar3"); 
      
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//       $navLink.toggleClass('scrolle', $(this).scrollTop() > $nav.height());
//       $bar1.toggleClass('scroll1', $(this).scrollTop() > $nav.height());
//       $bar2.toggleClass('scroll2', $(this).scrollTop() > $nav.height());
//       $bar3.toggleClass('scroll3', $(this).scrollTop() > $nav.height());
//       ;
//     });
//   });

//   function myFunction(x) {
//     x.classList.toggle("change");
//     }

// function douple(x) {
//   x.classList.toggle("up");
// }
//    $(".links ul li a").click(function () {
//      $('html , body').animate({
//        scrollTop: $('#' + $(this).data('value')).offset().top
//      }, 1000)
//    })
//    $(".contact-btn").click(function () {
//     $('html , body').animate({
//       scrollTop: $('#' + $(this).data('value')).offset().top
//     }, 1000)
//   })

// // language code

//     const langEl = document.querySelector('.langWrap');
//     const langEl1 = document.querySelector('.social-icon-up-div');
// 		const link = document.querySelectorAll('.lang');
// 		const homehEl = document.querySelector('.homeh');
   
//     const whohEl = document.querySelector('.whoh');
//     const whopEl = document.querySelector('.whop');
//     const whomEl = document.querySelector('.whom');
//     const navaEl = document.querySelector('.nava');
//     const navcEl = document.querySelector('.navc');
//     const navtEl = document.querySelector('.navt');
//     const navhEl = document.querySelector('.navh');
//     const teamhEl = document.querySelector('.teamh');
//     const gethEl = document.querySelector('.geth');
//     const getbEl = document.querySelector('.getb');
//     const foothEl = document.querySelector('.footh');
//     const footsEl = document.querySelector('.foots');
  
// 		link.forEach(el => {
// 			el.addEventListener('click', () => {
//         langEl.querySelector('.active').classList.remove('active');
//         el.classList.add('active');
//         const attr = el.getAttribute('language');
// 				homehEl.textContent = data[attr].homeh;
//         whohEl.textContent = data[attr].whoh;
//         whomEl.textContent = data[attr].whom;
//         whopEl.textContent = data[attr].whop;
//         navaEl.textContent = data[attr].nava;
//         navcEl.textContent = data[attr].navc;
//         navtEl.textContent = data[attr].navt;
//         navhEl.textContent = data[attr].navh;
//         teamhEl.textContent = data[attr].teamh;
//         gethEl.textContent = data[attr].geth;
//         getbEl.textContent = data[attr].getb;
//         foothEl.textContent = data[attr].footh;
//         footsEl.textContent = data[attr].foots;

// 			});
//     });
  
//     let ArbicP = `
   
// الهدف الرئيسي للشركة هو توفير مستوى عالٍ من الجودة يتناسب مع توقعات عملائنا وميزانيتهم، ونهدف إلى كسب رضا العملاء وثقتهم

// وما يسمح لنا بتقديم ما وعدنا به سابقًا هو أن لدينا فريقًا أكاديميًا محترفًا متكاملاً من صانعي الأفلام
// وكذلك نسهل عملية الإنتاج مهما كان حجم الإنتاج

// لدينا قائمة طويلة من العملاء الراضين ونهدف إلى جعلك واحدًا. يمكننا توفير جميع عناصر إنتاج الأفلام والفيديو في أي مرحلة في عملية الإنتاج من التطوير إلى ما بعد الإنتاج

// تعمل شو ميديا برودكشن كبوابة لإنتاج الأفلام السنيمائية والإنتاج التلفزيوني والخدمات الإعلامية، وهي الحل مثالي للمنتجين والمخرجين الذين يتطلعون إلى التوسع بشكل عام
//  وتتمثل رؤيتنا في بناء مجموعة واسعة من العملاء المحليين والدوليين

//     `
// 		var data = {
// 			  "english": 
// 			  {
// 			    "homeh": "WE ARE SHOW STUDIO",
// 			    "homep": "Website is Under Implementation  our new creative website , Will Coming Soon!",
//             "whoh": " WHO WE ARE !",
//             "whot": "",
//             "whom": "Show Media Production  is a Media Production Services Company founded in 2020 based in Egypt - Giza government, owned and directed by MAHMOUD EL SHEIKH who produced more than 100 various projects such as:Movies, Theaters, Serieses in all kinds , Campaigns  Advertisements and Awareness’s, Ceremonies and Events",
//             "whop": `
// The company main reason to be exist is to provide a high level of quality which matches our clients expectations and budge, and we aiming to gain the clients satisfaction and trust, 
            
// And what's allow us to provide what we promised previously is that we do have an experienced academic professionals filmmakers team, we do also facilitate the production process no matter the size of the production,
            
// We have a long list of satisfied clients and we aim to make you one. We can provide all elements of film and video production at any phase in the production process from Development to Post Production
// Our production team job ensure that you reach your goals, 
// Show Media Production works as the gateway to film Production, television production, and Media services, the company ideal solution for Producers and Directors who are looking to go wildly,
// Our vision is to build a wide range of local and international clients.
//             `,  
//             "navh":"Home",
//             "nava":"About",
//             "navt":"Partners",
//             "navc":"Contact Us",
//             "teamh" : "Partners",
//             "geth" : "Get in touch",
//             "getb" : "SEND MESSAGE",
//             "footh":"Show Media Production",
//             "foots":"Our Studio",
//             "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",
            
// 			  },
// 			  "arabic": 
// 			  {
// 			    "homeh":"WE ARE SHOW STUDIO",
// 			    "homep": "!الموقع تحت الانشاء , موقعنا المذهل يأتي قريبا ",
//             "whoh": "من نحن !",
//             "whot": " ",
//             "whom": "شو ميديا برودكشن هي شركة خدمات إنتاج إعلامي تأسست عام 2020 ومقرها مصر - محافظة الجيزة  \n \n، يملكها ويديرها محمود الشيخ الذي أنتج أكثر من 100 مشروع متنوع مثل: الأفلام ، المسارح ، المسلسلات بجميع أنواعها ، والحملات الإعلانية والتوعوية والاحتفالات وتنظيم الاحداث ذات الأهمية ",
//             "whop": ArbicP,
//             "navh":"الرئيسيه",
//             "nava":"عنا",
//             "navt":"شركاؤنا",
//             "navc":"اتصل بنا",
//             "teamh" : "شركاؤنا",
//             "geth" : "ابقي علي تواصل",
//             "getb" : "أرسل",
//             "footh":"Show Media Production",
//             "foots":"الاستوديو",
//             "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
// 			  }
			
//       }
     



//     //   $(function() {
//     //     $('body').vegas({
//     //         slides: [
//     //           { src: './images/3_4.jpg' ,  delay:7000 , transition: 'zoomOut'},
//     //             { src: './images/tiktok2.jpg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/ramadan.jpg' , delay:7000 ,transition: 'zoomOut' },
//     //             { src: './images/30years.jpg'   , delay:7000 ,transition: 'zoomOut'},
//     //             { src: './images/d286d378599593.5d63cfac43c29.png'  , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/badla.jpeg' , delay:7000, transition: 'zoomOut'},
//     //             { src: './images/morgan.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/awnta.jpg' , delay:7000 , transition: 'zoomOut' },
//     //             { src: './images/KHER.jpg'  , delay:7000 , transition: 'zoomOut'},
                
//     //         ],
//     //         overlay: '/js/vegas/dist/overlays/05.png',
//     //         transitionDuration: 8000,
//     //         delay:5000,
//     //         animation: [ 'kenburnsLeft'],
//     //         transition: [ 'fade']

//     //     }  );
//     // } );
    
//     $(document).ready(function(){
//       $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4
//           }
//         }, {
//           breakpoint: 520,
//           settings: {
//             slidesToShow: 3
//           }
//         }]
//       });
//     });

//     function sendFunAlert() {
//       // Get the snackbar DIV
//       var x = document.getElementById("snackbar");
    
//       // Add the "show" class to DIV
//       x.className = "show";
    
//       // After 3 seconds, remove the show class from DIV
//       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }

//     var textIndentPercent = 150;
// var marqueeCenteringInterval = setInterval(function() {
//     console.log(document.getElementById('my-marquee'));
//     console.log(textIndentPercent);
//     console.log(document.getElementById('my-marquee').style.textIndent);
//     document.getElementById('my-marquee').style.textIndent = -textIndentPercent + '%';
//     textIndentPercent -= 0.00005;
//     if (textIndentPercent < 0) {
//         document.getElementById('my-marquee').style.textIndent = '0px';
//         clearInterval(marqueeCenteringInterval);
//     }
// }, 100);

// function rtl() {
//   var element = document.getElementById("arabic");
//   element.classList.add("rtl");
// }
