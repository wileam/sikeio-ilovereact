function animateLogo() {
  TweenMax.fromTo('#J_reactLogo',2, {
      // from
      css: {
        y: "-10px"
      }
    },{
      // to
      css: {
        y:"10px"
      },

      // 永久重复动画的选项
      repeat: -1,

      // 反转、重新运行动画的选项
      yoyo: true,
      ease: Power2.easeInOut
    }
  );
}

function animateRobot() {
  var t = new TimelineMax({yoyo: false, repeat: -1});
  t.to("#J_robot",1,{rotation: "-=15deg"})
   .to("#J_robot",1,{rotation: "+=15deg"})
   .to("#J_robot",1,{rotation: "+=15deg"})
   .to("#J_robot",1,{rotation: "-=15deg"});

}

function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // Get the section pointed to by the link
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.offsetHeight;

    // Check if window.scrollY is between the section.
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll('#slider-control a')

  for (var i = links.length - 1; i >= 0; i--) {
    var link = links[i];

    // use closure to fix this bug:
    // (function (link) {
    //   link.addEventListener('click', function(){
    //     console.log('link inside closure: '+link);
    //   });
    // })(link);

    link.addEventListener("click",function(event) {
      // `event` is the mouse click event
      event.preventDefault();

      console.log('link: '+link);
      console.log('this: '+this);

      // BUG WARNING! Fix with a closure or ES6 `let`.
      // http://stackoverflow.com/questions/8909652/adding-click-event-listeners-in-loop
      var href = this.getAttribute('href');

      // TODO: use ES6 `let` to fix this

      scrollToElement(document.querySelector(href));
    });
  }
}


window.onscroll = function() {
  updateSliderControl();
};

window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};