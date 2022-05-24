
 /* jQuery Pre loader
  -----------------------------------------------*/
  

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




// language code

const langEl = document.querySelector('.langWrap');
const langEl1 = document.querySelector('.social-icon-up-div');
const link = document.querySelectorAll('.lang');
const homehEl = document.querySelector('.homeh');
const homepEl = document.querySelector('.homep');
const whohEl = document.querySelector('.whoh');
const whotEl = document.querySelector('.whot');
const whopEl = document.querySelector('.whop');
const whomEl = document.querySelector('.whom');
const navaEl = document.querySelector('.nava');
const navcEl = document.querySelector('.navc');
const navtEl = document.querySelector('.navt');
const navhEl = document.querySelector('.navh');
const teamhEl = document.querySelector('.teamh');
const gethEl = document.querySelector('.geth');
const getbEl = document.querySelector('.getb');
const foothEl = document.querySelector('.footh');
const footsEl = document.querySelector('.foots');

// const chngtoar = document.querySelector('#arabic');
// const chngtoen = document.querySelector('#english');


// chngtoar.addEventListener('click', ()=> {
//   homepEl.classList.remove('rtl')
// })

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    const attr = el.getAttribute('language');

    homehEl.textContent = data[attr].homeh;
    homepEl.textContent = data[attr].homep;
    whohEl.textContent = data[attr].whoh;
    whotEl.textContent = data[attr].whot;
    whomEl.textContent = data[attr].whom;
    whopEl.textContent = data[attr].whop;
    navhEl.textContent = data[attr].navh;
    navaEl.textContent = data[attr].nava;
    navcEl.textContent = data[attr].navc;
    navtEl.textContent = data[attr].navt;
    teamhEl.textContent = data[attr].teamh;
    gethEl.textContent = data[attr].geth;
    getbEl.textContent = data[attr].getb;
    foothEl.textContent = data[attr].footh;
    footsEl.textContent = data[attr].foots;

  });
});


var data = {
  "english": 
  {
    "homeh": "HOME",
    "homep": "Maintaining the highest level of professionalism and honesty. and To grow by consistently providing useful and relevant products, services, and solutions to the markets we already serve",
      "whoh": " About PixaSteel",
      "whot": "  CONTACT US",
      "whom":"PROJECTS",
      "whop":" Pixa steel for metal industries. founded in the year 1997 and its first brand name was Al-Shimmy company and after the technological developments that occurred in the metal industry, the name was changed to Pixa steel in the year 2018. We are a leading company in the manufacture of metal structures, trusses, overhead and bridge cranes and billboards. we have an expert team that has the skill to develop strategies that suit clients' needs. 24 years of experience and dedication. L.L.C  ",  
      "navh":"CONTACT US",
      "nava":"About",
      "navt":"Partners",
      "navc":"Contact Us",
      "teamh" :"Partners",
      "geth" : "Get in touch",
      "getb" : "SEND MESSAGE",
      "footh":"Show Media Production",
      "foots":"Our Studio",
      "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",
      
  },
  "arabic": 
  {
    "homeh":"الرئيسيه",
    "homep": "الحفاظ على أعلى مستوى من المهنية والصدق والنمو من خلال توفير المنتجات والخدمات والحلول المفيدة وذات الصلة للأسواق التي نخدمها بالفعل ",
      "whoh": "عن بيكساستيل",
      "whot": "تواصل معنا",
      "whom": "المشروعات ",
      "whop": "بيكسا ستيل للصناعات المعدنية. تأسست في عام 1997 واسم علامتها التجارية الأول كان شركة الشيمي وبعد التطورات التكنولوجية التي حدثت في صناعة المعادن ، تم تغيير الاسم إلى بيكسا ستيل في عام 2018. نحن شركة رائدة في صناعة الهياكل المعدنية والجمالونات والاوناش العلوية والاوناش الجسريه واللوحات الإعلانية. لدينا فريق متكامل من الخبراء لديه المهارة لوضع الاستراتيجيات وتطويرها التي تناسب احتياجات L.L.C العملاء. 24 عاما من الخبرة والتفاني ",
      "navh":"تواصل معنا",
      "nava":"عنا",
      "navt":"شركاؤنا",
      "navc":"اتصل بنا",
      "teamh" : "شركاؤنا",
      "geth" : "ابقي علي تواصل",
      "getb" : "أرسل",
      "footh":"Show Media Production",
      "foots":"الاستوديو",
      "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
  }

}


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
